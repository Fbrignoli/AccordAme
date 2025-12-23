import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

/**
 * Section "Où me trouver ?" (Localisation et Contact).
 * Affiche les coordonnées (téléphone, email, adresse, instagram) et une carte stylisée.
 */
export function Location() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'location-map');

  return (
    <section id="location" className="bg-secondary">
      <div className="container mx-auto px-4">
        {/* Titre de la section */}
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary">
            Où me trouver ?
          </h2>
        </ScrollAnimationWrapper>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Bloc d'informations de contact */}
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <h3 className="text-2xl font-headline text-primary mb-6">Contact & Accès</h3>
            <ul className="space-y-4 text-base">
              {/* Téléphone */}
              <li className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="tel:+33673350931" className="hover:text-primary transition-colors">06 73 35 09 31</a>
              </li>
              {/* Email */}
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="mailto:danieladv82@yahoo.it" className="hover:text-primary transition-colors">danieladv82@yahoo.it</a>
              </li>
              {/* Adresse physique */}
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>Église Notre-Dame du Point du Jour – 20 Rue des Aqueducs 69005 Lyon</span>
              </li>
              {/* Réseaux sociaux */}
              <li className="flex items-center gap-4">
                <Instagram className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="https://www.instagram.com/Accordame69" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@Accordame69</a>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground italic">
              N'hésitez pas à me contacter pour toute question ou pour vous inscrire.
            </p>
          </ScrollAnimationWrapper>

          {/* Bloc Image (Carte) avec animation */}
          <ScrollAnimationWrapper className="w-full md:w-1/2" delay={100}>
            {mapImage && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg bg-muted/20">
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
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
