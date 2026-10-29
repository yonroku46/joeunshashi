import type { Metadata } from 'next';
import { generatePageMetadata } from '@/common/lib/Metadata';
import HomeClient from './HomeClient';

export async function generateMetadata(): Promise<Metadata> {
  const base = generatePageMetadata();
  const title = '부산·김해·창원 유리문·강화도어 수리 | 조은샷시';
  const description =
    '부산·김해·창원 전 지역 상가 유리문·강화도어 수리 전문. 플로어 힌지 교체, 문 쾅 닫힘, 바닥 쓸림 당일 신속 수리.';

  return {
    ...base,
    title,
    description,
    keywords: [
      '부산 유리문 수리',
      '김해 유리문 수리',
      '창원 유리문 수리',
      '양산 유리문 수리',
      '강화도어 수리',
      '플로어 힌지 교체',
      '상가 출입문 수리',
      '유리문 쾅 닫힘',
      '유리문 바닥 쓸림',
      '힌지 기름 유출',
      'H바 교체',
      '상가 유리문 번호키',
      '부산 당일 문수리',
      '조은샷시',
    ],
    openGraph: {
      ...base.openGraph,
      title,
      description,
      locale: 'ko_KR',
      type: 'website',
      siteName: '조은샷시',
    },
    twitter: {
      ...base.twitter,
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
      '부산·김해·양산·창원시 전 지역 상가·매장·사무실·빌라 유리문 수리, 강화도어 플로어 힌지 교체, H바 수리, 출입문 바닥 긁힘·쾅 닫힘 당일 출장 수리 전문',
    telephone: '010-9392-0431',
    areaServed: ['부산광역시', '경상남도 김해시', '경상남도 양산시', '경상남도 창원시'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '플로어 힌지(Floor Hinge) 교체 & 감속 조절',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '강화도어 상/하부 H-Bar(스테인리스 바) 수리·교체',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '상부 피벗 힌지(상롯트) & 힌지 박스 부식 복원',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '강화유리문 전용 디지털도어락 / 번호키 & 손잡이 설치',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '상가 출입문 수평 정렬 & 바닥 긁힘 들어올림 수리',
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
        name: '비싼 유리문 전체 교체 대신 힌지나 부속 수리만으로 해결이 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네! 문 전체를 비싸게 새로 맞추지 않고도 마모된 플로어 힌지 교체, 바닥 케이스 몰탈 보강, 하부 H바 교체만으로도 새 문처럼 부드럽고 안전하게 멈추도록 완벽 복원됩니다.',
        },
      },
      {
        '@type': 'Question',
        name: '문이 너무 빨리 쾅 닫히는데 어떤 수리가 필요한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '하부 플로어 힌지 내부의 유압 오일이 터져 제동력을 잃은 상태입니다. 국산 규격 정품 King 유압 힌지로 교체하여 2단계 부드러운 감속과 손 끼임 방지 안전성을 회복할 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '매장 영업 중에 당일 방문 수리가 가능한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네! 부산·김해·양산·창원 전 지역을 신속 순회하고 있어 식당, 카페, 매장 영업에 방해되지 않도록 30분~1시간 내외로 현장에서 신속히 수리를 완료해 드립니다.',
        },
      },
      {
        '@type': 'Question',
        name: '수리 전화 상담 및 방문 점검은 어떻게 신청하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '문 전체 모습과 바닥 힌지 덮개 사진을 문자로 전송해 주시거나 대표 번호(010-9392-0431)로 전화 주시면 방문 전 대략적인 예상 수리 비용과 당일 출장 일정을 5분 내로 친절히 안내해 드립니다.',
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
