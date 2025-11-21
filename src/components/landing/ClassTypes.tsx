import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

export function ClassTypes() {
  const image1 = PlaceHolderImages.find((img) => img.id === 'class-type-1');

  return (
    <section id="class-types" className="bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-center text-primary mb-12">
            Des cours de violon individuel ou en groupe pour tous les âges
          </h2>
        </ScrollAnimationWrapper>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            {image1 && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image1.imageUrl}
                  alt={image1.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image1.imageHint}
                />
              </div>
            )}
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full md:w-1/2" delay={200}>
            <h3 className="text-2xl font-headline text-primary mb-4">Cours Individuels et en Groupe</h3>
            <p className="mb-6 text-lg leading-relaxed">
              Que vous préfériez une attention personnalisée avec des cours individuels, ou l'énergie d'un apprentissage collectif avec des cours en groupe, Accord'Âme s'adapte à vos besoins. Chaque format est pensé pour vous offrir la meilleure expérience pédagogique possible, quel que soit votre niveau.
            </p>
            <Button size="lg" className="rounded-full">En savoir plus</Button>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
