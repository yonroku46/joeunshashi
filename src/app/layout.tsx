import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { generatePageMetadata } from '@/common/lib/Metadata';
import ClientProvider from '@/components/provider/ClientProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/common/lib/Dayjs';
import '@/styles/globals.scss';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata();
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1b55e2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <body className={notoSansKr.className} suppressHydrationWarning>
        <ClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
