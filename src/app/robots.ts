import type { MetadataRoute } from 'next';
import { config } from '@/config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || config.baseUrl || 'https://joeunshashi.com').replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // 네이버 검색 로봇
      {
        userAgent: 'Yeti',
        allow: '/',
      },
      // 구글 검색 로봇
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // 다음 검색 로봇
      {
        userAgent: 'Daumoa',
        allow: '/',
      },
      // AI 검색 엔진 (Perplexity, ChatGPT, Claude 등)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
