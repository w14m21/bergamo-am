export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// --- Redis client ---
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// --- Rate limiter: 3 requests per IP per hour ---
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "1 h"),
  analytics: true,
});

// --- Booking data type ---
interface BookingData {
  name: string;
  email: string;
  phone?: string;
  services: string[];
  additionalNotes?: string;
  preferredDate?: string; // ISO date string
  cleaningTypes?: string[];
  propertySize?: string;
  rooms?: string;
  livingRooms?: string;
  toilets?: string;
  vehicleSizes?: string[];
  carWashTypes?: string[];
  degreasingItems?: string[];
  quantities?: Record<string, number>;
  poolSize?: string;
  handymanServices?: string[];
  pestTypes?: string[];
  pestArea?: string;
  gardenArea?: string;
  photos?: string[];
}

// --- Env validation ---
function getTransporter() {
  const { SMTP_USER, SMTP_PASS, BUSINESS_EMAIL } = process.env;
  if (!SMTP_USER || !SMTP_PASS || !BUSINESS_EMAIL) {
    throw new Error(
      "❌ Missing SMTP_USER, SMTP_PASS, or BUSINESS_EMAIL in environment variables."
    );
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

// --- Validate booking data ---
function validateBookingData(data: unknown): string | null {
  if (!data || typeof data !== "object") return "Invalid request body";
  const booking = data as BookingData;
  if (!booking.name || typeof booking.name !== "string")
    return "Missing or invalid name";
  if (!booking.email || typeof booking.email !== "string")
    return "Missing or invalid email";
  if (!Array.isArray(booking.services) || booking.services.length === 0)
    return "Missing or invalid services";
  return null;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // --- Apply rate limit ---
    const { success, remaining, reset } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error: "Trop de tentatives. Réessayez plus tard.",
          reset,
        },
        { status: 429 }
      );
    }

    // --- Parse JSON safely ---
    let data: BookingData;
    try {
      data = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // --- Validate data ---
    const validationError = validateBookingData(data);
    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    }

    const transporter = getTransporter();

    // --- Email to business ---
    await transporter.sendMail({
      from: `"Site Web" <${process.env.SMTP_USER}>`,
      to: process.env.BUSINESS_EMAIL!,
      subject: "📌 Nouvelle réservation reçue",
      text: `Nouvelle réservation :\n\n${JSON.stringify(data, null, 2)}`,
      html: `
        <h2>Nouvelle réservation reçue</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone || "Non fourni"}</p>
        <p><strong>Services:</strong> ${data.services.join(", ")}</p>
      `,
    });

    // --- Confirmation email to client ---
    await transporter.sendMail({
      from: `"Votre Entreprise" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "✅ Confirmation de votre réservation",
      text: `Bonjour ${data.name},\n\nMerci pour votre réservation ! Nous vous contacterons bientôt.`,
      html: `
        <h2>Merci pour votre réservation, ${data.name} 🎉</h2>
        <p>Nous avons bien reçu vos informations et nous vous contacterons rapidement.</p>
        <ul>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Téléphone:</strong> ${data.phone || "Non fourni"}</li>
          <li><strong>Services:</strong> ${data.services.join(", ")}</li>
        </ul>
        <p>Cordialement,<br>L’équipe</p>
      `,
    });

    return NextResponse.json({ success: true, remaining });
  } catch (err) {
    console.error("❌ Erreur envoi email:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
