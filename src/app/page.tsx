
import { Toaster } from "../../components/ui/sonner";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { AboutSection } from "../../components/AboutSection";
import { ValuesSection } from "../../components/ValuesSection";
import { ServicesSection } from "../../components/ServicesSection";
import { BookingSection } from "../../components/BookingSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { AddTestimonialSection } from "../../components/AddTestimonialSection";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (  
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ServicesSection />
        <BookingSection />
        <TestimonialsSection />
        <AddTestimonialSection />
      </main>
      {/* <Footer /> */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
