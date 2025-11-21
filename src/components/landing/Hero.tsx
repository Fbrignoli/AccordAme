import { ViolinIcon } from '@/components/icons/ViolinIcon';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';

export function Hero() {
  return (
    <section id="hero" className="bg-background pt-24 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
             <ViolinIcon className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">
            Accord'Âme
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Cours de violon & alto à Lyon
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
