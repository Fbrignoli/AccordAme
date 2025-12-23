"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Sur mobile (layout empilé), le delay donne souvent l’impression que le 2e bloc “charge en retard”.
  // On le réduit à 0 pour garder une apparition fluide dès que l’élément est prêt.
  const effectiveDelay = useMemo(() => (isMobile ? 0 : delay), [delay, isMobile]);

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

    const mobileMql = window.matchMedia?.("(max-width: 768px)");
    const computeMobile = () => mobileMql?.matches ?? false;
    setIsMobile(computeMobile());

    // iOS/Safari: la hauteur du viewport varie avec la barre d’adresse.
    // visualViewport est plus fiable quand dispo.
    const getViewportHeight = () => {
      const vv = window.visualViewport?.height;
      return Math.max(1, Math.round(vv ?? window.innerHeight ?? 0));
    };

    // On déclenche un peu AVANT l’entrée à l’écran, mais pas trop tôt (sinon
    // l’animation se termine avant que l’utilisateur la voie).
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

    let observer: IntersectionObserver | null = null;
    const setupObserver = () => {
      const mobile = computeMobile();
      setIsMobile(mobile);
      const vh = getViewportHeight();

      // Un peu plus généreux sur mobile pour que le “2e bloc” d’une section
      // (souvent juste sous la ligne de flottaison) ne paraisse pas en retard.
      const preloadPx = mobile ? clamp(Math.round(vh * 0.4), 140, 420) : clamp(Math.round(vh * 0.2), 120, 260);
      const rootMargin = `0px 0px ${preloadPx}px 0px`;

      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) {
              observer?.unobserve(element);
            }
          }
        },
        {
          rootMargin,
          threshold: mobile ? 0.01 : 0.1,
        }
      );

      observer.observe(element);
    };

    setupObserver();

    const onViewportChange = () => setupObserver();
    mobileMql?.addEventListener?.("change", onViewportChange);
    window.visualViewport?.addEventListener?.("resize", onViewportChange);
    window.addEventListener("resize", onViewportChange);

    return () => {
      mobileMql?.removeEventListener?.("change", onViewportChange);
      window.visualViewport?.removeEventListener?.("resize", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
      observer?.disconnect();
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
      style={{ animationDelay: `${effectiveDelay}ms` }}
    >
      {children}
    </div>
  );
}
