"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up";
  delay?: number; // delay in ms
  once?: boolean;
}

export function ScrollAnimationWrapper({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  once = true,
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respecte l’accessibilité: si l’utilisateur préfère réduire les animations,
    // on affiche directement le contenu sans attendre le scroll.
    const reduceMotionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reduceMotionQuery?.matches) {
      setIsInView(true);
      return;
    }

    const isMobile = window.matchMedia?.("(max-width: 768px)")?.matches ?? false;
    const vh = Math.max(1, window.innerHeight || 0);

    // On déclenche un peu AVANT l’entrée à l’écran, mais pas trop tôt (sinon
    // l’animation se termine avant que l’utilisateur la voie).
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    // Un peu plus généreux sur mobile pour que le “2e bloc” d’une section
    // (souvent juste sous la ligne de flottaison) ne paraisse pas en retard.
    const preloadPx = isMobile
      ? clamp(Math.round(vh * 0.35), 120, 320)
      : clamp(Math.round(vh * 0.2), 120, 260);

    const rootMargin = `0px 0px ${preloadPx}px 0px`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        }
      },
      {
        rootMargin,
        threshold: isMobile ? 0.03 : 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000",
        isInView ? animationClasses[animation] : "opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
