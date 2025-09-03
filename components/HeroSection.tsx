"use client"
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/BG.png')] bg-cover bg-center"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
        <h1>
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
           Bergamo AM
          </span>
        <br />
         <span className="text-green-900 font-bold block mt-6 text-3xl md:text-6xl lg:text-7xl">
           Votre espace - Notre expertise
         </span>
        </h1>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réservez nos services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-600/20 rounded-full blur-xl"></div>
    </section>
  );
}