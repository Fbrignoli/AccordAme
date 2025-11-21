import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation';
import { Music, Heart, Users } from 'lucide-react';

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
            Une approche bienveillante et immersive pour apprendre la musique comme on apprend sa langue maternelle.
          </p>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ScrollAnimationWrapper delay={100}>
            <div className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Environnement Positif</h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh et ex laoreet euismod.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={200}>
            <div className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Implication Parentale</h3>
              <p className="leading-relaxed">
                Donec vel ante rhoncus, posuere ex ut, consequat enim. Sed sed magna vel eros dictum euismod.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={300}>
            <div className="p-6">
              <Music className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline mb-2">Apprentissage par l'écoute</h3>
              <p className="leading-relaxed">
                Vivamus et eleifend massa. Cras venenatis, dui et tincidunt tempor, sapien sapien blandit sem.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
