import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RSS_URL = 'https://rss.blog.naver.com/joeunshashi.xml';
const OUTPUT_FILE = path.join(__dirname, '../src/data/blogPosts.json');

// 권역별 지명 키워드 사전
const REGION_MAP = [
  {
    slug: 'gimhae',
    name: '김해시',
    keywords: [
      '김해', '외동', '내외동', '삼계', '구산', '장유', '율하', '주촌',
      '진영', '진례', '한림', '생림', '상동', '대동', '부원동', '동상동',
      '회현동', '불암동', '활천동', '어방동', '삼방동', '안동'
    ],
  },
  {
    slug: 'busan',
    name: '부산광역시',
    keywords: [
      '부산', '강서구', '녹산', '명지', '대저', '신호', '가덕', '북구',
      '구포', '덕천', '만덕', '화명', '사하구', '하단', '당리', '괴정',
      '다대포', '장림', '신평', '해운대', '센텀', '마린시티', '좌동',
      '우동', '중동', '재송', '반여', '동래', '금정', '부산진구'
    ],
  },
  {
    slug: 'changwon',
    name: '창원시',
    keywords: [
      '창원', '성산구', '중앙동', '상남동', '반송', '사파', '가음정',
      '의창구', '팔용', '봉곡', '명서', '도계', '동읍', '북면', '마산',
      '마산회원구', '합성', '양덕', '구암', '회원', '내서', '호계',
      '마산합포구', '월영', '완월', '자산', '진해', '석동', '용원', '이동', '자은'
    ],
  },
  {
    slug: 'yangsan',
    name: '양산시',
    keywords: [
      '양산', '물금', '범어', '증산', '가촌', '동면', '사송', '석산',
      '중앙동', '삼성동', '북정', '신기', '강서동', '교동', '어곡',
      '상북', '하북', '통도사', '웅상', '덕계', '평산', '서창', '소주'
    ],
  },
];

// 시공/수리 외 비관련 카테고리 블랙리스트 (주식, 맛집, 일상 등)
const EXCLUDE_CATEGORIES = [
  '주식', '재테크', '투자', '일상생활', '일상', '맛집', '여행', '취미', 'IT/기기', '리뷰'
];

// 비관련 콘텐츠 블랙리스트 키워드
const EXCLUDE_KEYWORDS = [
  '주식', '주가', '상한가', '하한가', '코스닥', '코스피', 'etf', '하이닉스', '삼익제약', '비트코인', '매수', '매도',
  '맛집', '통닭', '치킨', '고깃집', '외식 추천', '식당 추천', '한정식', '메뉴 가격', '먹어본 후기',
  '카페인 줄', '천년숲', '가볼만한곳', '산책하기', '정원 다녀온', '다녀온 후기',
  '갤럭시', '노트20', '아이폰', '스마트폰', '배터리 셀프 교체',
];

// 샷시·유리·문수리 전문 시공 키워드 화이트리스트
const CONSTRUCTION_KEYWORDS = [
  '문수리', '유리문', '강화도어', '강화유리', '힌지', '플로어힌지', 'h바', 'h-bar', '유리교체', '유리파손',
  '창문', '샷시', '샤시', '방충망', '도어클로저', '방화문', '유리재단', '유리커팅', '출입문',
  '도어락', '번호키', '창호', '외풍', '모헤어', '롤러', '레일', '유리제작', '유리시공',
  'abs도어', '가마찌도어', '자동문', '유리깨짐', '깨진유리', '페어유리', '이중유리', '문처짐',
  '상롯트', '하롯트', '피벗'
];

function isConstructionPost(category = '', title = '', summary = '', tags = []) {
  const catLower = category.toLowerCase();
  const textLower = `${title} ${summary} ${tags.join(' ')}`.toLowerCase();

  // 1. 제외 카테고리 검사
  if (EXCLUDE_CATEGORIES.some((c) => catLower.includes(c.toLowerCase()))) {
    return false;
  }

  // 2. 제외 키워드 검사
  if (EXCLUDE_KEYWORDS.some((kw) => textLower.includes(kw.toLowerCase()))) {
    return false;
  }

  // 3. 순수 시공 키워드 포함 검증
  return CONSTRUCTION_KEYWORDS.some((kw) => textLower.includes(kw.toLowerCase()));
}

// 텍스트에서 CDATA 및 HTML 태그 제거
function cleanText(str = '') {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// CDATA 내용 그대로 추출
function extractCdata(str = '') {
  const match = str.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return match ? match[1].trim() : cleanText(str);
}

// 본문 description에서 첫 번째 고화질 썸네일 이미지 추출
function extractThumbnail(descStr = '') {
  const imgMatch = descStr.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  return 'https://blogpfthumb.phinf.naver.net/MjAyNjA3MTZfNjcg/MDAxNzg0MTgyNzA3NzIz.j_UeIucFoNoZvzAkoRQWBFHarUJN_jZmiAixau_c_XUg.XipWZIzZYPJ-L4qbimVenXlnyDq48XXDitDSw7AMUxog.PNG/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3_%281%29.png/%25E5%2590%258D%25E7%25A7%25B0%25E6%259C%25AA%25E8%25A8%25AD%25E5%25AE%259A%25E3%2581%25AE%25E3%2583%2587%25E3%2582%25B6%25E3%2582%25A4%25E3%2583%25B3%2B%25281%2529.png?type=m2';
}

// 날짜 포맷 (Thu, 08 Oct 2026 23:49:13 +0900 -> 2026.10.08)
function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
  } catch {
    return '';
  }
}

// 텍스트 기반 스마트 지명 및 권역 분석 (제목 우선 -> 본문 -> 태그 순서)
function detectLocation(title, summary, tags = []) {
  const titleLower = title.toLowerCase();
  const summaryLower = summary.toLowerCase();
  const tagsLower = tags.map((t) => t.toLowerCase()).join(' ');

  // 1. 세부 동/읍/면 우선 감지
  for (const reg of REGION_MAP) {
    for (const kw of reg.keywords) {
      if (kw === reg.name.replace(/시|광역시/g, '')) continue; // 시 이름 자체는 제외하고 동 단위 먼저 검사
      const kwLower = kw.toLowerCase();

      // 제목에 동 이름이 있는 경우 (최고 신뢰도)
      if (titleLower.includes(kwLower)) {
        return {
          regionSlug: reg.slug,
          regionName: reg.name,
          matchedKeyword: kw,
          matchedDong: kw,
          displayRegion: `${reg.name} ${kw}`,
        };
      }
      // 본문 또는 태그에 동 이름이 있는 경우
      if (summaryLower.includes(kwLower) || tagsLower.includes(kwLower)) {
        return {
          regionSlug: reg.slug,
          regionName: reg.name,
          matchedKeyword: kw,
          matchedDong: kw,
          displayRegion: `${reg.name} ${kw}`,
        };
      }
    }
  }

  // 2. 구/군 및 시/도 단위 감지
  for (const reg of REGION_MAP) {
    const regKw = reg.name.replace(/시|광역시/g, '').toLowerCase();
    if (titleLower.includes(regKw) || summaryLower.includes(regKw) || tagsLower.includes(regKw)) {
      return {
        regionSlug: reg.slug,
        regionName: reg.name,
        matchedKeyword: reg.name,
        matchedDong: '',
        displayRegion: reg.name,
      };
    }
  }

  return {
    regionSlug: undefined,
    regionName: '전지역',
    matchedKeyword: '',
    matchedDong: '',
    displayRegion: '부산·경남 전지역',
  };
}

async function syncNaverBlog() {
  console.log('[sync-blog] 네이버 공식 RSS 피드 수집 시작:', RSS_URL);

  try {
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/xml, text/xml, */*',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const xml = await response.text();
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const posts = [];
    let match;
    let idx = 1;

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemContent = match[1];

      // 제목 추출
      const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
      const title = titleMatch ? extractCdata(titleMatch[1]) : '';

      // 링크 추출 (trackingCode 제거)
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
      let link = linkMatch ? extractCdata(linkMatch[1]) : '';
      link = link.replace(/\?fromRss=true.*$/, '');

      // 본문 description 추출
      const descMatch = itemContent.match(/<description>([\s\S]*?)<\/description>/);
      const rawDesc = descMatch ? descMatch[1] : '';
      const thumbnailUrl = extractThumbnail(rawDesc);
      const summary = cleanText(rawDesc).slice(0, 110) + '...';

      // 날짜 추출
      const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const date = pubDateMatch ? formatDate(pubDateMatch[1]) : '';

      // 카테고리 추출
      const catMatch = itemContent.match(/<category>([\s\S]*?)<\/category>/);
      const category = catMatch ? extractCdata(catMatch[1]) : '현장 시공';

      // 태그 추출
      const tagMatch = itemContent.match(/<tag>([\s\S]*?)<\/tag>/);
      const tags = tagMatch
        ? extractCdata(tagMatch[1]).split(',').map((t) => t.trim()).filter(Boolean)
        : [];

      // 주식, 맛집, 일상 등 비시공 게시글 완전 차단 필터링
      if (!isConstructionPost(category, title, summary, tags)) {
        continue;
      }

      // 스마트 위치 분석
      const location = detectLocation(title, summary, tags);

      posts.push({
        id: `naver-post-${idx++}`,
        title,
        summary,
        link,
        thumbnailUrl,
        category,
        region: location.displayRegion,
        regionSlug: location.regionSlug,
        matchedKeyword: location.matchedKeyword,
        matchedDong: location.matchedDong,
        date,
        tags,
      });
    }

    if (posts.length === 0) {
      console.warn('[sync-blog] ⚠️ 파싱된 포스트가 0개입니다. 기존 데이터를 유지합니다.');
      return;
    }

    // JSON 파일로 저장
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf-8');

    console.log(`[sync-blog] ✅ 네이버 블로그 최신글 ${posts.length}개 동기화 완료! -> ${OUTPUT_FILE}`);
  } catch (err) {
    console.warn('[sync-blog] ⚠️ 네이버 RSS 수집 실패 (오프라인/일시 오류). 기존 캐시를 유지합니다:', err.message);
    if (!fs.existsSync(OUTPUT_FILE)) {
      // 파일이 아예 없으면 기본 빈 배열이라도 생성
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  }
}

syncNaverBlog();
