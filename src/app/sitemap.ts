import type { MetadataRoute } from 'next';
import { SERVICE_REGIONS, ALL_DONGS } from '@/data/regions';
import { config } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || config.baseUrl || 'https://joeunshashi.com').replace(/\/$/, '');
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    // 1. 메인 홈페이지
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // 2. 출장 지역 메인
    {
      url: `${baseUrl}/area`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 3. 광역 시/도 단위 (부산, 김해, 창원, 양산)
  SERVICE_REGIONS.forEach((region) => {
    routes.push({
      url: `${baseUrl}/area/${region.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // 4. 구/군 단위 (강서구, 사하구, 성산구 등)
    region.districts.forEach((district) => {
      routes.push({
        url: `${baseUrl}/area/${region.slug}/${district.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // 5. 읍/면/동 단위 (녹산동, 외동, 명지동 등 전체 동 페이지)
  ALL_DONGS.forEach((dong) => {
    routes.push({
      url: `${baseUrl}/area/${dong.regionSlug}/${dong.districtSlug}/${dong.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return routes;
}
