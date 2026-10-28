export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  link: string;
  thumbnailUrl: string;
  category: string;
  region: string;
  regionSlug?: string;
  date: string;
  tags: string[];
}

export const OFFICIAL_BLOG_URL = 'https://blog.naver.com/joeunshashi';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: '부산 강서구 녹산동 유리문수리｜강화도어 덜컹거림 유리문쓸림 수리해드려요!',
    summary: '강화도어가 제대로 고정되지 않고 덜컹거리며 바닥에 쓸려 닫히지 않는 증상, 상롯트 및 힌지 유압 점검 후 현장 즉시 정밀 수리 완료.',
    link: 'https://blog.naver.com/joeunshashi/224420327721',
    thumbnailUrl: 'https://blogthumb.pstatic.net/MjAyNjA5MTRfMTA4/MDAxNzg5Mzg3Nzg0NzYz.XY_uOCq-Ys2e0Xqvm5r7Ay8zNONVCLRCj8sERu-uBhog.fOzvLmI3t1UDwzgR4uhsXyEDYkPBFqW7N6bPQEfnpoIg.JPEG/900_1789387561079.jpg?type=s3',
    category: '강화도어/유리문',
    region: '부산 강서구 녹산동',
    regionSlug: 'busan',
    date: '2026.09.22',
    tags: ['부산유리문수리', '강화도어수리', '녹산동유리문', '강화도어덜컹거림'],
  },
  {
    id: 'post-2',
    title: '[김해 외동 유리 교체] 빌라 샷시유리 파손, 금형서리 유리는 왜 일반유리보다 비쌀까요?',
    summary: '김해 외동 빌라 샷시유리 파손 현장. 무늬가 들어간 특수 금형서리 유리의 규격 측정부터 안전 철거, 완벽 맞춤 교체 시공 과정 안내.',
    link: 'https://blog.naver.com/joeunshashi/224424509975',
    thumbnailUrl: 'https://blogthumb.pstatic.net/MjAyNjA5MTdfNCAg/MDAxNzg5NjQyMDU2MTQ0.HEkfT5oH4A11UQ-t28FlpOfQEJ3MAtiQjKADXP56NsEg.PwoxKqvjWelwIq3ZEFnW2e9CPQSQ5zdSa6sFbKe2zvAg.JPEG/900_1789642055419.jpg?type=s3',
    category: '유리파손',
    region: '김해시 외동',
    regionSlug: 'gimhae',
    date: '2026.09.28',
    tags: ['김해유리교체', '김해외동유리', '빌라샷시유리', '금형서리유리'],
  },
  {
    id: 'post-3',
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
    id: 'post-4',
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
    id: 'post-5',
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
