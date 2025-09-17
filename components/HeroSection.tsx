"use client";

import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center bg-white overflow-hidden py-8 sm:py-12 md:py-16"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          <h1>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#093a7a] leading-tight">
              {t("title")}
            </span>
            <br />
            <p className="font-bold mt-4 sm:mt-6 text-xl sm:text-3xl md:text-5xl lg:text-7xl text-[#f5d455]">
              {t("subtitle")}
            </p>
          </h1>

          <div className="pt-6 sm:pt-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("getService")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
