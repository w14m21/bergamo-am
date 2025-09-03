import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SiteWireframe() {
  const sections = [
    {
      name: "Header",
      description: "Navigation + Logo Bergamo",
      color: "bg-blue-100 border-blue-300",
      height: "h-16",
      content: ["Logo Bergamo", "Menu Navigation", "Contact Button"]
    },
    {
      name: "Hero Section",
      description: "Titre principal + CTA",
      color: "bg-green-100 border-green-300", 
      height: "h-96",
      content: [
        "Titre: 'Bergamo – Le soin complet de vos espaces'",
        "Sous-titre: 'Intérieurs et extérieurs, propres, sains et agréables à vivre'",
        "Image de fond",
        "Bouton CTA 'Réserver maintenant'"
      ]
    },
    {
      name: "About Section",
      description: "Présentation de l'entreprise",
      color: "bg-yellow-100 border-yellow-300",
      height: "h-64",
      content: [
        "Titre: 'À propos de Bergamo'",
        "Description de l'entreprise",
        "Image/Photo équipe",
        "Valeurs clés"
      ]
    },
    {
      name: "Values Section", 
      description: "Valeurs + Statistiques",
      color: "bg-purple-100 border-purple-300",
      height: "h-80",
      content: [
        "Titre: 'Nos valeurs et performances'",
        "Grille de valeurs (Excellence, Confiance, etc.)",
        "Statistiques de performance",
        "Icônes et métriques"
      ]
    },
    {
      name: "Services Section",
      description: "7 services avec cartes",
      color: "bg-indigo-100 border-indigo-300", 
      height: "h-[600px]",
      content: [
        "Titre: 'Nos Services'",
        "Grille 3x2 + 1 carte centrée:",
        "• Nettoyage",
        "• Jardinage & Aménagement",
        "• Piscine & Eau",
        "• Bricolage", 
        "• Lavage auto",
        "• Lutte antiparasitaire",
        "• Dégraissage & Pressing (centrée)"
      ]
    },
    {
      name: "Booking Section",
      description: "Formulaire de réservation dynamique", 
      color: "bg-teal-100 border-teal-300",
      height: "h-[500px]",
      content: [
        "Titre: 'Réservez votre service'",
        "Formulaire avec champs dynamiques:",
        "• Nom, Email, Téléphone",
        "• Sélection service",
        "• Champs conditionnels selon service",
        "• Date et heure",
        "• Message",
        "• Bouton soumission"
      ]
    },
    {
      name: "Testimonials Section",
      description: "Carrousel de témoignages clients",
      color: "bg-pink-100 border-pink-300",
      height: "h-96", 
      content: [
        "Titre: 'Retours clients'",
        "Carrousel de témoignages:",
        "• Photo client + nom + lieu",
        "• Étoiles de notation", 
        "• Témoignage texte",
        "• Service utilisé",
        "• Navigation par flèches"
      ]
    },
    {
      name: "Add Testimonial Section",
      description: "Formulaire d'ajout de témoignage",
      color: "bg-orange-100 border-orange-300",
      height: "h-[500px]",
      content: [
        "Titre: 'Partagez votre expérience'",
        "Formulaire d'ajout:",
        "• Nom complet",
        "• Localisation", 
        "• Service utilisé (select)",
        "• Notation par étoiles",
        "• Zone de texte témoignage",
        "• Bouton de soumission"
      ]
    },
    {
      name: "Footer",
      description: "Informations de contact + liens",
      color: "bg-gray-100 border-gray-300",
      height: "h-32",
      content: [
        "Logo Bergamo",
        "Informations de contact",
        "Liens utiles",
        "Réseaux sociaux",
        "Copyright"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wireframe - Site Bergamo
          </h1>
          <p className="text-lg text-gray-600">
            Structure visuelle du site web professionnel Bergamo
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Bergamo – Le soin complet de vos espaces
          </div>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className={`${section.color} shadow-lg`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    {index + 1}. {section.name}
                  </CardTitle>
                  <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                    {section.description}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className={`${section.height} border-2 border-dashed border-gray-400 rounded-lg p-4 bg-white/50`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 h-full">
                    {section.content.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="bg-white/80 p-3 rounded border border-gray-300 text-sm"
                      >
                        {item.startsWith('•') ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span>{item.substring(2)}</span>
                          </div>
                        ) : (
                          <div className={item.includes(':') ? 'font-medium' : ''}>
                            {item}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Légende */}
        <Card className="mt-8 bg-white border-2 border-gray-300">
          <CardHeader>
            <CardTitle>Informations techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Palette de couleurs:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Bleu, vert et jaune (couleurs logo Bergamo)</li>
                  <li>• Gradients pour les CTA</li>
                  <li>• Tons neutres pour le texte</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Fonctionnalités clés:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Formulaire de réservation dynamique</li>
                  <li>• Carrousel de témoignages interactif</li>
                  <li>• Système d ajout de témoignages</li>
                  <li>• Design responsive</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation flow */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle>Flux de navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center space-x-2 text-sm">
              <span className="bg-blue-200 px-3 py-1 rounded">Header</span>
              <span>→</span>
              <span className="bg-green-200 px-3 py-1 rounded">Hero</span>
              <span>→</span>
              <span className="bg-yellow-200 px-3 py-1 rounded">About</span>
              <span>→</span>
              <span className="bg-purple-200 px-3 py-1 rounded">Values</span>
              <span>→</span>
              <span className="bg-indigo-200 px-3 py-1 rounded">Services</span>
              <span>→</span>
              <span className="bg-teal-200 px-3 py-1 rounded">Booking</span>
              <span>→</span>
              <span className="bg-pink-200 px-3 py-1 rounded">Testimonials</span>
              <span>→</span>
              <span className="bg-orange-200 px-3 py-1 rounded">Add Review</span>
              <span>→</span>
              <span className="bg-gray-200 px-3 py-1 rounded">Footer</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}