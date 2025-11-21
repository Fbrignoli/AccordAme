import { Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Music className="w-5 h-5 text-primary" />
          <p className="font-headline text-lg text-primary">Accord'Âme</p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Accord'Âme. Tous droits réservés.
        </p>
        <p className="text-xs mt-2">
          Powered by <a href="https://www.amplixy.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Amplixy</a>
        </p>
      </div>
    </footer>
  );
}
