import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

export function CourseInfo() {
  const image = PlaceHolderImages.find((img) => img.id === 'course-ambiance');

  return (
    <section id="course-info" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary mb-6">
              Des cours de violon et d’alto à Lyon
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              L’école Accord’Âme vous ouvre ses portes.
            </p>
            <p className="mb-8 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button size="lg" className="rounded-full">Découvrir l'école</Button>
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
