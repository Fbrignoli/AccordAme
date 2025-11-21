import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

export function ClassTypes() {
  const image1 = PlaceHolderImages.find((img) => img.id === 'class-type-1');
  const image2 = PlaceHolderImages.find((img) => img.id === 'class-type-2');

  return (
    <section id="class-types" className="bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-center text-primary mb-12">
            Des cours pour tous les âges et tous les niveaux
          </h2>
        </ScrollAnimationWrapper>

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
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
            <h3 className="text-2xl font-headline text-primary mb-4">Cours Individuels</h3>
            <p className="mb-6 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravi, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </p>
            <Button size="lg" className="rounded-full">En savoir plus</Button>
          </ScrollAnimationWrapper>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            {image2 && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image2.imageUrl}
                  alt={image2.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image2.imageHint}
                />
              </div>
            )}
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full md:w-1/2" delay={200}>
            <h3 className="text-2xl font-headline text-primary mb-4">Cours en Groupe</h3>
            <p className="mb-6 text-lg leading-relaxed">
              Suspendisse lit. Ut ut diam quis quam consequat feugiat. Praesent pellentesque, lectus eget codice, tellus nulla fringilla elit, a faucibus orci mi id libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button size="lg" className="rounded-full">Découvrir les groupes</Button>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
