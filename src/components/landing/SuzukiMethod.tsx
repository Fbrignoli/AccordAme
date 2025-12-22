import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Heart, Users, Music, Ear } from 'lucide-react';

/**
 * Section "La pédagogie Suzuki".
 * Détaille les principes de la méthode Suzuki utilisée pour l'enseignement du violon et de l'alto.
 * Présente trois piliers : Apprentissage Naturel, Implication Parentale, et Vie Collective.
 */
export function SuzukiMethod() {
  return (
    <section id="suzuki" className="bg-muted">
      <div className="container mx-auto px-4 text-center">
        {/* En-tête de section */}
        <ScrollAnimationWrapper>
          <div className="inline-block p-4 bg-background rounded-full mb-6 shadow">
            <Music className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary mb-6">
            La pédagogie Suzuki pour les enfants
          </h2>
          <p className="max-w-4xl mx-auto text-xl mb-12 leading-relaxed">
            La méthode Suzuki est au cœur de l’enseignement de Daniela de Vingo. Cette pédagogie repose sur une approche naturelle et immersive de l’apprentissage musical, particulièrement adaptée aux jeunes enfants dès l’âge de 3 ans.
          </p>
        </ScrollAnimationWrapper>

        {/* Grille des piliers de la méthode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Pilier 1: Apprentissage Naturel */}
          <ScrollAnimationWrapper delay={0}>
            <div className="p-6">
              <Ear className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Apprentissage Naturel</h3>
              <p className="leading-relaxed">
                Inspirée par l’observation de Shinichi Suzuki, cette pédagogie permet aux élèves d’apprendre à jouer du violon ou de l’alto de manière intuitive, de la même manière qu’ils apprennent leur langue maternelle.
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Pilier 2: Implication Parentale */}
          <ScrollAnimationWrapper delay={100}>
            <div className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Implication Parentale</h3>
              <p className="leading-relaxed">
                L’implication des parents est un élément central : ils assistent aux cours, créent un environnement musical à la maison et accompagnent leur enfant dans sa progression quotidienne.
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Pilier 3: Vie Collective */}
          <ScrollAnimationWrapper delay={200}>
            <div className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Cours de Groupe & Concerts</h3>
              <p className="leading-relaxed">
                Outre les cours individuels, les élèves participent à des sessions de groupe et à des concerts, où ils développent l’écoute, le rythme et le plaisir de jouer ensemble dans une communauté bienveillante.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
