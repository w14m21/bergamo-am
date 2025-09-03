"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Sparkles, 
  TreePine, 
  Waves, 
  Wrench, 
  Car, 
  Bug, 
  Shirt 
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Nettoyage",
    description: "Services de nettoyage complets pour maisons et bureaux",
    details: "Nettoyage professionnel pour villas, appartements et espaces commerciaux. Nous nous occupons de tout, de l'entretien quotidien au nettoyage en profondeur.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TreePine,
    title: "Jardinage & Aménagement paysager",
    description: "Entretien de jardins et conception paysagère",
    details: "Transformez vos espaces extérieurs avec nos services de jardinage experts, incluant l'entretien des pelouses, la taille, la plantation et la conception paysagère.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Waves,
    title: "Nettoyage de piscine & Traitement de l'eau",
    description: "Entretien complet de piscine et traitement de l'eau",
    details: "Gardez votre piscine cristalline avec nos services professionnels de nettoyage et d'équilibrage chimique. Entretien régulier et réparations d'urgence.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Wrench,
    title: "Bricolage",
    description: "Services de réparation et d'entretien domestique",
    details: "De la peinture aux installations en passant par les réparations et l'entretien, nos bricoleurs qualifiés peuvent gérer tous vos besoins d'amélioration de l'habitat.",
    color: "from-gray-600 to-gray-700"
  },
  {
    icon: Car,
    title: "Lavage auto",
    description: "Services professionnels de nettoyage de véhicules",
    details: "Services complets de lavage auto pour tous types de véhicules, des petites voitures aux gros SUV et fourgonnettes. Nettoyage intérieur et extérieur disponible.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: Bug,
    title: "Lutte antiparasitaire",
    description: "Solutions professionnelles de gestion des nuisibles",
    details: "Lutte antiparasitaire sûre et efficace pour maisons et entreprises. Nous gérons tous types de nuisibles avec des solutions respectueuses de l'environnement.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Shirt,
    title: "Dégraissage & Pressing",
    description: "Services professionnels d'entretien textile",
    details: "Nettoyage expert pour vêtements, couettes, tapis, couvre-lits et autres textiles. Services spécialisés de dégraissage et de pressing.",
    color: "from-yellow-500 to-orange-500"
  }
];

export function ServicesSection() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const lastService = services[6];
  const LastServiceIcon = lastService.icon;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pour tous vos besoins d entretien et de maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <p className="text-gray-700 mb-6">
                  {service.details}
                </p>
                <Button 
                  onClick={scrollToBooking}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Réserver ce service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Dernière carte centrée */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-sm">
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${lastService.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <LastServiceIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{lastService.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {lastService.description}
                </CardDescription>
                <p className="text-gray-700 mb-6">
                  {lastService.details}
                </p>
                <Button 
                  onClick={scrollToBooking}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Réserver ce service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}