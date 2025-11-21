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
            <p className="text-lg mb-8 leading-relaxed">
              L’école de musique Accord’Ame, située au cœur du quartier dynamique de Point du Jour dans le 5e arrondissement de Lyon, est un lieu privilégié pour l’apprentissage du violon et de l’alto. 
              <br /><br />
              Daniela de Vingo y dispense des cours basés sur la méthode Suzuki, une pédagogie reconnue pour son approche progressive et ludique, idéale pour les enfants comme pour les adultes. 
              <br /><br />
              Accord’Ame attire des élèves non seulement de Lyon 5, mais aussi des communes voisines comme Tassin, Sainte-Foy-lès-Lyon, Francheville et Écully. Avec Accord’Ame, les élèves bénéficient de cours de musique dans un environnement accueillant et bien desservi.
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
