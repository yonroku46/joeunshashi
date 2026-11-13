export interface RegionGalleryItem {
  id: number;
  src: string;
  jpgSrc: string;
  fallbackSrc: string;
  title: string;
  alt: string;
}

const GALLERY_PROCESS_TITLES = [
  '상가 출입문 플로어 힌지 유압 교체 및 감속 세팅',
  '하부 스테인리스 H-Bar 교체 및 바닥 쓸림 정렬',
  '상부 피벗 힌지(상롯트) 축 유격 복원 및 이탈 방지',
  '강화유리문 전용 무타공 클립형 번호키 설치',
  '부식된 바닥 힌지 박스 몰탈 용접 보강',
  '문틀 마찰 및 바닥 긁힘 들어올림 수평 정렬',
  '매장 강화도어 쾅 닫힘 방지 2단계 감속 밸브 세팅',
  '상가 주출입문 스테인리스 손잡이 교체',
  '양개도어(양문) 센터 맞춤 및 잠금장치 정렬',
  '노후 힌지 탈거 및 신품 규격 부속 결합',
  '외풍 차단 및 흔들림 방지 가스켓 세팅',
  '당일 출장 수리 완료 및 정상 개폐 안전 점검',
];

/**
 * 지역별 12개 시공 갤러리 데이터 생성 (WebP 기본 및 JPG 호환)
 */
export function getRegionGalleryItems(
  regionSlug: string,
  locationName: string,
  count = 12
): RegionGalleryItem[] {
  const normalizedRegion = ['gimhae', 'changwon', 'yangsan', 'busan'].includes(regionSlug)
    ? regionSlug
    : 'gimhae';

  return Array.from({ length: count }, (_, index) => {
    const id = index + 1;
    const processTitle = GALLERY_PROCESS_TITLES[index % GALLERY_PROCESS_TITLES.length];
    const heroFallbackId = (index % 4) + 1;

    return {
      id,
      src: `/images/regions/${normalizedRegion}/${id}.webp`,
      jpgSrc: `/images/regions/${normalizedRegion}/${id}.jpg`,
      fallbackSrc: `/images/hero-${heroFallbackId}.jpg`,
      title: processTitle,
      alt: `${locationName} 상가 유리문·강화도어 수리 현장 - ${processTitle} (${id})`,
    };
  });
}

/**
 * 지역별 대표 오픈그래프(OG) 이미지 URL 반환 (WebP/JPG 지원)
 */
export function getRegionOgImageUrl(
  regionSlug: string,
  baseUrl: string,
  format: 'webp' | 'jpg' = 'webp'
): string {
  const normalizedRegion = ['gimhae', 'changwon', 'yangsan', 'busan'].includes(regionSlug)
    ? regionSlug
    : 'gimhae';
  return `${baseUrl}/images/regions/${normalizedRegion}/1.${format}`;
}

/**
 * Schema.org 구조화 데이터용 12개 전체 이미지 절대 경로 배열 반환
 */
export function getRegionSchemaImages(
  regionSlug: string,
  baseUrl: string,
  count = 12,
  format: 'webp' | 'jpg' = 'webp'
): string[] {
  const normalizedRegion = ['gimhae', 'changwon', 'yangsan', 'busan'].includes(regionSlug)
    ? regionSlug
    : 'gimhae';

  return Array.from(
    { length: count },
    (_, index) => `${baseUrl}/images/regions/${normalizedRegion}/${index + 1}.${format}`
  );
}
