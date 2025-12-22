
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Music } from 'lucide-react';

const navLinks = [
  { href: '#about', label: "Qui suis-je ?" },
  { href: '#course-info', label: "L'école" },
  { href: '#class-types', label: 'Les cours' },
  { href: '#suzuki', label: 'Pédagogie' },
  { href: '#universe', label: 'Univers' },
];

/**
 * Composant de navigation (Header).
 * Supporte le mode desktop avec des liens directs et le mode mobile avec un menu tiroir (Sheet).
 * Utilise un effet de flou (backdrop-blur) lors du défilement.
 */
export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo et titre de l'école */}
        <a href="#" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
          <Music className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Accord'Âme</span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bouton de contact Desktop */}
        <div className="hidden md:flex">
           <Button asChild className="rounded-full">
            <a href="#location">Contact</a>
          </Button>
        </div>

        {/* Navigation Mobile (Menu Hamburger) */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                {/* En-tête du menu mobile */}
                <div className="flex items-center gap-2 p-4 border-b">
                  <Music className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold text-primary">Accord'Âme</span>
                </div>
                {/* Liens de navigation mobile */}
                <nav className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                {/* Bouton de contact mobile */}
                <div className="mt-auto p-4">
                   <Button asChild className="w-full rounded-full" size="lg">
                    <a href="#location" onClick={() => setIsSheetOpen(false)}>Contact</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
