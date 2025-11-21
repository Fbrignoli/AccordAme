import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Heart, Users, Music } from 'lucide-react';

export function SuzukiMethod() {
  return (
    <section id="suzuki" className="bg-muted">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimationWrapper>
          <div className="inline-block p-4 bg-background rounded-full mb-6 shadow">
            <Music className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary mb-6">
            La pédagogie Suzuki pour les enfants
          </h2>
          <p className="max-w-3xl mx-auto text-xl mb-12 leading-relaxed">
            La méthode Suzuki est au cœur de l’enseignement de Daniela de Vingo. Cette pédagogie repose sur une approche naturelle et immersive de l’apprentissage musical, particulièrement adaptée aux jeunes enfants dès l’âge de 3 ans.
          </p>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          <ScrollAnimationWrapper delay={100}>
            <div className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Implication Parentale & Cours de Groupe</h3>
              <p className="leading-relaxed">
                L’implication des parents est un élément central de cette méthode : ils assistent aux cours et accompagnent leur enfant dans sa progression. Outre les cours individuels, les élèves participent également à des sessions de groupe, où ils développent l’écoute, le rythme et le plaisir de jouer ensemble.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={200}>
            <div className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Immersion Musicale</h3>
              <p className="leading-relaxed">
                Cette immersion dans la communauté musicale est renforcée par l’écoute régulière de musique classique et la participation à des concerts, contribuant ainsi à un apprentissage complet et épanouissant.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
