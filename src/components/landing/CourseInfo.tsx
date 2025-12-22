import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

/**
 * Section "L'école" (Informations sur les cours).
 * Présente l'école de musique, sa localisation à Lyon 5e et la philosophie d'enseignement.
 */
export function CourseInfo() {
  const image = PlaceHolderImages.find((img) => img.id === 'course-ambiance');

  return (
    <section id="course-info" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Bloc Texte */}
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary mb-6">
             L’école Accord’Âme vous ouvre ses portes.
            </h2>
            <div className="text-base mb-8 leading-relaxed space-y-4">
              <p>
               L’école de musique Accord’Ame, située au cœur du quartier dynamique de Point du Jour dans le 5e arrondissement de Lyon, est un lieu privilégié pour l’apprentissage du violon et de l’alto. 
              </p>
              <p>
                Daniela de Vingo y dispense des cours basés sur la méthode Suzuki, une pédagogie reconnue pour son approche progressive et ludique, idéale pour les enfants comme pour les adultes. 
              </p>
              <p>
                Accord’Ame attire des élèves non seulement de Lyon 5, mais aussi des communes voisines comme Tassin, Sainte-Foy-lès-Lyon, Francheville et Écully.
              </p>
            </div>
            <Button size="lg" className="rounded-full" asChild>
                <a href="#location">Me contacter</a>
            </Button>
          </ScrollAnimationWrapper>

          {/* Bloc Image */}
          <ScrollAnimationWrapper className="w-full md:w-1/2" delay={100}>
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
