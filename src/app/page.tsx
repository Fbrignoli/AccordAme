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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <div className="bg-background leading-[0px] -mt-1">
          <WaveSeparator className="fill-secondary" />
        </div>
        <CourseInfo />
        <div className="bg-secondary leading-[0px] -mt-1">
          <WaveSeparator className="fill-background" />
        </div>
        <ClassTypes />
        <div className="bg-background leading-[0px] -mt-1">
          <WaveSeparator className="fill-muted" />
        </div>
        <SuzukiMethod />
         <div className="bg-muted leading-[0px] -mt-1">
          <WaveSeparator className="fill-background" />
        </div>
        <EarlyLearning />
        <div className="bg-background leading-[0px] -mt-1">
          <WaveSeparator className="fill-secondary" />
        </div>
        <Location />
         <div className="bg-secondary leading-[0px] -mt-1">
          <WaveSeparator className="fill-background" />
        </div>
        <Universe />
      </main>
      <Footer />
    </div>
  );
}
