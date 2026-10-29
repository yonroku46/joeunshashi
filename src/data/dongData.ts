import type { DongInfo } from '@/types/region';

/**
 * 부산·김해·창원 주요 구/군별 읍·면·동 데이터 목록
 * 로컬 SEO/AEO 검색 유입 및 내부 링크망(Internal Linking)을 위한 상세 동 데이터
 */
export const ALL_DONGS: DongInfo[] = [
  // 1. 부산광역시 강서구
  {
    slug: 'gangdong-dong',
    name: '강동동',
    fullName: '부산광역시 강서구 강동동',
    districtSlug: 'gangseo',
    districtName: '강서구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['서부산 유통단지 및 공장·사무동 출입문 밀집', '대형 중량 강화도어 및 가마찌도어 다수'],
    keyIssues: ['공장 사무실 대형 강화도어 힌지 교체', '유리문 쾅 닫힘 방지 감속 세팅', '하부 H바 부식 보강'],
  },
  {
    slug: 'myeongji-dong',
    name: '명지동',
    fullName: '부산광역시 강서구 명지동',
    districtSlug: 'gangseo',
    districtName: '강서구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['명지국제신도시 및 오션시티 대규모 근린상가', '신축 매장 유리문 정렬 불량 및 유압 터짐'],
    keyIssues: ['명지 상가 강화도어 힌지 교체', '신축 매장 유리문 바닥 긁힘 정렬', '상가 출입문 번호키 설치'],
  },
  {
    slug: 'daejeo-dong',
    name: '대저동',
    fullName: '부산광역시 강서구 대저동',
    districtSlug: 'gangseo',
    districtName: '강서구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['물류센터, 유통단지 및 근린생활시설', '차량 진출입 진동으로 인한 상부 롯트 이탈'],
    keyIssues: ['상부 피벗 힌지 흔들림 수리', '물류창고 사무실 출입문 힌지 교체', '유리문 하부 긁힘 해결'],
  },
  {
    slug: 'sinho-dong',
    name: '신호동',
    fullName: '부산광역시 강서구 신호동',
    districtSlug: 'gangseo',
    districtName: '강서구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['신호주거단지 및 르노코리아 배후 상권', '해안 인접 해풍 염분 부식'],
    keyIssues: ['바닥 힌지 박스 부식 몰탈 용접 보강', '식당 출입문 힌지 유압 교체', '강화도어 H바 교체'],
  },
  {
    slug: 'noksan-dong',
    name: '녹산동',
    fullName: '부산광역시 강서구 녹산동',
    districtSlug: 'gangseo',
    districtName: '강서구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['녹산국가산업단지 공장 및 근린 상업시설', '고하중 출입문 규격 플로어 힌지 교체'],
    keyIssues: ['공단 대형 강화유리문 힌지 교체', '출입문 수평 정렬', '하부 스테인리스 H바 제작'],
  },
  {
    slug: 'jisa-dong',
    name: '지사동',
    fullName: '부산광역시 강서구 지사동',
    districtSlug: 'gangseo',
    districtName: '강서구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['지사과학단지 및 주거단지 상가', '상가 출입문 덜 닫힘 및 번호키 오류'],
    keyIssues: ['지사동 상가 유리문 힌지 교체', '출입문 정렬 데드볼트 맞춤', '도어락 설치'],
  },

  // 2. 부산광역시 해운대구
  {
    slug: 'u-dong',
    name: '우동',
    fullName: '부산광역시 해운대구 우동',
    districtSlug: 'haeundae',
    districtName: '해운대구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['센텀시티 및 마린시티 최고급 상권·오피스', '빌딩 주출입문 및 프리미엄 매장 유리문'],
    keyIssues: ['마린시티 카페 강화도어 힌지 교체', '센텀 사무실 유리문 번호키', '고하중 강화도어 힌지 교체'],
  },
  {
    slug: 'jung-dong',
    name: '중동',
    fullName: '부산광역시 해운대구 중동',
    districtSlug: 'haeundae',
    districtName: '해운대구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['해운대 구남로 관광특구 및 엘시티 상업시설', '고객 출입 빈번하여 힌지 조기 마모'],
    keyIssues: ['구남로 식당/주점 강화도어 긴급 수리', '유리문 쾅 닫힘 방지 손끼임 예방', '플로어 힌지 교체'],
  },
  {
    slug: 'jwa-dong',
    name: '좌동',
    fullName: '부산광역시 해운대구 좌동',
    districtSlug: 'haeundae',
    districtName: '해운대구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['해운대 신도시 대규모 학원가 및 병원·상가', '학생 안전을 위한 2단계 완충 감속 힌지'],
    keyIssues: ['좌동 학원가 강화도어 안전 수리', '병원 출입문 힌지 교체', '하부 H바 부식 교체'],
  },
  {
    slug: 'jaesong-dong',
    name: '재송동',
    fullName: '부산광역시 해운대구 재송동',
    districtSlug: 'haeundae',
    districtName: '해운대구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['센텀 배후 주거단지 및 상가주택', '빌라 공동현관 유리문 및 상가 출입문'],
    keyIssues: ['빌라 공동현관문 힌지 교체', '상가 유리문 바닥 긁힘 들어올림', '출입문 도어락 설치'],
  },

  // 3. 부산광역시 부산진구
  {
    slug: 'bujeon-dong',
    name: '부전동(서면)',
    fullName: '부산광역시 부산진구 부전동',
    districtSlug: 'busanjin',
    districtName: '부산진구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['서면 1번가·젊음의거리 부산 최대 중심 상권', '출입문 고장 시 즉각 영업 지장, 당일 긴급 출동'],
    keyIssues: ['서면 매장 강화도어 당일 1시간 수리', '식당 유리문 쾅 닫힘 힌지 교체', '상가 출입문 번호키'],
  },
  {
    slug: 'jeonpo-dong',
    name: '전포동',
    fullName: '부산광역시 부산진구 전포동',
    districtSlug: 'busanjin',
    districtName: '부산진구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['전포카페거리 감성 카페 및 디저트 매장 밀집', '감성 유리문 및 가마찌도어 손끼임 방지 세팅'],
    keyIssues: ['전포카페거리 유리문 힌지 교체', '매장 출입문 부드러운 감속 조절', '하부 H바 스테인리스 수리'],
  },
  {
    slug: 'yangjeong-dong',
    name: '양정동',
    fullName: '부산광역시 부산진구 양정동',
    districtSlug: 'busanjin',
    districtName: '부산진구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['행정복합지구 및 학교·학원 밀집가', '근린 상가 출입문 처짐 및 바닥 닿임'],
    keyIssues: ['상가 강화도어 힌지 교체', '유리문 수평 재정렬', '상부 피벗 힌지 수리'],
  },

  // 4. 부산광역시 수영구
  {
    slug: 'gwangan-dong',
    name: '광안동',
    fullName: '부산광역시 수영구 광안동',
    districtSlug: 'suyeong',
    districtName: '수영구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['광안리 해변 테라스 카페 및 음식점', '바닷바람 염분 부식으로 힌지 케이스 녹슬음'],
    keyIssues: ['광안리 오션뷰 카페 강화도어 힌지 수리', '녹슨 바닥 케이스 몰탈 용접 보강', '유리문 H바 교체'],
  },
  {
    slug: 'namcheon-dong',
    name: '남천동',
    fullName: '부산광역시 수영구 남천동',
    districtSlug: 'suyeong',
    districtName: '수영구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['빵천동 베이커리 거리 및 전통 고급 주거지', '상가 출입문 덜 닫힘 및 번호키 작동 불량'],
    keyIssues: ['베이커리 매장 유리문 힌지 교체', '출입문 정렬 데드볼트 맞춤', '상가 도어락 설치'],
  },

  // 5. 부산광역시 동래구
  {
    slug: 'myeongnyun-dong',
    name: '명륜동',
    fullName: '부산광역시 동래구 명륜동',
    districtSlug: 'dongnae',
    districtName: '동래구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['동래역 중심 번화가 및 메디컬센터 밀집', '병원 및 주점 출입문 빈번한 개폐'],
    keyIssues: ['동래 상가 강화도어 힌지 교체', '병원 출입문 부드러운 감속 수리', '유리문 바닥 긁힘 들어올림'],
  },
  {
    slug: 'sajik-dong',
    name: '사직동',
    fullName: '부산광역시 동래구 사직동',
    districtSlug: 'dongnae',
    districtName: '동래구',
    regionSlug: 'busan',
    regionName: '부산광역시',
    characteristics: ['사직야구장 상권 및 대단지 아파트 배후 상가', '유동인구 집중으로 출입문 힌지 유압 파손'],
    keyIssues: ['사직동 식당 강화유리문 힌지 교체', '학원 출입문 손끼임 방지', '하부 H바 교체'],
  },

  // 6. 경상남도 김해시 장유/율하
  {
    slug: 'yulha-dong',
    name: '율하동',
    fullName: '경상남도 김해시 율하동',
    districtSlug: 'jangyu',
    districtName: '장유동·율하',
    regionSlug: 'gimhae',
    regionName: '경상남도 김해시',
    characteristics: ['율하카페거리 및 신도시 중심 상가', '카페 유리문 쾅 닫힘 방지 힌지 세팅'],
    keyIssues: ['율하카페거리 강화도어 힌지 교체', '카페 유리문 부드러운 감속 세팅', '매장 출입문 번호키 설치'],
  },
  {
    slug: 'daecheong-dong',
    name: '대청동',
    fullName: '경상남도 김해시 대청동',
    districtSlug: 'jangyu',
    districtName: '장유동·율하',
    regionSlug: 'gimhae',
    regionName: '경상남도 김해시',
    characteristics: ['장유 롯데마트 인근 중심 상업지구', '식당 및 병원 출입문 힌지 교체 집중'],
    keyIssues: ['장유 대청동 상가 유리문 힌지 교체', '출입문 바닥 긁힘 해결', '상부 피벗 힌지 보강'],
  },

  // 7. 경상남도 김해시 내외동
  {
    slug: 'nae-dong',
    name: '내동',
    fullName: '경상남도 김해시 내동',
    districtSlug: 'naewoe',
    districtName: '내외동',
    regionSlug: 'gimhae',
    regionName: '경상남도 김해시',
    characteristics: ['김해 최대 번화가 먹자골목 및 메디컬 빌딩', '출입문 힌지 유압 누출로 인한 쾅 닫힘'],
    keyIssues: ['내동 상가 강화도어 긴급 수리', '식당 출입문 플로어 힌지 교체', '유리문 번호키 설치'],
  },
  {
    slug: 'oe-dong',
    name: '외동',
    fullName: '경상남도 김해시 외동',
    districtSlug: 'naewoe',
    districtName: '내외동',
    regionSlug: 'gimhae',
    regionName: '경상남도 김해시',
    characteristics: ['김해 신세계백화점 인근 및 주거 상가 밀집', '상가 출입문 수평 어긋남 및 열쇠 잠금 불량'],
    keyIssues: ['외동 상가 출입문 수평 정렬', '유리문 하부 H바 교체', '힌지 유압 교체'],
  },

  // 8. 경상남도 김해시 북부동(삼계·구산)
  {
    slug: 'samgye-dong',
    name: '삼계동',
    fullName: '경상남도 김해시 삼계동',
    districtSlug: 'bukbu',
    districtName: '북부동(삼계·구산)',
    regionSlug: 'gimhae',
    regionName: '경상남도 김해시',
    characteristics: ['삼계지구 학원가 및 프랜차이즈 상권', '학생 통행량 많아 손끼임 방지 힌지 필수'],
    keyIssues: ['삼계동 학원 강화도어 안전 수리', '매장 유리문 힌지 교체', '상가 출입문 번호키'],
  },
  {
    slug: 'gusan-dong',
    name: '구산동',
    fullName: '경상남도 김해시 구산동',
    districtSlug: 'bukbu',
    districtName: '북부동(삼계·구산)',
    regionSlug: 'gimhae',
    regionName: '경상남도 김해시',
    characteristics: ['구산지구 주거 상가 및 연지공원 인근 카페', '출입문 처짐 및 바닥 긁힘'],
    keyIssues: ['구산동 카페 유리문 힌지 교체', '유리문 바닥 긁힘 들어올림', 'H바 교체'],
  },

  // 9. 경상남도 창원시 성산구
  {
    slug: 'sangnam-dong',
    name: '상남동',
    fullName: '경상남도 창원시 성산구 상남동',
    districtSlug: 'seongsan',
    districtName: '성산구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['영남 최대 유흥·상업지구 24시간 영업 상권', '출입문 개폐 빈도 극심하여 힌지 마모 심각'],
    keyIssues: ['상남동 식당/주점 강화도어 힌지 긴급 교체', '유리문 쾅 닫힘 방지 감속 세팅', '상가 출입문 번호키'],
  },
  {
    slug: 'jungang-dong',
    name: '중앙동',
    fullName: '경상남도 창원시 성산구 중앙동',
    districtSlug: 'seongsan',
    districtName: '성산구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['창원 관공서 및 금융·오피스 빌딩가', '사무실 빌딩 강화유리문 및 도어락 설치'],
    keyIssues: ['창원 중앙동 오피스 유리문 힌지 교체', '사무실 강화도어 도어락 설치', '출입문 수평 정렬'],
  },

  // 10. 경상남도 창원시 의창구
  {
    slug: 'jung-dong-changwon',
    name: '중동(유니시티)',
    fullName: '경상남도 창원시 의창구 중동',
    districtSlug: 'uichang',
    districtName: '의창구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['어반브릭스 대규모 복합상업시설 및 유니시티 상권', '신축 매장 출입문 정렬 불량 및 유압 누출'],
    keyIssues: ['어반브릭스 매장 강화도어 수리', '유리문 힌지 교체', '출입문 바닥 긁힘 들어올림'],
  },
  {
    slug: 'palyong-dong',
    name: '팔용동',
    fullName: '경상남도 창원시 의창구 팔용동',
    districtSlug: 'uichang',
    districtName: '의창구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['팔용공단 사무동 및 뉴코아 아울렛 상권', '대형 중량 강화도어 힌지 교체'],
    keyIssues: ['팔용동 공장 사무실 유리문 힌지 교체', '하부 H바 스테인리스 교체', '상가 출입문 수리'],
  },

  // 11. 경상남도 창원시 마산회원구
  {
    slug: 'hapseong-dong',
    name: '합성동',
    fullName: '경상남도 창원시 마산회원구 합성동',
    districtSlug: 'masan-hoewon',
    districtName: '마산회원구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['마산 시외버스터미널 및 합성동 지하상가 번화가', '젊은 층 유동인구 많아 힌지 마모 심각'],
    keyIssues: ['합성동 매장 강화도어 힌지 교체', '유리문 쾅 닫힘 방지 안전 수리', '상가 출입문 번호키'],
  },
  {
    slug: 'yangdeok-dong',
    name: '양덕동',
    fullName: '경상남도 창원시 마산회원구 양덕동',
    districtSlug: 'masan-hoewon',
    districtName: '마산회원구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['메트로시티 대단지 상가 및 마산야구장 상권', '학원/병원/음식점 출입문 수리'],
    keyIssues: ['양덕동 상가 유리문 힌지 교체', '출입문 바닥 긁힘 수평 정렬', '강화도어 H바 교체'],
  },

  // 12. 경상남도 창원시 진해구
  {
    slug: 'seok-dong',
    name: '석동',
    fullName: '경상남도 창원시 진해구 석동',
    districtSlug: 'jinhae',
    districtName: '진해구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['진해 최대 중심 번화가 및 학원·식당 밀집', '출입문 힌지 유압 교체 수요 집중'],
    keyIssues: ['진해 석동 상가 강화도어 힌지 교체', '유리문 쾅 닫힘 방지 수리', '상가 출입문 도어락 설치'],
  },
  {
    slug: 'yongwon-dong',
    name: '용원동',
    fullName: '경상남도 창원시 진해구 용원동',
    districtSlug: 'jinhae',
    districtName: '진해구',
    regionSlug: 'changwon',
    regionName: '경상남도 창원시',
    characteristics: ['부산 신항 배후 상권 및 해안 지대', '염분 부식으로 인한 바닥 힌지 박스 녹슬음'],
    keyIssues: ['용원 상가 유리문 힌지 교체', '녹슨 바닥 케이스 몰탈 보강', '출입문 H바 수리'],
  },

  // 4. 경상남도 양산시
  {
    slug: 'mulgeum',
    name: '물금읍',
    fullName: '경상남도 양산시 물금읍',
    districtSlug: 'mulgeum',
    districtName: '물금읍',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['증산신도시 대단지 상권 및 물금 먹자골목', '프랜차이즈 카페·식당 강화도어 힌지 유압 마모 빈번'],
    keyIssues: ['증산 상가 강화도어 힌지 교체', '물금 식당 유리문 쾅 닫힘 감속 세팅', '매장 출입문 바닥 긁힘 정렬'],
  },
  {
    slug: 'beomeo',
    name: '범어리',
    fullName: '경상남도 양산시 물금읍 범어리',
    districtSlug: 'mulgeum',
    districtName: '물금읍',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['양산부산대병원 앞 메디컬 상가 및 원룸·상가주택', '환자 및 방문객 출입 빈번한 출입문 안전 관리 필수'],
    keyIssues: ['병원·약국 강화도어 안전 감속 힌지 시공', '유리문 바닥 처짐 들어올림', '상가 출입문 번호키 교체'],
  },
  {
    slug: 'jeungsan',
    name: '증산리',
    fullName: '경상남도 양산시 물금읍 증산리',
    districtSlug: 'mulgeum',
    districtName: '물금읍',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['증산역 라피에스타 및 중심 상업지구', '대형 강화유리문 및 외도어·양도어 수평 불량'],
    keyIssues: ['증산역 상가 유리문 플로어 힌지 교체', '강화도어 상하부 H바 부식 수리', '출입문 정렬 데드볼트 맞춤'],
  },
  {
    slug: 'gachon',
    name: '가촌리',
    fullName: '경상남도 양산시 물금읍 가촌리',
    districtSlug: 'mulgeum',
    districtName: '물금읍',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['물금 대단지 아파트 배후 학원가 및 근린상가', '학생 출입 안전을 위한 손끼임 방지 2단계 감속 세팅'],
    keyIssues: ['학원 강화도어 안전 수리', '유리문 덜 닫힘 힌지 교체', '디지털도어락 당일 설치'],
  },
  {
    slug: 'dongmyeon',
    name: '동면',
    fullName: '경상남도 양산시 동면',
    districtSlug: 'dongmyeon',
    districtName: '동면',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['석산신도시 및 사송복합신도시 신축 상권', '신축 매장 유리문 틀어짐 및 센터 불량'],
    keyIssues: ['동면 상가 강화도어 힌지 교체', '신축 매장 출입문 수평 교정', '상가 번호키 설치'],
  },
  {
    slug: 'seoksan',
    name: '석산리',
    fullName: '경상남도 양산시 동면 석산리',
    districtSlug: 'dongmyeon',
    districtName: '동면',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['석산 중심 상가 및 금산리 연계 주거 상권', '매장 주출입문 바닥 끌림 및 소음 발생'],
    keyIssues: ['석산 매장 출입문 힌지 교체', '바닥 긁힘 들어올림 수리', '하부 H바 교체'],
  },
  {
    slug: 'sasong',
    name: '사송리',
    fullName: '경상남도 양산시 동면 사송리',
    districtSlug: 'dongmyeon',
    districtName: '동면',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['사송더샵·데시앙 대단지 신축 단지 내 상가', '입주 매장 출입문 초기 유격 세팅 및 도어락 설치'],
    keyIssues: ['사송신도시 상가 유리문 정밀 정렬', '강화유리문 전용 디지털도어락 시공', '힌지 유압 조절'],
  },
  {
    slug: 'jungbu-dong',
    name: '중부동',
    fullName: '경상남도 양산시 중부동',
    districtSlug: 'jungang',
    districtName: '중앙·양주·삼성동',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['양산역 이마트 중심 번화가 및 금융·오피스', '고객 통행 많은 매장 강화도어 힌지 기름 터짐 다수'],
    keyIssues: ['양산역 상가 유리문 힌지 교체', '출입문 쾅 닫힘 방지 힌지 교체', '상가 번호키 당일 설치'],
  },
  {
    slug: 'nambu-dong',
    name: '남부동',
    fullName: '경상남도 양산시 남부동',
    districtSlug: 'jungang',
    districtName: '중앙·양주·삼성동',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['양산시청 관공서 및 남부시장 전통 상권', '오랜 사용으로 바닥 힌지 박스 부식 및 문 덜컹거림'],
    keyIssues: ['남부시장 상가 출입문 힌지 박스 용접 보강', '유리문 H바 찌그러짐 교체', '수평 재정렬'],
  },
  {
    slug: 'bukjeong-dong',
    name: '북정동',
    fullName: '경상남도 양산시 북정동',
    districtSlug: 'jungang',
    districtName: '중앙·양주·삼성동',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['북정공단 및 배후 식당·사무동 출입문', '중량 강화도어 및 상부 핀 유격으로 문 기울어짐'],
    keyIssues: ['공단 사무실 대형 강화도어 수리', '상부 피벗 힌지 롯트 교체', '출입문 바닥 긁힘 들어올림'],
  },
  {
    slug: 'seochang-dong',
    name: '서창동',
    fullName: '경상남도 양산시 서창동',
    districtSlug: 'ungang',
    districtName: '웅상권',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['웅상 북부 중심 상권 및 소주공단 연계 배후지', '외풍 및 빗물 유입으로 인한 힌지 케이스 녹슬음'],
    keyIssues: ['서창 상가 강화도어 힌지 교체', '녹슨 힌지 박스 몰탈 용접 보강', '유리문 도어락 설치'],
  },
  {
    slug: 'deokgye-dong',
    name: '덕계동',
    fullName: '경상남도 양산시 덕계동',
    districtSlug: 'ungang',
    districtName: '웅상권',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['웅상 최대 번화가 덕계사거리 및 대단지 상가', '식당 및 매장 주출입문 쾅 닫힘 안전 수리'],
    keyIssues: ['덕계 상가 출입문 힌지 교체', '매장 유리문 쾅 닫힘 완충 수리', '하부 스텐 H바 교체'],
  },
  {
    slug: 'pyeongsan-dong',
    name: '평산동',
    fullName: '경상남도 양산시 평산동',
    districtSlug: 'ungang',
    districtName: '웅상권',
    regionSlug: 'yangsan',
    regionName: '경상남도 양산시',
    characteristics: ['이마트 트레이더스 웅상점 상권 및 먹자골목', '유리문 센터 불일치 및 열쇠 구멍 어긋남 수리'],
    keyIssues: ['평산 상가 강화도어 수평 정렬', '플로어 힌지 규격 부속 교체', '출입문 번호키 시공'],
  },
];

/**
 * slug로 단일 동 데이터 조회
 */
export function getDongBySlug(dongSlug: string): DongInfo | undefined {
  return ALL_DONGS.find((d) => d.slug === dongSlug);
}

/**
 * 특정 시/구의 동 목록 조회
 */
export function getDongsByDistrict(districtSlug: string): DongInfo[] {
  return ALL_DONGS.filter((d) => d.districtSlug === districtSlug);
}

/**
 * 같은 시/구 내 인근 동 목록 조회 (현재 동 제외, 최대 6개)
 */
export function getNearbyDongs(currentDongSlug: string): DongInfo[] {
  const current = getDongBySlug(currentDongSlug);
  if (!current) return ALL_DONGS.slice(0, 6);

  const sameDistrict = ALL_DONGS.filter(
    (d) => d.districtSlug === current.districtSlug && d.slug !== currentDongSlug
  );
  if (sameDistrict.length >= 4) return sameDistrict.slice(0, 6);

  const sameRegion = ALL_DONGS.filter(
    (d) => d.regionSlug === current.regionSlug && d.slug !== currentDongSlug
  );
  return sameRegion.slice(0, 6);
}
