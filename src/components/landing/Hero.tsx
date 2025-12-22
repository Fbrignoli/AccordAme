import { Music } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';

/**
 * Section Hero (accueil).
 * Affiche le nom de l'école et une brève introduction avec une animation au défilement.
 */
export function Hero() {
  return (
    <section id="hero" className="bg-background pt-24 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          {/* Icône décorative */}
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
             <Music className="h-10 w-10 text-primary" />
          </div>
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">
            Accord'Âme
          </h1>
          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto">
            Cours de violon & alto à Lyon
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
