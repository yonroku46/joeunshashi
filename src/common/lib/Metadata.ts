import { Metadata } from 'next';
import { config } from '@/config';

export function generatePageMetadata(
  title?: string,
  description?: string
): Metadata {
  const metaTitle = title
    ? `${title} - ${config.service.name}`
    : config.service.metadata.title.default;
  const metaDesc = description || config.service.metadata.description;

  return {
    title: metaTitle,
    description: metaDesc,
    icons: {
      icon: [
        { url: '/icons/favicon.ico' },
        { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'android-chrome-192x192',
          url: '/icons/android-chrome-192x192.png',
        },
        {
          rel: 'android-chrome-512x512',
          url: '/icons/android-chrome-512x512.png',
        },
      ],
    },
    manifest: '/icons/site.webmanifest',
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: config.baseUrl,
      siteName: config.service.name,
      locale: 'ko_KR',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: '조은샷시 - 부담 없이 합리적인 가격! 부산·김해·양산·창원 전지역 당일 출장',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
      images: ['/images/og-image.jpg'],
    },
  };
}
