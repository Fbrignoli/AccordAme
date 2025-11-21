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

export function Universe() {
  const carouselImages = PlaceHolderImages.filter(img => img.id.startsWith('carousel-'));
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section id="universe" className="bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline text-primary">
            Mon univers
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Quelques moments de musique, de partage et de joie.
          </p>
        </ScrollAnimationWrapper>
      </div>
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
      </ScrollAnimationWrapper>
    </section>
  )
}
