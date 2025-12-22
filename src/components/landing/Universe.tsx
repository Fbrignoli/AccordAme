'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ScrollAnimationWrapper } from '@/components/ui/scroll-animation'
import { PlaceHolderImages } from '@/lib/placeholder-images'

/**
 * Section "Mon univers".
 * Affiche une galerie d'images sous forme de carrousel à défilement automatique.
 * Utilise Embla Carousel avec le plugin Autoplay.
 */
export function Universe() {
  // Sélection des images pour le carrousel (uniquement celles commençant par carousel- ou contenant DianeSevrin/FB/Big band)
  // On exclut les photos déjà utilisées dans les autres sections (AA-Pres, AA-Ecole, AA-Cours, AA-Note, AA-Lieux)
  const carouselImages = PlaceHolderImages.filter(img => 
    img.id.startsWith('carousel-') || 
    img.imageUrl.includes('DianeSevrin') ||
    img.imageUrl.includes('FB_IMG') ||
    img.imageUrl.includes('Big band')
  );
  
  // Configuration du plugin Autoplay
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section id="universe" className="bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Titre de la section avec animation */}
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary">
            Mon univers
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Quelques moments de musique, de partage et de joie.
          </p>
        </ScrollAnimationWrapper>
      </div>

      {/* Carrousel d'images */}
      <ScrollAnimationWrapper className="w-full">
         <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="-ml-4">
                {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <div className="p-1">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        <p className="text-center text-sm text-muted-foreground/60 mt-6 italic">
          Photos par <a href="https://dianesevrin.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Diane Sevrin</a>
        </p>
      </ScrollAnimationWrapper>
    </section>
  )
}
