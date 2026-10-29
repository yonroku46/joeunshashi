import rawBlogPosts from './blogPosts.json';
import { ALL_DONGS } from './dongData';
import regionsData from './regions.json';

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  link: string;
  thumbnailUrl: string;
  category: string;
  region: string;
  regionSlug?: string;
  matchedKeyword?: string;
  matchedDong?: string;
  date: string;
  tags: string[];
}

export const OFFICIAL_BLOG_URL = 'https://blog.naver.com/joeunshashi';

// 오프라인이거나 초기 빌드 시 RSS 파일이 없을 때 대비한 안전 Fallback 데이터
export const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 'fallback-post-1',
    title: '부산 강서구 녹산동 유리문수리｜강화도어 덜컹거림 유리문쓸림 수리해드려요!',
    summary: '강화도어가 제대로 고정되지 않고 덜컹거리며 바닥에 쓸려 닫히지 않는 증상, 상롯트 및 힌지 유압 점검 후 현장 즉시 정밀 수리 완료.',
    link: 'https://blog.naver.com/joeunshashi/224420327721',
    thumbnailUrl: 'https://blogthumb.pstatic.net/MjAyNjA5MTRfMTA4/MDAxNzg5Mzg3Nzg0NzYz.XY_uOCq-Ys2e0Xqvm5r7Ay8zNONVCLRCj8sERu-uBhog.fOzvLmI3t1UDwzgR4uhsXyEDYkPBFqW7N6bPQEfnpoIg.JPEG/900_1789387561079.jpg?type=s3',
    category: '강화도어/유리문',
    region: '부산 강서구 녹산동',
    regionSlug: 'busan',
    matchedDong: '녹산동',
    date: '2026.09.22',
    tags: ['부산유리문수리', '강화도어수리', '녹산동유리문', '강화도어덜컹거림'],
  },
  {
    id: 'fallback-post-2',
    title: '[김해 외동 유리 교체] 빌라 샷시유리 파손, 금형서리 유리는 왜 일반유리보다 비쌀까요?',
    summary: '김해 외동 빌라 샷시유리 파손 현장. 무늬가 들어간 특수 금형서리 유리의 규격 측정부터 안전 철거, 완벽 맞춤 교체 시공 과정 안내.',
    link: 'https://blog.naver.com/joeunshashi/224424509975',
    thumbnailUrl: 'https://blogthumb.pstatic.net/MjAyNjA5MTdfNCAg/MDAxNzg5NjQyMDU2MTQ0.HEkfT5oH4A11UQ-t28FlpOfQEJ3MAtiQjKADXP56NsEg.PwoxKqvjWelwIq3ZEFnW2e9CPQSQ5zdSa6sFbKe2zvAg.JPEG/900_1789642055419.jpg?type=s3',
    category: '유리파손',
    region: '김해시 외동',
    regionSlug: 'gimhae',
    matchedDong: '외동',
    date: '2026.09.28',
    tags: ['김해유리교체', '김해외동유리', '빌라샷시유리', '금형서리유리'],
  },
  {
    id: 'fallback-post-3',
    title: '[김해 유리문설치] 사무실 강화도어 출입문 설치해드립니다',
    summary: '기존 방화문 구조를 훼손하지 않고 사무실 내부에 통유리 강화도어를 추가 설치하여 깔끔한 매장 인테리어와 개방감 확보.',
    link: 'https://blog.naver.com/joeunshashi/224418313142',
    thumbnailUrl: 'https://blogthumb.pstatic.net/MjAyNjA5MjFfMTUx/MDAxNzg5OTQ2MTM2NTgz.TyHcP1UMWYS-K2dhkrigSjwW_LPAVwkf9icdYWO1Orog.YLr1Mz1v-0hFvbRCAejibAEgzQd28BtV6iUtWRouYzog.JPEG/900_1789946136161.jpg?type=s3',
    category: '강화도어/유리문',
    region: '김해시 사무실',
    regionSlug: 'gimhae',
    date: '2026.09.21',
    tags: ['김해유리문설치', '사무실강화도어', '출입문시공', '조은샷시'],
  },
  {
    id: 'fallback-post-4',
    title: '김해 아파트 덕산베스트타운 샷시유리 파손, 깨진 페어유리 신속하게 교체했습니다',
    summary: '이사 과정에서 파손된 아파트 이중유리(페어유리) 긴급 교체. 입주 일정에 맞춰 신속하게 당일 맞춤 제작 및 실리콘 코킹 마감.',
    link: 'https://blog.naver.com/joeunshashi/224416017690',
    thumbnailUrl: 'https://blogthumb.pstatic.net/MjAyNjA5MThfMTMz/MDAxNzg5NzA4MDg1NTc1.-c3GEEVSv3D7y1ZyL6rwifu1T6cAsN9NXlAn0HwHH4Ug.GX6gy-7pi108UuTtoEMH_Hgn3519kq0Vu60yFz6xfKog.JPEG/900_1789708085168.jpg?type=s3',
    category: '유리파손',
    region: '김해 덕산베스트',
    regionSlug: 'gimhae',
    date: '2026.09.18',
    tags: ['김해페어유리', '아파트샷시유리', '깨진유리교체', '긴급유리출장'],
  },
  {
    id: 'fallback-post-5',
    title: '셀프 유리커팅, 유리자르기 DIY하시려면 꼭 보세요!',
    summary: '유리를 직접 재단하기 전 필요한 도구 준비와 안전 수칙, 스코어링 압력 조절 노하우까지 샷시·유리 전문가가 알려주는 셀프 유리 가이드.',
    link: 'https://blog.naver.com/joeunshashi/224435761654',
    thumbnailUrl: 'https://blogthumb.pstatic.net/MjAyNjEwMDhfODMg/MDAxNzkxNDY5NDg0NzIy.p1riyAFO5JtdyUhX0JOWLE2RsdGfHeGyfNCwmelQ9mog.0ubdp-qHQU1jy50izY5QnYqD-DMyTP3MVePubFWztfog.PNG/file_00000000d9fc820bbc37efe79d09e2c8%281%29.png?type=s3',
    category: '전문가 칼럼',
    region: '전문가 가이드',
    date: '2026.10.08',
    tags: ['유리재단', '유리커팅', '유리자르는법', '유리안전'],
  },
];

// 주식, 맛집, 일상 등 비관련 게시글 차단 키워드
const EXCLUDE_CATEGORY_KEYWORDS = [
  '주식', '재테크', '투자', '일상생활', '일상', '맛집', '여행', '취미', 'it/기기', '리뷰'
];

const EXCLUDE_CONTENT_KEYWORDS = [
  '주식', '주가', '상한가', '하한가', '코스닥', '코스피', 'etf', '하이닉스', '삼익제약', '비트코인', '매수', '매도',
  '맛집', '통닭', '치킨', '고깃집', '외식 추천', '식당 추천', '한정식', '메뉴 가격', '먹어본 후기',
  '카페인 줄', '천년숲', '가볼만한곳', '산책하기', '정원 다녀온', '다녀온 후기',
  '갤럭시', '노트20', '아이폰', '스마트폰', '배터리 셀프 교체'
];

export function isValidConstructionPost(post: BlogPost): boolean {
  const cat = (post.category || '').toLowerCase();
  const text = `${post.title} ${post.summary} ${(post.tags || []).join(' ')}`.toLowerCase();

  if (EXCLUDE_CATEGORY_KEYWORDS.some((kw) => cat.includes(kw))) return false;
  if (EXCLUDE_CONTENT_KEYWORDS.some((kw) => text.includes(kw))) return false;
  return true;
}

// 빌드 시 동기화된 JSON 데이터 우선 사용, 없거나 비어있으면 Fallback 데이터 사용 (순수 시공글만 필터링)
export const BLOG_POSTS: BlogPost[] = (
  Array.isArray(rawBlogPosts) && rawBlogPosts.length > 0
    ? (rawBlogPosts as BlogPost[])
    : FALLBACK_POSTS
).filter(isValidConstructionPost);

export interface RankOptions {
  regionSlug?: string;
  districtSlug?: string;
  dongSlug?: string;
  maxCount?: number;
}

/**
 * 4단계 우선순위 매칭 엔진 (동 > 구 > 시 > 최신순 Fallback)
 * 1순위: 해당 동(Dong) 직접 일치 (100점)
 * 2순위: 해당 구(District) 일치 (60점)
 * 3순위: 해당 시(Region) 일치 (30점)
 * 4순위: 최신 시공 글 Fallback (0점)
 */
export function getRankedBlogPosts({
  regionSlug,
  districtSlug,
  dongSlug,
  maxCount = 4,
}: RankOptions): BlogPost[] {
  // 타겟 정보 조회
  const targetDong = dongSlug ? ALL_DONGS.find((d) => d.slug === dongSlug) : undefined;
  const targetRegion = regionSlug
    ? regionsData.regions.find((r) => r.slug === regionSlug)
    : undefined;
  const targetDistrict =
    targetRegion && districtSlug
      ? targetRegion.districts.find(
          (d) => d.slug === districtSlug || d.slug === districtSlug.replace(/-gu$/, '')
        )
      : undefined;

  // 동 키워드 추출
  const dongKeywords: string[] = [];
  if (targetDong) {
    dongKeywords.push(targetDong.name); // 예: '외동', '녹산동'
    const shortName = targetDong.name.replace(/동|읍|면$/g, '');
    if (shortName.length >= 2) {
      dongKeywords.push(shortName); // 예: '외', '녹산'
    }
  }

  // 구 키워드 추출
  const districtKeywords: string[] = [];
  if (targetDistrict) {
    districtKeywords.push(targetDistrict.name); // 예: '강서구', '마산회원구'
    const shortDistrict = targetDistrict.name.replace(/구|군$/g, '');
    if (shortDistrict.length >= 2) {
      districtKeywords.push(shortDistrict);
    }
  }

  // 시 키워드 추출
  const regionKeywords: string[] = [];
  if (targetRegion) {
    regionKeywords.push(targetRegion.name); // 예: '부산광역시', '김해시'
    const shortRegion = targetRegion.name.replace(/광역시|특별시|시$/g, '');
    if (shortRegion.length >= 2) {
      regionKeywords.push(shortRegion); // 예: '부산', '김해', '창원'
    }
  }

  // 포스트별 점수 산정
  const scoredPosts = BLOG_POSTS.map((post) => {
    let score = 0;
    const postSearchText = `${post.title} ${post.summary} ${post.tags.join(' ')} ${post.matchedDong || ''} ${post.region}`.toLowerCase();

    // 1단계: 동(Dong) 매칭 검사
    if (dongKeywords.length > 0) {
      const isDongMatched = dongKeywords.some((kw) =>
        postSearchText.includes(kw.toLowerCase())
      );
      if (isDongMatched) {
        score = 100;
        return { post, score };
      }
    }

    // 2단계: 구(District) 매칭 검사
    if (districtKeywords.length > 0) {
      const isDistrictMatched = districtKeywords.some((kw) =>
        postSearchText.includes(kw.toLowerCase())
      );
      if (isDistrictMatched) {
        score = 60;
        return { post, score };
      }
    }

    // 3단계: 시/도(Region) 매칭 검사
    if (regionSlug) {
      const isRegionSlugMatched = post.regionSlug === regionSlug;
      const isRegionTextMatched = regionKeywords.some((kw) =>
        postSearchText.includes(kw.toLowerCase())
      );
      if (isRegionSlugMatched || isRegionTextMatched) {
        score = 30;
        return { post, score };
      }
    }

    // 4단계: 기본(0점)
    return { post, score };
  });

  // 정렬: 1순위 score 내림차순 -> 2순위 date 내림차순
  scoredPosts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.post.date.localeCompare(a.post.date);
  });

  return scoredPosts.slice(0, maxCount).map((sp) => sp.post);
}
