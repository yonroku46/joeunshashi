import { Metadata } from 'next';
import { config } from '@/config';

export function getResolvedBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (envUrl && !envUrl.includes('localhost')) {
    const cleaned = envUrl.replace(/\/$/, '');
    return cleaned.startsWith('http') ? cleaned : `https://${cleaned}`;
  }

  // Vercel의 임시 배포 주소(VERCEL_URL)는 SSO/로그인 보호로 인해 카카오/네이버 등 외부 크롤러가 차단되므로,
  // 실제 정식 운영 커스텀 도메인(www.joeunshashi.com)을 직접 기본값으로 사용합니다.
  return 'https://www.joeunshashi.com';
}

export function generatePageMetadata(
  title?: string,
  description?: string
): Metadata {
  const metaTitle = title
    ? (title.includes(config.service.name) ? title : `${title} | ${config.service.name}`)
    : config.service.metadata.title.default;
  const metaDesc = description || config.service.metadata.description;

  const baseUrlString = getResolvedBaseUrl();
  const ogImageUrl = `${baseUrlString}/images/og-image.jpg`;

  return {
    metadataBase: new URL(baseUrlString),
    title: metaTitle,
    description: metaDesc,
    verification: {
      other: {
        'naver-site-verification': config.service.metadata.naverSiteVerification,
      },
    },
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
      url: baseUrlString,
      siteName: config.service.name,
      locale: 'ko_KR',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          width: 1200,
          height: 630,
          alt: '조은샷시 - 부산·김해·창원 유리문·강화도어 수리',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
      images: [ogImageUrl],
    },
  };
}
