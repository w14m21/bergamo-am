"use client"
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string[];
  additionalNotes: string;
  preferredDate: Date | undefined;
  // Cleaning specific
  cleaningTypes: string[];
  propertySize: string;
  rooms: string;
  livingRooms: string;
  toilets: string;
  // Car wash specific
  vehicleSizes: string[];
  carWashTypes: string[];
  // Degreasing specific
  degreasingItems: string[];
  quantities: { [key: string]: number };
  // Pool specific
  poolSize: string;
  // Handyman specific
  handymanServices: string[];
  // Pest control specific
  pestTypes: string[];
  pestArea: string;
  // Gardening specific
  gardenArea: string;
  // Photos
  photos: FileList | null;
}

export function BookingSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    services: [],
    additionalNotes: '',
    preferredDate: undefined,
    cleaningTypes: [],
    propertySize: '',
    rooms: '',
    livingRooms: '',
    toilets: '',
    vehicleSizes: [],
    carWashTypes: [],
    degreasingItems: [],
    quantities: {},
    poolSize: '',
    handymanServices: [],
    pestTypes: [],
    pestArea: '',
    gardenArea: '',
    photos: null,
  });

  const [date, setDate] = useState<Date>();

  const services = [
    'Nettoyage',
    'Jardinage & Aménagement paysager',
    'Nettoyage de piscine & Traitement de l\'eau',
    'Bricolage',
    'Lavage auto',
    'Lutte antiparasitaire',
    'Dégraissage & Pressing'
  ];

  const cleaningTypes = [
    'Villa',
    'Appartement',
    'R+1',
    'R+2', 
    'R+3',
    'R+4',
    'Autre (à préciser)'
  ];

  const vehicleSizes = [
    'Petit',
    'Moyen',
    'Grand',
    'SUV',
    'Van',
    'Autre (à préciser)'
  ];

  const carWashTypes = [
    'Lavage extérieur uniquement – Savonnage basique, rinçage et séchage',
    'Aspiration intérieure – Tapis de sol, sièges et coffre',
    'Lavage express rapide – Lavage rapide et économique (5–10 min)',
    'Lavage complet – Lavage extérieur + nettoyage intérieur (aspiration, dépoussiérage, essuyage)',
    'Lavage du soubassement – Nettoyage sous le véhicule (sel, boue, débris)',
    'Detailing (intérieur & extérieur complet)',
    'Cirage & polissage – Protection et brillance de la peinture',
    'Traitement à la barre d\'argile – Élimine les contaminants incrustés',
    'Revêtements de protection – Céramique, Téflon ou scellants',
    'Nettoyage du moteur – Dégraissage et détaillage du compartiment moteur',
    'Rénovation des phares – Polissage des phares opaques',
    'Traitement anti-odeurs / Ozone – Élimination des mauvaises odeurs',
    'Entretien du cuir & Protection des tissus – Pour sièges et intérieurs',
    'Revêtement hydrophobe pare-brise'
  ];

  const degreasingItems = [
    'Tapis',
    'Moquettes',
    'Canapés',
    'Chaises',
    'Rideaux et draperies',
    'Couettes',
    'Oreillers',
    'Matelas',
    'Uniformes industriels',
    'Chaussures',
    'Articles en cuir',
    'Meubles d\'extérieur',
    'Couchages pour animaux',
    'Vestes',
    'Pantalons',
    'Chemises',
    'Robes',
    'Ensembles',
    'Couvre-lits',
    'Autre (à préciser)'
  ];

  const handymanServices = [
    'Montage et démontage de meubles',
    'Réparations électriques',
    'Plomberie',
    'Peinture et retouches',
    'Fixation murale (TV, étagères, cadres)',
    'Calfeutrage et étanchéité',
    'Réparation portes/fenêtres',
    'Réparation de carrelage et joints',
    'Petites tâches de menuiserie',
    'Autre (à préciser)'
  ];

  const pestTypes = [
    'Rats',
    'Souris',
    'Fourmis',
    'Cafards',
    'Termites',
    'Punaises de lit',
    'Puces',
    'Araignées',
    'Acariens',
    'Tiques',
    'Oiseaux',
    'Chauves-souris',
    'Charançons',
    'Mites',
    'Coléoptères',
    'Autre (à préciser)'
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleArrayFieldChange = (field: keyof FormData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleQuantityChange = (item: string, quantity: number) => {
    setFormData(prev => ({
      ...prev,
      quantities: {
        ...prev.quantities,
        [item]: quantity
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande de réservation envoyée avec succès ! Nous vous contacterons bientôt.");
    console.log('Form submitted:', formData);
  };

  const isServiceSelected = (service: string) => formData.services.includes(service);

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Réservez nos services
          </h2>
          <p className="text-lg text-gray-700">
            Remplissez le formulaire ci-dessous pour réserver nos services.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulaire de réservation de service</CardTitle>
            <CardDescription>
              Veuillez fournir vos coordonnées et sélectionner les services dont vous avez besoin.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Client Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Informations client</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Numéro de téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                    required
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Sélection du service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                      />
                      <Label htmlFor={service}>{service}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Fields */}
              {isServiceSelected('Nettoyage') && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Détails du nettoyage</h4>
                  <div>
                    <Label>Type de propriété</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {cleaningTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.cleaningTypes.includes(type)}
                            onCheckedChange={(checked) => handleArrayFieldChange('cleaningTypes', type, checked as boolean)}
                          />
                          <Label htmlFor={type} className="text-sm">{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertySize">Superficie (m²)</Label>
                      <Input
                        id="propertySize"
                        type="number"
                        value={formData.propertySize}
                        onChange={(e) => setFormData(prev => ({...prev, propertySize: e.target.value}))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="rooms">Nombre de chambres</Label>
                      <Input
                        id="rooms"
                        type="number"
                        value={formData.rooms}
                        onChange={(e) => setFormData(prev => ({...prev, rooms: e.target.value}))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="livingRooms">Salons</Label>
                      <Input
                        id="livingRooms"
                        type="number"
                        value={formData.livingRooms}
                        onChange={(e) => setFormData(prev => ({...prev, livingRooms: e.target.value}))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="toilets">Toilettes</Label>
                      <Input
                        id="toilets"
                        type="number"
                        value={formData.toilets}
                        onChange={(e) => setFormData(prev => ({...prev, toilets: e.target.value}))}
                      />
                    </div>
                  </div>
                </div>
              )}

              {isServiceSelected('Lavage auto') && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Détails du lavage auto</h4>
                  <div>
                    <Label>Taille du véhicule</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {vehicleSizes.map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox
                            id={size}
                            checked={formData.vehicleSizes.includes(size)}
                            onCheckedChange={(checked) => handleArrayFieldChange('vehicleSizes', size, checked as boolean)}
                          />
                          <Label htmlFor={size} className="text-sm">{size}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Type de lavage</Label>
                    <div className="space-y-2 mt-2">
                      {carWashTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.carWashTypes.includes(type)}
                            onCheckedChange={(checked) => handleArrayFieldChange('carWashTypes', type, checked as boolean)}
                          />
                          <Label htmlFor={type} className="text-sm">{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isServiceSelected('Dégraissage & Pressing') && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Détails du dégraissage & pressing</h4>
                  <div>
                    <Label>Type d articles</Label>
                    <div className="space-y-3 mt-2">
                      {degreasingItems.map((item) => (
                        <div key={item} className="flex items-center justify-between space-x-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={item}
                              checked={formData.degreasingItems.includes(item)}
                              onCheckedChange={(checked) => handleArrayFieldChange('degreasingItems', item, checked as boolean)}
                            />
                            <Label htmlFor={item} className="text-sm">{item}</Label>
                          </div>
                          {formData.degreasingItems.includes(item) && (
                            <Input
                              type="number"
                              placeholder="Quantité"
                              className="w-20"
                              value={formData.quantities[item] || ''}
                              onChange={(e) => handleQuantityChange(item, parseInt(e.target.value) || 0)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isServiceSelected('Nettoyage de piscine & Traitement de l\'eau') && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Détails de la piscine</h4>
                  <div>
                    <Label htmlFor="poolSize">Taille de la piscine (m²)</Label>
                    <Input
                      id="poolSize"
                      type="number"
                      value={formData.poolSize}
                      onChange={(e) => setFormData(prev => ({...prev, poolSize: e.target.value}))}
                    />
                  </div>
                </div>
              )}

              {isServiceSelected('Bricolage') && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Services de bricolage</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {handymanServices.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.handymanServices.includes(service)}
                          onCheckedChange={(checked) => handleArrayFieldChange('handymanServices', service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isServiceSelected('Lutte antiparasitaire') && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Détails de la lutte antiparasitaire</h4>
                  <div>
                    <Label>Type de nuisible</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {pestTypes.map((pest) => (
                        <div key={pest} className="flex items-center space-x-2">
                          <Checkbox
                            id={pest}
                            checked={formData.pestTypes.includes(pest)}
                            onCheckedChange={(checked) => handleArrayFieldChange('pestTypes', pest, checked as boolean)}
                          />
                          <Label htmlFor={pest} className="text-sm">{pest}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="pestArea">Surface à traiter (m²)</Label>
                    <Input
                      id="pestArea"
                      type="number"
                      value={formData.pestArea}
                      onChange={(e) => setFormData(prev => ({...prev, pestArea: e.target.value}))}
                    />
                  </div>
                </div>
              )}

              {isServiceSelected('Jardinage & Aménagement paysager') && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Détails du jardinage</h4>
                  <div>
                    <Label htmlFor="gardenArea">Surface des espaces verts (m²)</Label>
                    <Input
                      id="gardenArea"
                      type="number"
                      value={formData.gardenArea}
                      onChange={(e) => setFormData(prev => ({...prev, gardenArea: e.target.value}))}
                    />
                  </div>
                </div>
              )}

              {/* Photo Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Informations supplémentaires</h3>
                <div>
                  <Label htmlFor="photos">Ajout de photos (optionnel)</Label>
                  <Input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setFormData(prev => ({...prev, photos: e.target.files}))}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Vous pouvez télécharger plusieurs photos pour nous aider à mieux comprendre vos besoins.
                  </p>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="additionalNotes">Notes supplémentaires</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Toute exigence particulière ou information supplémentaire..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData(prev => ({...prev, additionalNotes: e.target.value}))}
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Date souhaitée</h3>
                <div>
                  <Label htmlFor="preferredDate">Sélectionner la date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={date ? date.toISOString().split('T')[0] : ''}
                    onChange={(e) => {
                      const selectedDate = e.target.value ? new Date(e.target.value) : undefined;
                      setDate(selectedDate);
                      setFormData(prev => ({...prev, preferredDate: selectedDate}));
                    }}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                size="lg"
              >
                Envoyer la demande de réservation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}