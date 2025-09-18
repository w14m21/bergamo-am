import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// --- Redis client (for rate limiting) ---
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Limit: 3 requests / 10 minutes / IP
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "600 s"),
});

function getTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(req: Request) {
  try {
    // --- Rate limiting check ---
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Trop de tentatives. Réessayez plus tard." },
        { status: 429 }
      );
    }

    // --- Parse formData from frontend ---
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const address = formData.get("address")?.toString() || "";
    const notes = formData.get("notes")?.toString() || "";
    const services = formData.getAll("services").map((s) => s.toString());
    const photos = formData.getAll("photos") as File[];

    // --- Convert uploaded files → Nodemailer attachments ---
    const attachments = await Promise.all(
      photos.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const transporter = getTransporter();

    // --- Email to the company (all details + photos) ---
    await transporter.sendMail({
      from: `"Site Web - Réservation" <${process.env.SMTP_USER}>`,
      to: process.env.BUSINESS_EMAIL,
      subject: "Nouvelle réservation reçue ✅",
      text: `Un nouveau client a rempli le formulaire :

Nom: ${name}
Téléphone: ${phone}
Email: ${email}
Services: ${services.length ? services.join(", ") : "Aucun"}
Adresse: ${address}
Notes: ${notes}
`,
      attachments,
    });

    // --- Confirmation email to the client ---
    if (email) {
      await transporter.sendMail({
        from: `"Bergamo Services" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Confirmation de votre demande 📩",
        text: `Bonjour ${name},

Merci d'avoir soumis votre demande à Bergamo Services.
Notre équipe vous contactera bientôt.

Cordialement,
L’équipe Bergamo Services`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Erreur envoi email:", err);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi de l’email" },
      { status: 500 }
    );
  }
}