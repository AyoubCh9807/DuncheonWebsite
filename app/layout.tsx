import type {Metadata} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Duncheon | Procedural Dungeon Generator',
  description: 'Design infinite dungeons in seconds. Procedural dungeon and cave generation for game developers.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#050B14] text-slate-200 antialiased selection:bg-[#FF7A18]/30 selection:text-[#FF7A18]">
        {children}
      </body>
    </html>
  );
}
