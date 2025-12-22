import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { CourseInfo } from '@/components/landing/CourseInfo';
import { ClassTypes } from '@/components/landing/ClassTypes';
import { SuzukiMethod } from '@/components/landing/SuzukiMethod';
import { EarlyLearning } from '@/components/landing/EarlyLearning';
import { Location } from '@/components/landing/Location';
import { Universe } from '@/components/landing/Universe';
import { Footer } from '@/components/landing/Footer';
import { WaveSeparator } from '@/components/landing/WaveSeparator';

/**
 * Page d'accueil principale du site Accord'Âme.
 * Structure "one-page" avec plusieurs sections thématiques séparées par des transitions fluides.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Barre de navigation fixe */}
      <Header />
      
      <main className="flex-1">
        {/* Section d'introduction avec le nom de l'école */}
        <Hero />
        
        {/* Section à propos du professeur */}
        <About />
        
        {/* Séparateur ondulé entre About et CourseInfo */}
        <div className="bg-background leading-[0px] -mt-1">
          <WaveSeparator className="fill-secondary" />
        </div>
        
        {/* Informations sur l'école et les cours */}
        <CourseInfo />
        
        {/* Séparateur ondulé entre CourseInfo et ClassTypes */}
        <div className="bg-secondary leading-[0px] -mt-1">
          <WaveSeparator className="fill-background" />
        </div>
        
        {/* Types de classes proposées */}
        <ClassTypes />
        
        {/* Séparateur ondulé entre ClassTypes et SuzukiMethod */}
        <div className="bg-background leading-[0px] -mt-1">
          <WaveSeparator className="fill-muted" />
        </div>
        
        {/* Présentation de la méthode Suzuki */}
        <SuzukiMethod />
        
        {/* Séparateur ondulé entre SuzukiMethod et EarlyLearning */}
         <div className="bg-muted leading-[0px] -mt-1">
          <WaveSeparator className="fill-background" />
        </div>
        
        {/* Section sur l'éveil musical précoce */}
        <EarlyLearning />
        
        {/* Séparateur ondulé entre EarlyLearning et Location */}
        <div className="bg-background leading-[0px] -mt-1">
          <WaveSeparator className="fill-secondary" />
        </div>
        
        {/* Localisation et contact */}
        <Location />
        
        {/* Séparateur ondulé entre Location et Universe */}
         <div className="bg-secondary leading-[0px] -mt-1">
          <WaveSeparator className="fill-background" />
        </div>
        
        {/* Carrousel d'images de l'univers de l'école */}
        <Universe />
      </main>
      
      {/* Pied de page */}
      <Footer />
    </div>
  );
}
