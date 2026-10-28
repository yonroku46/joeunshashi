import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export async function generateMetadata(): Promise<Metadata> {
  const title = '부산·김해·창원 샷시·창문 수리 전문 | 조은샷시';
  const description =
    '부산광역시, 김해시, 창원시 전 지역 아파트·빌라·상가 샷시 수리, 창문 롤러 교체, 레일 파손 보강, 모헤어 외풍 차단, 미세방충망 당일 출장 수리 전문 조은샷시.';

  return {
    title,
    description,
    keywords: [
      '부산 샷시 수리',
      '김해 샷시 수리',
      '창원 샷시 수리',
      '창문 롤러 교체',
      '샷시 레일 수리',
      '창문 외풍 차단',
      '모헤어 교체',
      '장유 샷시 수리',
      '해운대 창문 수리',
      '창원 샷시 롤러',
      '미세방충망 교체',
      '창문 안열림 수리',
    ],
    openGraph: {
      title,
      description,
      locale: 'ko_KR',
      type: 'website',
      siteName: '조은샷시',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: '/',
    },
  };
}

export default function HomePage() {
  const jsonLdBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: '조은샷시',
    description:
      '부산·김해·창원시 전 지역 아파트·빌라·상가 샷시 수리, 창문 롤러 교체, 레일 파손 보강, 모헤어 외풍 차단, 미세방충망 당일 출장 수리 전문',
    telephone: '010-9392-0431',
    areaServed: ['부산광역시', '경상남도 김해시', '경상남도 창원시'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '창문 롤러(바퀴) 교체 & 수평 조정',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '깨진 샷시 레일 스테인리스 덧방 보강 수리',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '외풍·먼지 차단 모헤어(방풍털) 전면 교체',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '친환경 미세방충망 교체 및 망갈이',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '창문 잠금장치(크리센트·오토락) 수리',
        },
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '비싼 전체 샷시 교체 대신 수리만으로도 해결이 가능한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네, 80% 이상의 창문 문제는 창틀 전체를 뜯어내지 않고 마모된 롤러 교체, 깨진 레일 스테인리스 보강, 삭은 모헤어 교체만으로도 새 창문처럼 부드럽고 외풍 없는 상태로 완벽히 복원됩니다.',
        },
      },
      {
        '@type': 'Question',
        name: '수리 비용과 출장 견적은 어떻게 확인하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '고장 난 창문 전체와 하부 레일/바닥 사진을 문자로 보내주시면 예상 수리 비용과 작업 범위를 사전에 투명하게 안내해 드립니다.',
        },
      },
      {
        '@type': 'Question',
        name: '당일 방문 수리도 가능한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '부산, 김해, 창원시 전 지역을 상시 순회하고 있어 일정 조율 후 빠른 당일 방문 수리가 가능합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '수리 후 사후관리(A/S)는 어떻게 진행되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '교체한 롤러와 레일, 부속에 대해 확실한 품질 보증 및 사후 점검을 보장합니다.',
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
      <HomeClient />
    </>
  );
}
