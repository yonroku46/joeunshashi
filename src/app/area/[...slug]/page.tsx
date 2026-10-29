import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  SERVICE_REGIONS,
  getRegionBySlug,
  getDistrictBySlug,
  getDongBySlug,
  getNearbyDongs,
  buildBreadcrumbItems,
  ALL_DONGS,
} from '@/data/regions';
import { generatePageMetadata } from '@/common/lib/Metadata';
import AreaClient from './AreaClient';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

/**
 * 정적 페이지 빌드 생성을 위한 파라미터 반환
 */
export async function generateStaticParams() {
  const paramsList: Array<{ slug: string[] }> = [];

  // 1. 시/도 파라미터
  for (const region of SERVICE_REGIONS) {
    paramsList.push({ slug: [region.slug] });

    // 2. 구/군 파라미터
    for (const district of region.districts) {
      paramsList.push({ slug: [region.slug, district.slug] });
      // alias 지원 (예: gangseo -> gangseo-gu)
      if (district.slug === 'gangseo') {
        paramsList.push({ slug: [region.slug, 'gangseo-gu'] });
      }
    }
  }

  // 3. 동 파라미터
  for (const dong of ALL_DONGS) {
    paramsList.push({ slug: [dong.regionSlug, dong.districtSlug, dong.slug] });
    if (dong.districtSlug === 'gangseo') {
      paramsList.push({ slug: [dong.regionSlug, 'gangseo-gu', dong.slug] });
    }
  }

  return paramsList;
}

/**
 * 지역별 동적 메타데이터 생성 (SEO / AEO 최적화)
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || slug.length === 0) return generatePageMetadata();

  const [regionSlug, rawDistrictSlug, dongSlug] = slug;
  const districtSlug = rawDistrictSlug === 'gangseo-gu' ? 'gangseo' : rawDistrictSlug;

  const base = generatePageMetadata();
  const region = getRegionBySlug(regionSlug);
  if (!region) return generatePageMetadata();

  // 1. 동(Dong) 단위 메타데이터
  if (slug.length >= 3 && dongSlug) {
    const dong = getDongBySlug(dongSlug);
    const districtData = getDistrictBySlug(regionSlug, districtSlug);
    const dongName = dong ? dong.name : dongSlug;
    const districtName = districtData ? districtData.district.name : '';

    const title = `${districtName} ${dongName} 유리문·강화도어 수리 | 조은샷시`;
    const description = `${districtName} ${dongName} 상가 유리문·강화도어 수리 및 플로어 힌지 교체. 출입문 쓸림·고장 당일 신속 수리.`;

    return {
      ...base,
      title,
      description,
      keywords: [
        `${districtName} ${dongName} 문수리`,
        `${districtName} ${dongName} 유리문 수리`,
        `${districtName} ${dongName} 강화도어 수리`,
        `${dongName} 힌지 교체`,
        `${dongName} 상가 출입문 수리`,
        '조은샷시',
      ],
      openGraph: {
        ...base.openGraph,
        title,
        description,
      },
      alternates: {
        canonical: `/area/${regionSlug}/${rawDistrictSlug}/${dongSlug}`,
      },
    };
  }

  // 2. 구(District) 단위 메타데이터
  if (slug.length === 2 && districtSlug) {
    const districtData = getDistrictBySlug(regionSlug, districtSlug);
    if (!districtData) return generatePageMetadata();

    const title = `${region.name} ${districtData.district.name} 유리문·강화도어 수리 | 조은샷시`;
    const description = `${region.name} ${districtData.district.name} 상가 유리문·강화도어 수리 및 플로어 힌지 교체. 출입문 바닥 쓸림 당일 신속 출장.`;

    return {
      ...base,
      title,
      description,
      keywords: [
        `${districtData.district.name} 유리문 수리`,
        `${districtData.district.name} 강화도어 수리`,
        `${districtData.district.name} 힌지 교체`,
        `${districtData.district.name} 상가 출입문 수리`,
        '조은샷시',
      ],
      openGraph: {
        ...base.openGraph,
        title,
        description,
      },
      alternates: {
        canonical: `/area/${regionSlug}/${rawDistrictSlug}`,
      },
    };
  }

  // 3. 시/도(Region) 단위 메타데이터
  const title = `${region.fullName} 유리문·강화도어 수리 | 조은샷시`;
  const description = `${region.fullName} 전 지역 상가 유리문·강화도어 수리 및 플로어 힌지 교체. 출입문 고장 당일 신속 출장.`;

  return {
    ...base,
    title,
    description,
    keywords: [
      `${region.name} 유리문 수리`,
      `${region.name} 강화도어 수리`,
      `${region.name} 힌지 교체`,
      `${region.name} 상가 출입문 수리`,
      '조은샷시',
    ],
    openGraph: {
      ...base.openGraph,
      title,
      description,
    },
    alternates: {
      canonical: `/area/${regionSlug}`,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug || slug.length === 0) notFound();

  const [regionSlug, rawDistrictSlug, dongSlug] = slug;
  const districtSlug = rawDistrictSlug === 'gangseo-gu' ? 'gangseo' : rawDistrictSlug;

  const region = getRegionBySlug(regionSlug);
  if (!region) notFound();

  // A. 동(Dong) 단위 페이지
  if (slug.length >= 3 && dongSlug) {
    const dong = getDongBySlug(dongSlug);
    const districtData = getDistrictBySlug(regionSlug, districtSlug);
    if (!dong && !districtData) notFound();

    const locationName = dong ? dong.fullName : `${region.fullName} ${dongSlug}`;
    const shortLocation = dong ? `${dong.districtName} ${dong.name}` : dongSlug;
    const breadcrumbItems = buildBreadcrumbItems({
      regionSlug,
      districtSlug: rawDistrictSlug,
      dongSlug: dong?.slug,
    });
    const nearbyDongs = dong ? getNearbyDongs(dong.slug) : [];

    const jsonLdBusiness = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: '조은샷시',
      description: `${locationName} 상가·매장·사무실 유리문 수리, 강화도어 플로어 힌지 교체, H바 수리 전문`,
      telephone: '010-9392-0431',
      areaServed: [locationName, region.fullName],
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '플로어 힌지 교체 & 감속 조절' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '강화도어 상/하부 H-Bar(스테인리스 바) 수리·교체' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '상부 피벗 힌지(상롯트) & 힌지 박스 복원' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '강화유리문 전용 디지털도어락 / 번호키 설치' } },
      ],
    };

    const jsonLdFaq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `${locationName} 당일 방문 문수리가 가능한가요?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${locationName} 전담 순회 차량이 상시 운행되어 식당, 카페, 매장, 사무실 유리문 쾅 닫힘, 바닥 쓸림, 힌지 교체를 당일 30분~1시간 내외로 신속히 해결해 드립니다.`,
          },
        },
        {
          '@type': 'Question',
          name: `${locationName} 유리문 수리 견적은 어떻게 확인하나요?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `문 전체 모습과 바닥 힌지 덮개 사진을 문자로 보내주시면(010-9392-0431), 현장 방문 전 5분 내 정확한 예상 비용을 친절히 안내해 드립니다.`,
          },
        },
        {
          '@type': 'Question',
          name: `${locationName} 문 전체를 교체하지 않고 수리만으로 해결되나요?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `문 전체를 새로 맞출 필요 없이 유압이 터진 플로어 힌지나 부식된 H바 등 핵심 부속만 정품 교체하여 비용을 80% 이상 절감하면서 새 문 수준으로 복원해 드립니다.`,
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <AreaClient
          breadcrumbItems={breadcrumbItems}
          targetType="dong"
          title={`${shortLocation} 문수리 전문`}
          eyebrow={`${region.name} ${dong?.districtName || ''} 출장 문수리 안내`}
          description={`${locationName} 상가·매장 출입문 당일 출장 수리. 쾅 닫힘, 바닥 긁힘, 힌지 고장을 문틀 철거 없이 부속 수리로 해결합니다.`}
          locationName={locationName}
          characteristics={dong?.characteristics || districtData?.district.characteristics || []}
          keyIssues={dong?.keyIssues || districtData?.district.keyIssues || []}
          nearbyDongs={nearbyDongs}
          regionSlug={regionSlug}
          districtSlug={rawDistrictSlug}
          dongSlug={dong?.slug}
        />
      </>
    );
  }

  // B. 구(District) 단위 페이지
  if (slug.length === 2 && districtSlug) {
    const districtData = getDistrictBySlug(regionSlug, districtSlug);
    if (!districtData) notFound();

    const { district } = districtData;
    const locationName = district.fullName;
    const breadcrumbItems = buildBreadcrumbItems({
      regionSlug,
      districtSlug: rawDistrictSlug,
    });
    const districtDongs = ALL_DONGS.filter((d) => d.districtSlug === districtSlug);

    const jsonLdBusiness = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: '조은샷시',
      description: `${locationName} 전 지역 상가·매장 유리문 수리, 강화도어 플로어 힌지 교체 전문`,
      telephone: '010-9392-0431',
      areaServed: [locationName, region.fullName],
    };

    const jsonLdFaq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `${locationName} 전 지역 당일 문수리가 가능한가요?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${locationName} 전 지역 상가·매장 유리문 쾅 닫힘, 바닥 쓸림, 힌지 교체를 당일 신속하게 방문 처리해 드립니다.`,
          },
        },
        {
          '@type': 'Question',
          name: `${locationName} 유리문 수리 견적 문의는 어떻게 하나요?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `문 전체 사진과 바닥 힌지 덮개 사진을 문자로 보내주시면(010-9392-0431) 5분 내 예상 견적을 안내해 드립니다.`,
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <AreaClient
          breadcrumbItems={breadcrumbItems}
          targetType="district"
          title={`${district.name} 유리문·강화도어 수리 전문`}
          eyebrow={`${region.name} 출장 문수리 안내`}
          description={`${locationName} 전 지역 상가·사무실 출입문 당일 출장. 힌지 교체 및 바닥 쓸림 수리로 교체 비용을 70% 절감해 드립니다.`}
          locationName={locationName}
          characteristics={district.characteristics}
          keyIssues={district.keyIssues}
          nearbyDongs={districtDongs}
          regionSlug={regionSlug}
          districtSlug={rawDistrictSlug}
        />
      </>
    );
  }

  // C. 시/도(Region) 단위 페이지
  const locationName = region.fullName;
  const breadcrumbItems = buildBreadcrumbItems({ regionSlug });
  const regionDongs = ALL_DONGS.filter((d) => d.regionSlug === regionSlug).slice(0, 10);

  const jsonLdBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: '조은샷시',
    description: `${locationName} 전 지역 상가·매장 유리문·강화도어 수리, 플로어 힌지 교체 전문`,
    telephone: '010-9392-0431',
    areaServed: [locationName],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `${locationName} 전 지역 출장 수리가 가능한가요?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${locationName} 전 지역 구·군별 순회 차량을 통해 유리문 수리, 강화도어 힌지 교체, H바 수리를 당일 신속 방문 점검해 드립니다.`,
        },
      },
      {
        '@type': 'Question',
        name: `${locationName} 수리 견적 상담 방법은 어떻게 되나요?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `문 전체 사진과 바닥 힌지 덮개 사진을 문자로 보내주시면(010-9392-0431) 5분 내 정확한 예상 비용과 일정을 안내해 드립니다.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <AreaClient
        breadcrumbItems={breadcrumbItems}
        targetType="region"
        title={`${region.name} 전지역 유리문·강화도어 수리`}
        eyebrow={`${region.fullName} 전지역 당일 출장`}
        description={`${locationName} 전 지역 구·군별 전담 순회 차량 상시 운행. 식당, 카페, 매장 출입문 쾅 닫힘과 바닥 긁힘을 당일 신속 수리합니다.`}
        locationName={locationName}
        characteristics={[`${region.name} 중심 상권 및 주거단지 전 지역 출장`]}
        keyIssues={['상가 출입문 힌지 교체', '유리문 쾅 닫힘 방지', '하부 H바 부식 교체']}
        nearbyDongs={regionDongs}
        districts={region.districts}
        regionSlug={regionSlug}
      />
    </>
  );
}
