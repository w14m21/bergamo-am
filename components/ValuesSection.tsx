import { Heart, Shield, Sun, CheckCircle } from 'lucide-react';

export function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Passion du service */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Passion du service
            </h3>
            <p className="text-gray-600">
              Nous mettons notre cœur dans chaque intervention
            </p>
          </div>

          {/* Confiance & Sécurité */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Confiance & Sécurité
            </h3>
            <p className="text-gray-600">
              Des professionnels qualifiés et assurés
            </p>
          </div>

          {/* Proximité client */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sun className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Proximité client
            </h3>
            <p className="text-gray-600">
              Un service personnalisé et à l écoute
            </p>
          </div>

          {/* Qualité garantie */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Qualité garantie
            </h3>
            <p className="text-gray-600">
              Satisfaction client, notre priorité absolue
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 500+ Clients satisfaits */}
          <div className="bg-green-500 rounded-2xl p-8 text-center text-white">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg">Clients satisfaits</div>
          </div>

          {/* 7 Services proposés */}
          <div className="bg-blue-500 rounded-2xl p-8 text-center text-white">
            <div className="text-4xl font-bold mb-2">7</div>
            <div className="text-lg">Services proposés</div>
          </div>

          {/* 24/7 Disponibilité */}
          <div className="bg-yellow-400 rounded-2xl p-8 text-center text-gray-800">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-lg">Disponibilité</div>
          </div>

          {/* 100% Garanti */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold mb-2 text-green-500">100%</div>
            <div className="text-lg text-gray-700">Garanti</div>
          </div>
        </div>
      </div>
    </section>
  );
}