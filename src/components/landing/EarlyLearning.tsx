import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

export function EarlyLearning() {
  const image = PlaceHolderImages.find((img) => img.id === 'early-learning');

  return (
    <section id="early-learning" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary mb-6">
              Apprendre le violon dès l’enfance
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              Un cadeau pour la vie.
            </p>
            <p className="mb-8 text-lg leading-relaxed">
              Fusce et elit et neque varius consequat. Nulla facilisi. In hac habitasse platea dictumst. Vivamus et eleifend massa. Cras venenatis, dui et tincidunt tempor, sapien sapien blandit sem, sed luctus quam lacus vitae magna.
            </p>
            <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">Pour les parents</Button>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full md:w-1/2" delay={200}>
            {image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
