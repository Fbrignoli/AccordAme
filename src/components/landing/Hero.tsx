import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-violin');

  return (
    <section id="hero" className="relative bg-background overflow-hidden h-[60vh] md:h-[70vh] flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <ScrollAnimationWrapper className="relative z-10 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline mb-4">
          Accord'Âme
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Cours de violon & alto à Lyon
        </p>
      </ScrollAnimationWrapper>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 animate-bounce text-white/50" />
        </a>
      </div>
    </section>
  );
}
