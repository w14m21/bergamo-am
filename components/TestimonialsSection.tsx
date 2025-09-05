import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Fatima",
		location: "Rabat, Maroc",
		rating: 5,
		text: "Service exceptionnel ! L'équipe Bergamo a transformé mon jardin en véritable oasis. Très professionnels et ponctuels.",
		service: "Jardinage & Aménagement paysager",
	},
	{
		name: "Ahmed",
		location: "Casablanca, Maroc",
		rating: 5,
		text: "Excellent travail de nettoyage pour ma villa. Attention aux détails remarquable. Je recommande vivement Bergamo.",
		service: "Nettoyage",
	},
	{
		name: "Touria",
		location: "Salé, Maroc",
		rating: 5,
		text: "Ma piscine n'a jamais été aussi propre ! Service régulier et fiable. L'équipe est très compétente.",
		service: "Nettoyage de piscine",
	},
	{
		name: "Mohammed",
		location: "Témara, Maroc",
		rating: 5,
		text: "Services de bricolage impeccables. Ils ont rénové ma cuisine avec expertise et dans les délais. Parfait !",
		service: "Bricolage",
	},
	{
		name: "Zineb",
		location: "Kénitra, Maroc",
		rating: 5,
		text: "Nettoyage de voiture professionnel et soigné. Mon véhicule ressemble à neuf après leur passage !",
		service: "Lavage auto",
	},
	{
		name: "Khalid",
		location: "Sala Al Jadia, Maroc",
		rating: 5,
		text: "Problème de nuisibles résolu rapidement et efficacement. Service client excellent et solutions durables.",
		service: "Lutte antiparasitaire",
	},
];

export function TestimonialsSection() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Retours clients
					</h2>
					<p className="text-lg text-gray-700 max-w-3xl mx-auto">
						Découvrez les témoignages de nos clients satisfaits qui nous font
						confiance pour l&apos;entretien de leurs espaces.
					</p>
				</div>

				<div className="relative">
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-2 md:-ml-4">
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
								>
									<Card className="hover:shadow-lg transition-all duration-300 h-full border-l-4 border-l-green-500">
										<CardContent className="p-6 flex flex-col h-full">
											{/* Rating stars at top */}
											<div className="flex mb-4 justify-center">
												{[...Array(testimonial.rating)].map((_, i) => (
													<Star
														key={i}
														className="w-5 h-5 text-yellow-400 fill-current"
													/>
												))}
											</div>

											{/* Testimonial text */}
											<blockquote className="text-gray-700 mb-6 italic text-center flex-grow">
												{testimonial.text}
											</blockquote>

											{/* Client info */}
											<div className="flex items-center justify-center space-x-4">
												<div className="text-center">
													<h4 className="font-semibold text-gray-900">
														{testimonial.name}
													</h4>
													<p className="text-sm text-gray-600">
														{testimonial.location}
													</p>
													<div className="text-xs text-blue-600 font-medium mt-1">
														{testimonial.service}
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="hidden md:flex -left-12 bg-green-600 hover:bg-green-700 text-white border-green-600" />
						<CarouselNext className="hidden md:flex -right-12 bg-green-600 hover:bg-green-700 text-white border-green-600" />
					</Carousel>

					{/* Dots indicator */}
					<div className="flex justify-center mt-8 space-x-2">
						{testimonials.map((_, index) => (
							<div
								key={index}
								className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}