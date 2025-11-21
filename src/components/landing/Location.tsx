import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Location() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'location-map');

  return (
    <section id="location" className="bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary">
            Où me trouver ?
          </h2>
        </ScrollAnimationWrapper>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <h3 className="text-2xl font-headline text-primary mb-6">Accord'Âme - Lyon</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>123 Rue de la Musique, 69000 Lyon, France</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="tel:+330123456789" className="hover:text-primary transition-colors">01 23 45 67 89</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="mailto:contact@accordame.fr" className="hover:text-primary transition-colors">contact@accordame.fr</a>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh et ex laoreet euismod.
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full md:w-1/2" delay={200}>
            {mapImage && (
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              </div>
            )}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
