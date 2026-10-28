import type { Metadata } from 'next';
import { generatePageMetadata } from '@/common/lib/Metadata';
import AreaIndexClient from './AreaIndexClient';

export async function generateMetadata(): Promise<Metadata> {
  const base = generatePageMetadata();
  const title = '부산·김해·창원 출장 수리 지역 안내 | 상가 유리문·강화도어 수리 | 조은샷시';
  const description =
    '부산광역시, 경상남도 김해시, 창원시 전 지역 상가·매장·사무실 유리문 수리, 강화도어 플로어 힌지 교체, H바 수리, 출입문 바닥 긁힘 당일 출장 가능 지역 안내 조은샷시.';

  return {
    ...base,
    title,
    description,
    keywords: [
      '부산 유리문 수리 출장',
      '김해 유리문 수리 지역',
      '창원 강화도어 출장 지역',
      '상가 출입문 힌지 교체 지역',
      '조은샷시 출장 지역',
    ],
    openGraph: {
      ...base.openGraph,
      title,
      description,
    },
    alternates: {
      canonical: '/area',
    },
  };
}

export default function AreaIndexPage() {
  const jsonLdBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: '조은샷시',
    description:
      '부산·김해·창원시 전 지역 상가·매장·사무실 유리문 수리, 강화도어 플로어 힌지 교체, H바 수리, 출입문 바닥 긁힘·쾅 닫힘 당일 출장 수리 전문',
    telephone: '010-9392-0431',
    areaServed: ['부산광역시', '경상남도 김해시', '경상남도 창원시'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
      />
      <AreaIndexClient />
    </>
  );
}
