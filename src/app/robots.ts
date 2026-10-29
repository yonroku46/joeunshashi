import type { MetadataRoute } from 'next';
import { config } from '@/config';

export default function robots(): MetadataRoute.Robots {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const baseUrl = (
    envUrl && !envUrl.includes('localhost')
      ? envUrl
      : config.baseUrl && !config.baseUrl.includes('localhost')
      ? config.baseUrl
      : 'https://www.joeunshashi.com'
  ).replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // 네이버 검색 로봇 (Yeti)
      {
        userAgent: 'Yeti',
        allow: '/',
        disallow: ['/api/'],
      },
      // 구글 검색 로봇
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      // 다음 검색 로봇
      {
        userAgent: 'Daumoa',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI 검색 엔진 (Perplexity, ChatGPT, Claude 등)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
