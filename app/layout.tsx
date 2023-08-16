import './globals.css';
import type { Metadata } from 'next';
import {
  Roboto,
  Noto_Sans_KR,
  Pacifico,
  Bodoni_Moda,
  Yanone_Kaffeesatz,
} from 'next/font/google';

import RedirectProvider from '@/context/redirect.context';

const notoSansKr = Noto_Sans_KR({
  preload: false,
  weight: ['100', '400', '700', '900'],
});

const bodoniModa = Bodoni_Moda({
  preload: false,
  weight: ['400', '500', '500', '600', '700', '800', '900'],
  variable: '--bodoniModa',
});

const yanone = Yanone_Kaffeesatz({
  preload: false,
  weight: ['400', '500', '500', '600', '700'],
  variable: '--yanone',
});

const pacifico = Pacifico({
  preload: false,
  weight: ['400'],
  variable: '--pacifico',
});

const roboto = Roboto({
  preload: false,
  weight: ['100', '400', '700', '900'],
  variable: '--roboto',
});

export const metadata: Metadata = {
  title: 'Hoonjo Portfolio',
  description: 'Welcome to Hoonjo Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cls = (...classnames: string[]) => {
    return classnames.join(' ');
  };

  return (
    <html lang="en">
      <body
        className={cls(
          notoSansKr.className,
          roboto.variable,
          pacifico.variable,
          bodoniModa.variable,
          yanone.variable
        )}
        style={{ backgroundColor: '#ece7e1' }}
      >
        <RedirectProvider>{children}</RedirectProvider>
      </body>
    </html>
  );
}
