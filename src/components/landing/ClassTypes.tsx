import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

/**
 * Section "Les cours".
 * Présente les différents types de cours (individuels ou collectifs) et s'adresse à tous les niveaux.
 * Met en avant l'accessibilité de l'instrument même à l'âge adulte.
 */
export function ClassTypes() {
  const image1 = PlaceHolderImages.find((img) => img.id === 'class-type-1');

  return (
    <section id="class-types" className="bg-background">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <ScrollAnimationWrapper>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-center text-primary mb-12">
            Des cours de violon individuel ou en groupe pour tous les âges
          </h2>
        </ScrollAnimationWrapper>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Bloc Image */}
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            {image1 && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg bg-muted/20">
                <Image
                  src={image1.imageUrl}
                  alt={image1.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  data-ai-hint={image1.imageHint}
                />
              </div>
            )}
          </ScrollAnimationWrapper>

          {/* Bloc Texte descriptif */}
          <ScrollAnimationWrapper className="w-full md:w-1/2" delay={100}>
            <div className="text-base leading-relaxed space-y-4">
              <p>
                À l’école Accord’Ame, les cours de violon et d’alto individuels ou en groupe sont accessibles à tous, quel que soit l’âge ou le niveau.
              </p>
              <p>
                Contrairement à l’idée reçue que le violon est un instrument difficile à appréhender, il peut être appris à tout moment de la vie, même à l’âge adulte, apportant de nombreux bienfaits cognitifs.
              </p>
              <p>
                Que vous soyez un débutant complet ou un musicien confirmé, Daniela de Vingo vous accompagnera dans votre apprentissage et l’épanouissement de votre passion pour cet instrument.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
