import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Accord'Âme | Cours de Violon à Lyon",
  description: "École de musique Accord'Âme, des cours de violon et d'alto pour tous les âges à Lyon. Pédagogie Suzuki pour enfants.",
};

const BUILD_SHA =
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  process.env.NEXT_PUBLIC_GITHUB_SHA ||
  "dev";

const BUILD_TIME = process.env.VERCEL_BUILD_TIME || process.env.NEXT_PUBLIC_VERCEL_BUILD_TIME || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="x-build-sha" content={BUILD_SHA} />
        {BUILD_TIME ? <meta name="x-build-time" content={BUILD_TIME} /> : null}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
