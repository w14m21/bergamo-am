import { Button } from "./ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/long logo no bg.png"
              alt="Bergamo"
              width={160} // adjust to your logo’s real width
              height={48} // adjust to your logo’s real height
              className="h-12 w-auto"
            />
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#booking"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Réservation
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}