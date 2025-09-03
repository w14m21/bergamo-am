"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Star, MessageSquarePlus } from 'lucide-react';
import { toast } from "sonner";

const services = [
  "Nettoyage",
  "Jardinage & Aménagement paysager", 
  "Nettoyage de piscine & Traitement de l'eau",
  "Bricolage",
  "Lavage auto",
  "Lutte antiparasitaire",
  "Dégraissage & Pressing"
];

export function AddTestimonialSection() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: '',
    rating: 0,
    testimonial: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || !formData.service || !formData.rating || !formData.testimonial) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);
    
    // Simuler l'envoi du témoignage
    setTimeout(() => {
      toast.success("Merci pour votre témoignage ! Il sera examiné et publié prochainement.");
      setFormData({
        name: '',
        location: '',
        service: '',
        rating: 0,
        testimonial: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageSquarePlus className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partagez votre expérience
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Votre avis nous aide à nous améliorer et aide d autres clients à faire confiance à nos services. 
            Partagez votre expérience avec Bergamo !
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-900">
              Ajoutez votre témoignage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom et prénom"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white"
                  />
                </div>

                {/* Localisation */}
                <div className="space-y-2">
                  <Label htmlFor="location">Localisation *</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="ex: Rabat, Maroc"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-white"
                  />
                </div>
              </div>

              {/* Service utilisé */}
              <div className="space-y-2">
                <Label htmlFor="service">Service utilisé *</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Sélectionnez le service que vous avez utilisé" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Note */}
              <div className="space-y-3">
                <Label>Votre note *</Label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star 
                        className={`w-8 h-8 ${
                          star <= formData.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  {formData.rating > 0 && (
                    <span className="ml-3 text-sm text-gray-600">
                      {formData.rating} étoile{formData.rating > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
              </div>

              {/* Témoignage */}
              <div className="space-y-2">
                <Label htmlFor="testimonial">Votre témoignage *</Label>
                <Textarea
                  id="testimonial"
                  placeholder="Partagez votre expérience avec nos services..."
                  rows={4}
                  value={formData.testimonial}
                  onChange={(e) => handleInputChange('testimonial', e.target.value)}
                  className="bg-white resize-none"
                />
                <p className="text-sm text-gray-500">
                  Minimum 10 caractères. Décrivez votre expérience de manière constructive.
                </p>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    'Publier mon témoignage'
                  )}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                En soumettant ce témoignage, vous acceptez qu il puisse être publié sur notre site web 
                après modération. Vos données personnelles sont traitées conformément à notre politique de confidentialité.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}