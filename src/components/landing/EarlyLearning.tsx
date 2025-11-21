import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function EarlyLearning() {
  const image = PlaceHolderImages.find((img) => img.id === 'early-learning');

  const benefits = [
    {
      title: "Développement des capacités cognitives",
      description: "Le violon stimule des zones spécifiques du cerveau, favorisant la concentration, la mémoire et la résolution de problèmes. Les enfants qui apprennent le violon développent souvent de meilleures capacités de raisonnement et d’analyse."
    },
    {
      title: "Amélioration de la motricité fine",
      description: "Jouer du violon requiert une grande précision dans les mouvements des mains et des doigts, ce qui améliore la motricité fine."
    },
    {
      title: "Renforcement de la discipline et de la patience",
      description: "L’apprentissage d’un instrument comme le violon demande une pratique régulière et de la persévérance."
    },
    {
      title: "Développement de l’écoute active et de la sensibilité musicale",
      description: "En jouant du violon, l’enfant apprend à écouter attentivement les différentes tonalités et nuances musicales."
    },
    {
      title: "Créativité, expression et confiance en soi",
      description: "Le violon permet à l’enfant de communiquer ses émotions à travers la musique. Cette pratique artistique nourrit sa créativité et renforce son estime de soi."
    },
    {
      title: "Socialisation et travail de groupe",
      description: "En participant à des ensembles ou des cours collectifs, les enfants développent des compétences de travail d’équipe et apprennent à jouer en harmonie avec les autres, ce qui favorise la coopération et l’écoute des autres."
    }
  ];

  return (
    <section id="early-learning" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <ScrollAnimationWrapper className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary mb-6">
              Apprendre le violon dès l’enfance
            </h2>
            <p className="mb-8 text-lg leading-relaxed">
              L’apprentissage du violon présente de nombreux bienfaits pour le développement global de l’enfant :
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
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
