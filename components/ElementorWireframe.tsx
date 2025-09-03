export function ElementorWireframe() {
  const sections = [
    {
      id: "header",
      name: "HEADER SECTION",
      height: "80px",
      bgColor: "#E3F2FD",
      content: [
        { type: "logo", content: "BERGAMO LOGO", width: "20%" },
        { type: "menu", content: "NAVIGATION MENU", width: "60%" },
        { type: "cta", content: "CONTACT BTN", width: "20%" }
      ]
    },
    {
      id: "hero",
      name: "HERO SECTION",
      height: "600px",
      bgColor: "#E8F5E8",
      content: [
        { type: "title", content: "Bergamo – Le soin complet de vos espaces", width: "100%" },
        { type: "subtitle", content: "Intérieurs et extérieurs, propres, sains et agréables à vivre", width: "100%" },
        { type: "cta", content: "RÉSERVER MAINTENANT", width: "300px" },
        { type: "image", content: "BACKGROUND IMAGE", width: "100%" }
      ]
    },
    {
      id: "about",
      name: "ABOUT SECTION",
      height: "400px",
      bgColor: "#FFF8E1",
      content: [
        { type: "title", content: "À propos de Bergamo", width: "100%" },
        { type: "text", content: "Description de l'entreprise et présentation", width: "50%" },
        { type: "image", content: "IMAGE ÉQUIPE", width: "50%" }
      ]
    },
    {
      id: "values",
      name: "VALUES & STATS SECTION", 
      height: "500px",
      bgColor: "#F3E5F5",
      content: [
        { type: "title", content: "Nos valeurs et performances", width: "100%" },
        { type: "grid", content: "GRILLE 4x2 : Valeurs + Statistiques", width: "100%" }
      ]
    },
    {
      id: "services",
      name: "SERVICES SECTION",
      height: "800px", 
      bgColor: "#E8EAF6",
      content: [
        { type: "title", content: "Nos Services", width: "100%" },
        { type: "grid", content: "GRILLE 3x3 (7 CARTES SERVICES)", width: "100%" },
        { type: "note", content: "Dernière carte centrée", width: "100%" }
      ]
    },
    {
      id: "booking",
      name: "BOOKING FORM SECTION",
      height: "700px",
      bgColor: "#E0F2F1", 
      content: [
        { type: "title", content: "Réservez votre service", width: "100%" },
        { type: "form", content: "FORMULAIRE DYNAMIQUE", width: "100%" },
        { type: "note", content: "Champs conditionnels selon service sélectionné", width: "100%" }
      ]
    },
    {
      id: "testimonials",
      name: "TESTIMONIALS CAROUSEL",
      height: "500px",
      bgColor: "#FCE4EC",
      content: [
        { type: "title", content: "Retours clients", width: "100%" },
        { type: "carousel", content: "CARROUSEL DE TÉMOIGNAGES", width: "100%" },
        { type: "nav", content: "Navigation flèches", width: "100%" }
      ]
    },
    {
      id: "add-testimonial", 
      name: "ADD TESTIMONIAL FORM",
      height: "600px",
      bgColor: "#FFF3E0",
      content: [
        { type: "title", content: "Partagez votre expérience", width: "100%" },
        { type: "form", content: "FORMULAIRE D'AJOUT TÉMOIGNAGE", width: "100%" },
        { type: "rating", content: "Système notation étoiles", width: "100%" }
      ]
    },
    {
      id: "footer",
      name: "FOOTER SECTION",
      height: "200px",
      bgColor: "#F5F5F5",
      content: [
        { type: "logo", content: "BERGAMO LOGO", width: "25%" },
        { type: "contact", content: "INFOS CONTACT", width: "25%" },
        { type: "links", content: "LIENS UTILES", width: "25%" },
        { type: "social", content: "RÉSEAUX SOCIAUX", width: "25%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 font-mono">
      {/* Header avec titre et infos */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            WIREFRAME BERGAMO - POUR ELEMENTOR
          </h1>
          <p className="text-gray-600 text-sm">
            Structure reproduire dans Elementor WordPress
          </p>
        </div>

        {/* Informations techniques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-xs">
          <div className="bg-blue-50 p-3 rounded">
            <strong>Palette couleurs:</strong><br/>
            Bleu: #2196F3<br/>
            Vert: #4CAF50<br/>
            Jaune: #FFC107
          </div>
          <div className="bg-green-50 p-3 rounded">
            <strong>Largeur max:</strong><br/>
            1200px centré<br/>
            Responsive design
          </div>
          <div className="bg-yellow-50 p-3 rounded">
            <strong>Sections:</strong><br/>
            9 sections principales<br/>
            2 formulaires dynamiques
          </div>
        </div>
      </div>

      {/* Wireframe des sections */}
      <div className="max-w-6xl mx-auto space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border-2 border-gray-400 rounded-lg overflow-hidden">
            {/* En-tête de section */}
            <div className="bg-gray-800 text-white p-2 flex justify-between items-center text-sm">
              <span className="font-bold">{section.name}</span>
              <span>Hauteur: {section.height}</span>
            </div>
            
            {/* Contenu de la section */}
            <div 
              className="p-4 border-dashed border-2 border-gray-300"
              style={{ 
                backgroundColor: section.bgColor, 
                minHeight: section.height === "80px" ? "80px" : section.height === "200px" ? "200px" : "300px"
              }}
            >
              {section.id === "header" && (
                <div className="flex items-center justify-between h-full">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="border border-gray-500 p-2 bg-white text-xs text-center font-bold" 
                         style={{ width: item.width }}>
                      {item.content}
                    </div>
                  ))}
                </div>
              )}

              {section.id === "hero" && (
                <div className="flex flex-col items-center justify-center space-y-4 h-full">
                  <div className="border-2 border-gray-600 p-4 bg-white text-center max-w-2xl">
                    <div className="text-lg font-bold mb-2">TITRE PRINCIPAL</div>
                    <div className="text-sm mb-4">Sous-titre descriptif</div>
                    <div className="bg-blue-600 text-white px-6 py-2 inline-block">BOUTON CTA</div>
                  </div>
                  <div className="absolute inset-0 border border-gray-400 bg-gray-200 opacity-50 flex items-center justify-center text-gray-600">
                    IMAGE DE FOND
                  </div>
                </div>
              )}

              {section.id === "about" && (
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="border border-gray-500 p-4 bg-white">
                    <div className="font-bold mb-2">TITRE SECTION</div>
                    <div className="text-xs">Texte descriptif de l entreprise et présentation des services</div>
                  </div>
                  <div className="border border-gray-500 p-4 bg-gray-200 flex items-center justify-center text-xs">
                    IMAGE ÉQUIPE
                  </div>
                </div>
              )}

              {(section.id === "values" || section.id === "services") && (
                <div className="h-full">
                  <div className="border border-gray-500 p-2 bg-white text-center font-bold mb-4">
                    {section.content[0].content}
                  </div>
                  <div className={`grid ${section.id === "services" ? "grid-cols-3" : "grid-cols-4"} gap-3 h-3/4`}>
                    {Array.from({ length: section.id === "services" ? 7 : 8 }, (_, i) => (
                      <div key={i} className={`border border-gray-500 bg-white flex items-center justify-center text-xs font-bold ${
                        section.id === "services" && i === 6 ? "col-start-2" : ""
                      }`}>
                        {section.id === "services" ? `SERVICE ${i+1}` : `ITEM ${i+1}`}
                      </div>
                    ))}
                  </div>
                  {section.id === "services" && (
                    <div className="text-xs text-center mt-2 text-gray-600">
                      * Dernière carte (Dégraissage & Pressing) centrée
                    </div>
                  )}
                </div>
              )}

              {(section.id === "booking" || section.id === "add-testimonial") && (
                <div className="h-full">
                  <div className="border border-gray-500 p-2 bg-white text-center font-bold mb-4">
                    {section.content[0].content}
                  </div>
                  <div className="grid grid-cols-2 gap-4 h-3/4">
                    <div className="space-y-2">
                      {["NOM", "EMAIL", "TÉLÉPHONE", "SERVICE"].map((field, idx) => (
                        <div key={idx} className="border border-gray-400 p-2 bg-white text-xs">
                          {field}
                        </div>
                      ))}
                    </div>
                    <div className="border border-gray-400 p-4 bg-white text-xs">
                      {section.id === "booking" ? "CHAMPS DYNAMIQUES\n(selon service sélectionné)" : "ZONE TEXTE\nTÉMOIGNAGE"}
                    </div>
                  </div>
                  {section.id === "add-testimonial" && (
                    <div className="mt-2 text-xs text-center">
                      ⭐⭐⭐⭐⭐ Système de notation
                    </div>
                  )}
                </div>
              )}

              {section.id === "testimonials" && (
                <div className="h-full">
                  <div className="border border-gray-500 p-2 bg-white text-center font-bold mb-4">
                    {section.content[0].content}
                  </div>
                  <div className="flex items-center justify-between h-3/4">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">←</div>
                    <div className="flex-1 mx-4 grid grid-cols-3 gap-4">
                      {[1,2,3].map((i) => (
                        <div key={i} className="border border-gray-500 bg-white p-3 text-xs text-center">
                          <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
                          <div className="font-bold">CLIENT {i}</div>
                          <div>⭐⭐⭐⭐⭐</div>
                          <div>Témoignage...</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">→</div>
                  </div>
                </div>
              )}

              {section.id === "footer" && (
                <div className="grid grid-cols-4 gap-4 h-full">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="border border-gray-500 p-3 bg-white text-xs text-center font-bold">
                      {item.content}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions Elementor */}
      <div className="max-w-6xl mx-auto mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Instructions pour Elementor:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">Widgets à utiliser:</h3>
            <ul className="space-y-1">
              <li>• Section / Container</li>
              <li>• Heading (H1, H2, H3)</li>
              <li>• Text Editor</li>
              <li>• Button</li>
              <li>• Image</li>
              <li>• Form (Contact Form 7)</li>
              <li>• Icon Box</li>
              <li>• Testimonial Carousel</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Points importants:</h3>
            <ul className="space-y-1">
              <li>• Largeur max: 1200px</li>
              <li>• Espacements: 80px entre sections</li>
              <li>• Responsive: 3 colonnes → 1 colonne mobile</li>
              <li>• Formulaire dynamique avec logique conditionnelle</li>
              <li>• Carrousel avec navigation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}