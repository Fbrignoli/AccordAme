import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Accord'Âme</span>
        </a>
        <Button className="rounded-full">Contact</Button>
      </div>
    </header>
  );
}
