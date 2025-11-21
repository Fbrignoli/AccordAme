import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-portrait');

  return (
    <section id="hero" className="relative bg-background overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <ScrollAnimationWrapper className="md:w-1/3 flex justify-center">
            {heroImage && (
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="rounded-full object-cover shadow-lg"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="md:w-2/3 text-center md:text-left" delay={200}>
            <p className="text-lg font-semibold text-primary mb-2">Professeure de violon & alto</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-primary mb-4">
              Qui suis-je ?
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full" asChild>
                <a href="#class-types">Prendre un cours</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#location">Me contacter</a>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#course-info" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary/50" />
        </a>
      </div>
    </section>
  );
}
