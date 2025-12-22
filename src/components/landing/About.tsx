import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';

/**
 * Section "Qui suis-je ?" (À propos).
 * Présente le professeur (Daniela de Vingo) avec une photo et un texte descriptif.
 * Utilise ScrollAnimationWrapper pour les effets d'apparition.
 */
export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'hero-portrait');

  return (
    <section id="about" className="bg-background pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Bloc Image avec animation */}
          <ScrollAnimationWrapper className="md:w-1/3 flex justify-center">
            {aboutImage && (
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="rounded-full object-cover shadow-lg"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </ScrollAnimationWrapper>
          
          {/* Bloc Texte avec animation et délai */}
          <ScrollAnimationWrapper className="md:w-2/3 text-center md:text-left" delay={100}>
            <p className="text-base font-semibold text-primary mb-2">Professeure de violon & alto</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-primary mb-4">
              Qui suis-je ?
            </h2>
            <div className="text-base mb-8 leading-relaxed space-y-4">
              <p>
                Daniela de Vingo, professeur de violon et d’alto à l’école Accord’Ame à Lyon, met son expérience au service de ses élèves grâce à une pédagogie bienveillante et adaptée. Diplômée du Conservatoire de Turin avec un Master en violon, elle enseigne depuis plus de 15 ans après s’être formée à la méthode Suzuki. 
              </p>
              <p>
                Ses compétences pédagogiques reconnues – notamment par l’obtention du Diplôme d’État de professeur de violon – lui permettent de proposer des cours sur mesure pour tous niveaux. Son approche personnalisée et son expérience en musique de chambre, ainsi qu’en orchestres et dans des groupes de musique, font d’elle une enseignante polyvalente et passionnée.
              </p>
            </div>
            {/* Bouton d'action */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full" asChild>
                <a href="#location">Me contacter</a>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
