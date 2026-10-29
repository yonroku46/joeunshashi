'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FiPhoneCall,
  FiMessageSquare,
  FiClock,
  FiShield,
  FiTool,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
} from 'react-icons/fi';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap/ServiceAreaMap';
import FloatingCtaBar from '@/components/ui/FloatingCtaBar/FloatingCtaBar';
import BlogCaseStudies from '@/components/ui/BlogCaseStudies/BlogCaseStudies';
import { useUserRegion } from '@/common/hooks/useUserRegion';
import '@/styles/pages/home.scss';

interface SymptomData {
  id: string;
  tag: string;
  urgency: string;
  title: string;
  shortDesc: string;
  lead: string;
  rootCause: string;
  hazard: string;
  solution: string;
  timeRequired: string;
}

const SYMPTOMS_LIST: SymptomData[] = [
  {
    id: 'hinge-oil',
    tag: '위험 진단',
    urgency: '즉시 점검 권장',
    title: '쾅! 하고 맹렬하게 닫히는 문',
    shortDesc: '플로어 힌지 내부 유압 오일 누출',
    lead: '유압 실링이 터져 제동력을 상실한 상태로 바람이나 손을 놓을 때 무서운 속도로 닫힙니다.',
    rootCause: '오랜 사용과 충격으로 힌지 내부 유압 피스톤 실링이 파손되어 오일이 외부로 모두 유출되었습니다.',
    hazard: '손 끼임 시 분쇄 골절 위험 및 문틀 충격으로 강화유리가 산산조각 날 수 있습니다.',
    solution: '국산 삼화정밀 King 8300 정품 힌지로 1:1 교체하고 2단계 감속 속도를 정밀 셋팅합니다.',
    timeRequired: '당일 방문 시 30분 이내 완료',
  },
  {
    id: 'floor-drag',
    tag: '파손 주의',
    urgency: '당일 점검 필요',
    title: '바닥이나 문틀을 긁으며 뻑뻑함',
    shortDesc: '하부 힌지 또는 H바 볼트 풀림 및 처짐',
    lead: '문이 아래로 주저앉아 바닥 타일이나 문틀 프레임을 쇠 긁는 굉음과 함께 긁는 증상입니다.',
    rootCause: '진동으로 하부 스텐 H바의 고정 볼트가 풀리거나 내부 베어링이 파손되어 문이 처졌습니다.',
    hazard: '바닥 타일 파손은 물론, 강화유리 모서리에 직접 하중이 실려 유리 파손으로 이어집니다.',
    solution: '강화도어 탈거 후 하부 H바 보강 수리 및 5~7mm 표준 바닥 틈새를 확보하도록 재조정합니다.',
    timeRequired: '당일 방문 시 40분 이내 완료',
  },
  {
    id: 'lock-misaligned',
    tag: '보안 점검',
    urgency: '정밀 교정 필요',
    title: '문이 덜 닫히고 번호키가 안 잠김',
    shortDesc: '0도 정렬 틀어짐 & 풍압 밀림',
    lead: '정지 위치가 어긋나 디지털도어락 잠금 핀이 걸리지 않고 문틈으로 외풍과 소음이 유입됩니다.',
    rootCause: '힌지 박스 고정 볼트 유격과 바람의 영향으로 문의 0도 정렬 센터축이 비틀어졌습니다.',
    hazard: '야간 퇴근 시 문이 잠기지 않아 도난 위험에 노출되며 여름·겨울 냉난방 손실이 극심합니다.',
    solution: '힌지 센터 0도 정밀 영점 조율 및 번호키 스트라이커 위치를 1:1로 맞춤 교정합니다.',
    timeRequired: '당일 방문 시 25분 이내 완료',
  },
  {
    id: 'top-pivot',
    tag: '이탈 위험',
    urgency: '긴급 조치 권장',
    title: '문이 덜컹거리며 상부가 흔들림',
    shortDesc: '상부 피벗 힌지(상롯트) 축 마모',
    lead: '문 상단 축이 헐거워져 문을 열고 닫을 때마다 상부가 심하게 요동치며 이탈 조짐을 보입니다.',
    rootCause: '상부 프레임의 피벗 핀 홀이 닳아 넓어지거나 상롯트 회전 핀이 마모되어 발생합니다.',
    hazard: '돌풍이 불거나 손님이 문을 세게 밀었을 때 문이 통째로 바닥으로 전도될 수 있습니다.',
    solution: '고강도 특수 피벗 핀 교체 및 넓어진 상부 프레임 홀 유격을 완벽 용접·보강합니다.',
    timeRequired: '당일 방문 시 30분 이내 완료',
  },
];

interface ServiceItem {
  id: string;
  tabName: string;
  category: string;
  title: string;
  desc: string;
  badge: string;
  duration: string;
  image: string;
  steps: string[];
  specs: string[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'hinge',
    tabName: '플로어 힌지 교체',
    category: 'Floor Hinge Precision Replacement',
    title: '국산 삼화 King 정품 플로어 힌지 1:1 교체',
    desc: '기름이 터져 쾅 닫히거나 제동을 잃은 문, 국내 시장 점유율 1위 삼화정밀 King 8300 정품으로 교체하여 끝에서 부드럽게 멈추는 감속을 완벽 복원합니다.',
    badge: '삼화정밀 King 8300 정품',
    duration: '평균 30~40분 소요',
    image: '/images/door-repair-sample.jpg',
    steps: ['유압 오일 누출 점검', '부식 힌지박스 몰탈 보강', '2단계 감속 밸브 셋팅'],
    specs: [
      '국산 삼화정밀 King 8300 정품만 사용 (비규격 저가품 배제)',
      '1단계(90°~20°) 회전 및 2단계(20°~0°) 저속 감속 정밀 조율',
      '부식된 힌지 박스 철거 후 몰탈 보강 및 수평 재용접',
    ],
  },
  {
    id: 'hbar',
    tabName: '상·하부 H-Bar 수리',
    category: 'Stainless H-Bar Renovation',
    title: '강화도어 상/하부 스텐 H-Bar 부분 교체',
    desc: '부식되거나 찌그러져 바닥을 긁고 유리 이탈 위험이 있는 스텐 H바를 문 전체 교체 없이 손상된 부위만 새 규격 자재로 영구 교체합니다.',
    badge: '고강도 SUS304 스텐',
    duration: '평균 40~50분 소요',
    image: '/images/door-repair-sample.jpg',
    steps: ['강화도어 안전 탈거', '손상 H바 정밀 절단 분리', '신규 H바 압착 영구 결합'],
    specs: [
      '녹슬지 않는 최고급 SUS304 규격 스테인리스 자재 시공',
      '강화유리 하부 물림 실리콘 영구 양생 접착 공법 적용',
      '바닥 닿임·긁힘 완전 해결 및 바닥 틈새 5~7mm 표준 확보',
    ],
  },
  {
    id: 'pivot',
    tabName: '상부 피벗 힌지 복원',
    category: 'Pivot Hinge Axis Alignment',
    title: '상부 피벗 힌지(상롯트) 축 유격 복원',
    desc: '문이 덜컹거리고 상부 축이 헐거워져 바람에 넘어갈 듯한 증상, 견고한 정품 피벗 핀 교체와 프레임 홀 유격 보강으로 이탈을 원천 차단합니다.',
    badge: '특수강 피벗 핀 적용',
    duration: '평균 25~35분 소요',
    image: '/images/door-repair-sample.jpg',
    steps: ['상부 유격 정밀 계측', '피벗 핀 1:1 신품 교체', '수직·수평 센터 정렬'],
    specs: [
      '마모된 구형 피벗 핀을 고강도 특수 열처리 핀으로 1:1 교체',
      '넓어진 상부 프레임 홀(구멍) 용접 및 특수 부싱 정밀 보강',
      '0도 센터 회전축 완전 일치로 덜 닫힘 및 흔들림 박멸',
    ],
  },
  {
    id: 'lock',
    tabName: '강화유리문 번호키',
    category: 'Commercial Digital Door Lock',
    title: '강화유리문 전용 무타공 디지털도어락 시공',
    desc: '유리에 구멍을 뚫지 않고도 견고하게 장착되는 상가 매장 전용 클립형 디지털도어락을 외도어/양도어 구조에 맞춰 안전하게 시공합니다.',
    badge: '유리 무타공 특수 클립',
    duration: '평균 20~30분 소요',
    image: '/images/door-repair-sample.jpg',
    steps: ['유리 두께 규격 실측', '무타공 클립 정밀 장착', '잠금 센서 자동 세팅'],
    specs: [
      '유리 손상 위험 없는 강화도어 전용 클립 고정 방식',
      '비밀번호 노출 방지 허수 번호 보안 및 자동 잠금 지원',
      '문이 닫히면 1초 내 즉각 체결되는 매장 맞춤 스트라이커 시공',
    ],
  },
];

interface ComparisonRow {
  criteria: string;
  beforeTitle: string;
  beforeDesc: string;
  afterTitle: string;
  afterDesc: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criteria: '닫힘 속도 & 안전성',
    beforeTitle: '쾅! 맹렬하게 닫혀 손 끼임 골절 위험',
    beforeDesc: '유압 오일이 누출되어 제동력을 상실, 손님이나 직원의 손 끼임 및 유리 파손 사고 위험 극심',
    afterTitle: '2단계 유압 감속으로 끝에서 스르륵 정지',
    afterDesc: '손을 놓아도 마지막 20도 구간에서 자동으로 감속되어 누구에게나 안전하고 조용하게 닫힘',
  },
  {
    criteria: '하부 틈새 & 소음',
    beforeTitle: '바닥을 긁는 굉음과 타일 훼손',
    beforeDesc: '하부 볼트가 풀려 문이 주저앉아 바닥을 긁고 거친 소음과 함께 강화유리 코너에 충격 누적',
    afterTitle: '바닥 5~7mm 일정 간격 유지 및 무소음',
    afterDesc: '수평 재조정과 H바 보강으로 바닥 긁힘 없이 0dB에 가까운 부드럽고 매끄러운 회전 보장',
  },
  {
    criteria: '센터 정렬 & 보안',
    beforeTitle: '0도 정렬 틀어짐으로 번호키 잠금 불량',
    beforeDesc: '문이 덜 닫히거나 밖으로 튀어나와 도어락 데드볼트가 걸리지 않고 냉난방 손실 발생',
    afterTitle: '오차 없는 0도 밀폐 & 도어락 즉시 체결',
    afterDesc: '정밀 센터 영점 교정으로 문이 정확히 닫히고 디지털도어락이 즉시 잠겨 야간 보안 완벽',
  },
  {
    criteria: '비용 & 공사 부담',
    beforeTitle: '문틀 전체 철거 시 수백만 원대 공사',
    beforeDesc: '전체 교체 시 매장 영업 중단, 철거 분진 발생, 막대한 제작 및 설치 비용 부담',
    afterTitle: '핵심 부속만 1:1 수리하여 80~90% 절감',
    afterDesc: '영업 중단 없이 30분~1시간 내외 현장 부분 수리 완료, 합리적인 비용으로 새 문 수준 복원',
  },
];

interface HeroSlide {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    src: '/images/hero-1.jpg',
    alt: '조은샷시 강화유리문 및 플로어 힌지 정밀 수리 현장',
    title: '강화도어·유리문 수리',
  },
  {
    id: 2,
    src: '/images/hero-2.jpg',
    alt: '아파트 및 상가 알루미늄·하이샷시 레일 롤러 보수 현장',
    title: '샷시 레일·롤러 교체',
  },
  {
    id: 3,
    src: '/images/hero-3.jpg',
    alt: '외풍 차단 고밀도 모헤어 및 미세방충망 시공 현장',
    title: '외풍 모헤어·방충망',
  },
  {
    id: 4,
    src: '/images/hero-4.jpg',
    alt: '빌라 및 주택 창문 처짐 수평 조율 및 잠금장치 수리',
    title: '창문 처짐·수평 조율',
  },
];

export default function HomeClient() {
  const { currentRegion, setRegion } = useUserRegion('gimhae');
  const [activeSymptomId, setActiveSymptomId] = useState<string>('hinge-oil');
  const [activeServiceTab, setActiveServiceTab] = useState<number>(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);
  const [isHeroHovered, setIsHeroHovered] = useState<boolean>(false);

  const activeSymptom =
    SYMPTOMS_LIST.find((s) => s.id === activeSymptomId) || SYMPTOMS_LIST[0];
  const activeService = SERVICES_LIST[activeServiceTab] || SERVICES_LIST[0];

  // 1. 히어로 배경 슬라이드 자동 전환 (완벽한 메모리 누수 방지 & 백그라운드 탭 리소스 절약)
  useEffect(() => {
    if (isHeroHovered) return;

    let timer: NodeJS.Timeout | null = null;

    const runTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        if (typeof document !== 'undefined' && document.hidden) return;
        setCurrentHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5000);
    };

    runTimer();

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (timer) clearInterval(timer);
      } else {
        runTimer();
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isHeroHovered]);

  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = hash.replace(/^#/, '');
      const element = document.getElementById(targetId);
      if (element) {
        // 다른 페이지에서 진입 시 smooth 하지 않고 바로 딱 도착하도록 일시적 auto 전환
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';

        const headerOffset = 88; // 헤더 높이(64px) + 여유 여백(24px)
        const elementPosition = element.getBoundingClientRect().top;
        const targetScrollTop = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: 'auto',
        });

        const resetTimer = setTimeout(() => {
          document.documentElement.style.scrollBehavior = originalScrollBehavior;
        }, 150);

        return () => clearTimeout(resetTimer);
      }
    };

    scrollToHashTarget();
    const timer1 = setTimeout(scrollToHashTarget, 60);
    const timer2 = setTimeout(scrollToHashTarget, 220);

    window.addEventListener('hashchange', scrollToHashTarget);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('hashchange', scrollToHashTarget);
    };
  }, []);

  return (
    <div className="home-container">
      {/* 1. HERO SECTION (배경 일체형 프리미엄 다크 히어로 & 4장 크로스페이드 슬라이더) */}
      <section
        className="hero-section"
        aria-label="조은샷시 유리문 및 강화도어 수리 서비스 안내"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        <div className="hero-bg-layer" aria-hidden="true">
          <div className="hero-slider-track">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`hero-slide-item ${idx === currentHeroIndex ? 'is-active' : ''}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="hero-bg-image"
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            ))}
          </div>
          <div className="hero-bg-gradient" />
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-region-badge">
              <span className="live-dot" />
              부산 · 김해 · 양산 · 창원 전지역 당일 긴급 출동
            </span>
            <h1 className="hero-title">
              비싼 문 교체 대신 <span>정밀 수리</span>로<br />
              새 문처럼 부드럽고 안전하게 복원합니다
            </h1>
            <p className="hero-desc">
              쾅 닫히는 강화도어, 바닥 긁혀서 안 닫히는 유리문, 덜컹거리는 상가 출입문.<br />
              문 전체를 철거하지 않고 국산 정품 플로어 힌지 및 규격 부속 수리로 <strong>교체 비용 90%</strong>를 아껴드립니다.
            </p>

            <div className="hero-cta-group">
              <a href="tel:01093920431" className="hero-tel-primary-btn" aria-label="대표 전화 010-9392-0431 바로걸기">
                <FiPhoneCall className="btn-icon" aria-hidden="true" />
                <span>010-9392-0431</span>
              </a>
              <a href="sms:01093920431" className="hero-sms-btn" aria-label="고장 사진 문자로 전송하기">
                <FiMessageSquare className="btn-icon" aria-hidden="true" />
                <span>고장 사진 문자 전송</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (핵심 신뢰 요소) */}
      <section className="trust-strip-section" aria-label="조은샷시 핵심 신뢰 요소">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <div className="trust-icon" aria-hidden="true">
              <FiClock />
            </div>
            <div className="trust-text">
              <strong>당일 1시간 현장 점검</strong>
              <span>매장 영업 지장 없는 당일 신속 출장</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon" aria-hidden="true">
              <FiTool />
            </div>
            <div className="trust-text">
              <strong>교체 비용 90% 절감</strong>
              <span>문틀 철거 없이 힌지·부속 수리로 복원</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon" aria-hidden="true">
              <FiShield />
            </div>
            <div className="trust-text">
              <strong>국산 King 정품 자재</strong>
              <span>삼화정밀 KS 인증 규격 부속 및 책임 A/S</span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon" aria-hidden="true">
              <FiPhoneCall />
            </div>
            <div className="trust-text">
              <strong>투명한 사진 사전 상담</strong>
              <span>문 사진 전송 시 5분 내 예상 비용 확인</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SERVICE AREA MAP (지도 기반 권역 뷰어) */}
      <section className="service-map-section" aria-label="출장 권역 인터랙티브 지도">
        <ServiceAreaMap activeRegion={currentRegion} onSelectRegion={setRegion} />
      </section>

      {/* 4. SYMPTOMS SECTION (인터랙티브 고장 증상 자가진단 터미널) */}
      <section className="symptoms-section" aria-labelledby="symptoms-title">
        <div className="section-header">
          <span className="eyebrow">유리문 정밀 자가진단</span>
          <h2 id="symptoms-title">우리 매장 문에 이런 증상이 있나요?</h2>
          <p>증상을 선택하시면 고장의 근본 원인과 방치 시 위험도, 조은샷시의 맞춤 처방을 즉시 확인하실 수 있습니다.</p>
        </div>

        <div className="diagnostic-terminal">
          {/* 좌측: 증상 선택 리스트 */}
          <div className="terminal-selector" role="tablist" aria-label="고장 증상 선택 리스트">
            {SYMPTOMS_LIST.map((item, idx) => {
              const isSelected = activeSymptomId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`selector-item ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveSymptomId(item.id)}
                >
                  <span className="selector-index" aria-hidden="true">0{idx + 1}</span>
                  <div className="selector-content">
                    <strong className="selector-title">{item.title}</strong>
                    <p className="selector-desc">{item.shortDesc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 우측: 정밀 진단 및 처방 리포트 패널 */}
          <div className="terminal-report" role="tabpanel" aria-label="정밀 진단 및 처방 리포트">
            <div className="report-header">
              <div className="report-badge-row">
                <span className="report-chip">{activeSymptom.urgency}</span>
              </div>
              <h3 className="report-title">{activeSymptom.title}</h3>
              <p className="report-lead">{activeSymptom.lead}</p>
            </div>

            <div className="report-grid">
              <div className="report-box cause-box">
                <div className="box-label">
                  <FiAlertTriangle className="box-icon" />
                  <span>핵심 고장 원인</span>
                  <span className="box-tag warning">유의</span>
                </div>
                <p>{activeSymptom.rootCause}</p>
              </div>

              <div className="report-box hazard-box">
                <div className="box-label">
                  <FiAlertTriangle className="box-icon" />
                  <span>방치 시 안전 위험도</span>
                  <span className="box-tag danger">위험</span>
                </div>
                <p>{activeSymptom.hazard}</p>
              </div>
            </div>

            <div className="solution-rx-card">
              <div className="rx-label">
                <FiCheckCircle className="rx-icon" />
                <span>조은샷시 현장 맞춤 처방</span>
              </div>
              <p className="rx-text">{activeSymptom.solution}</p>
              <div className="rx-badges">
                <span className="meta-badge"><FiClock /> {activeSymptom.timeRequired}</span>
                <span className="meta-badge"><FiShield /> 국산 삼화정밀 King 정품 자재 사용</span>
              </div>
            </div>

            <div className="report-cta-actions">
              <a href="tel:01093920431" className="report-tel-btn">
                <FiPhoneCall />
                <span>이 증상 수리 전화 문의</span>
              </a>
              <a href="sms:01093920431" className="report-sms-btn">
                <FiMessageSquare />
                <span>사진 전송하고 5분 견적 받기</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION (4대 핵심 수리 솔루션 탭 스위처 & 딥다이브 쇼케이스) */}
      <section className="services-section" aria-labelledby="services-title">
        <div className="section-header">
          <span className="eyebrow">원인별 맞춤 솔루션</span>
          <h2 id="services-title">조은샷시 4대 핵심 수리 기술</h2>
          <p>문 전체 교체 대신 꼭 필요한 부속만 국산 정품으로 1:1 교체하여 비용과 안전을 동시에 지킵니다.</p>
        </div>

        <div className="solutions-showcase">
          {/* 상단 4단 세그먼트 탭 */}
          <div className="solutions-nav-tabs" role="tablist" aria-label="수리 솔루션 탭">
            {SERVICES_LIST.map((svc, idx) => {
              const isTabActive = activeServiceTab === idx;
              return (
                <button
                  key={svc.id}
                  type="button"
                  role="tab"
                  aria-selected={isTabActive}
                  className={`nav-tab-btn ${isTabActive ? 'is-active' : ''}`}
                  onClick={() => setActiveServiceTab(idx)}
                >
                  <span className="tab-text">{svc.tabName}</span>
                </button>
              );
            })}
          </div>

          {/* 선택된 솔루션 딥다이브 쇼케이스 (Split View) */}
          <div className="showcase-content-panel" role="tabpanel">
            <div className="showcase-visual-col">
              <div className="visual-frame">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  width={560}
                  height={340}
                  className="showcase-img"
                />
                <div className="visual-floating-pills">
                  <span className="float-pill brand"><FiShield /> {activeService.badge}</span>
                  <span className="float-pill time"><FiClock /> {activeService.duration}</span>
                </div>
              </div>
            </div>

            <div className="showcase-info-col">
              <div className="info-headline">
                <span className="eng-sub-badge">{activeService.category}</span>
                <h3 className="info-main-title">{activeService.title}</h3>
                <p className="info-desc">{activeService.desc}</p>
              </div>

              <div className="specs-checklist-box">
                <strong className="specs-title">조은샷시 시공 표준 &amp; 특장점</strong>
                <ul className="specs-list">
                  {activeService.specs.map((sp, i) => (
                    <li key={i}>
                      <FiCheck className="check-ico" />
                      <span>{sp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 하단 풀 와이드 3단계 시공 진행 프로세스 (Full Width Flow) */}
            <div className="process-flow-block">
              <div className="flow-header">
                <span className="flow-title">표준 시공 진행 3단계</span>
              </div>
              <div className="flow-steps">
                {activeService.steps.map((st, i) => (
                  <div key={i} className="flow-step-item">
                    <div className="step-badge-wrap">
                      <span className="flow-step-tag">0{i + 1}</span>
                    </div>
                    <div className="step-body">
                      <span className="step-label">{i + 1}단계 공정</span>
                      <strong className="flow-name">{st}</strong>
                    </div>
                    {i < activeService.steps.length - 1 && (
                      <div className="step-connector" aria-hidden="true">
                        <FiArrowRight className="connector-arrow" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER (성능 & 안전 1:1 대조 매트릭스) */}
      <section className="before-after-section" aria-label="수리 전후 비교">
        <div className="section-header">
          <span className="eyebrow">전후 성능 대조</span>
          <h2>조은샷시 수리 후 어떻게 달라지나요?</h2>
          <p>위험하고 불편했던 문이 조은샷시의 손을 거쳐 완벽히 안전하고 부드러운 문으로 복원됩니다.</p>
        </div>

        <div className="comparison-matrix-board">
          {/* 매트릭스 헤더 */}
          <div className="matrix-head-row">
            <div className="head-cell criteria-head">핵심 비교 항목</div>
            <div className="head-cell before-head">
              <span>수리 전 (고장·방치 상태)</span>
            </div>
            <div className="head-cell after-head">
              <span>조은샷시 수리 후 (완전 복원)</span>
            </div>
          </div>

          {/* 매트릭스 내용 행 */}
          <div className="matrix-body-rows">
            {COMPARISON_ROWS.map((row, idx) => (
              <div className="matrix-item-row" key={idx}>
                <div className="row-cell criteria-label-cell">
                  <span className="item-idx">0{idx + 1}</span>
                  <strong className="item-label">{row.criteria}</strong>
                </div>

                <div className="row-cell before-detail-cell">
                  <div className="mobile-cell-tag is-before">수리 전</div>
                  <div className="cell-flex-wrap">
                    <FiXCircle className="result-icon is-before" />
                    <div>
                      <strong className="result-title">{row.beforeTitle}</strong>
                      <p className="result-desc">{row.beforeDesc}</p>
                    </div>
                  </div>
                </div>

                <div className="row-cell after-detail-cell">
                  <div className="mobile-cell-tag is-after">수리 후</div>
                  <div className="cell-flex-wrap">
                    <FiCheckCircle className="result-icon is-after" />
                    <div>
                      <strong className="result-title">{row.afterTitle}</strong>
                      <p className="result-desc">{row.afterDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 매트릭스 하단 신뢰 안내 배너 */}
          <div className="matrix-summary-banner">
            <div className="summary-icon-wrap">
              <FiShield className="summary-icon" />
            </div>
            <div className="summary-text-wrap">
              <strong>문 전체를 비싸게 새로 맞출 필요가 전혀 없습니다</strong>
              <p>실제 강화유리문 고장의 90% 이상은 소모성 부속 1:1 교체와 수평 재조정만으로 신품 수준으로 복원됩니다.</p>
            </div>
            <a href="tel:01093920431" className="summary-cta-link">
              <span>수리 견적 바로 확인</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* 7. OFFICIAL BLOG CASE STUDIES (네이버 공식 블로그 시공 일지) */}
      <BlogCaseStudies />

      {/* 8. FAQ SECTION */}
      <section className="faq-section" id="faq-section" aria-labelledby="faq-title">
        <div className="section-header">
          <span className="eyebrow">궁금증 해결</span>
          <h2 id="faq-title">자주 묻는 질문 (FAQ)</h2>
          <p>유리문 및 강화도어 수리를 문의하시는 고객님들께서 가장 많이 물어보시는 질문입니다.</p>
        </div>

        <div className="faq-list">
          <article className="faq-item">
            <h3>비싼 전체 유리문 교체 없이 수리만으로 정말 해결이 되나요?</h3>
            <p>
              네! 대부분의 고객님께서 문 전체를 새로 맞춰야 하나 고민하시지만, 실제 현장 점검 결과 90% 이상은
              소모품인 플로어 힌지 교체와 하부 H바 수리, 수평 재정렬만으로도 새 문처럼 부드럽고 안전하게 복원됩니다.
              큰돈 들이지 마시고 먼저 조은샷시의 수리 진단을 받아보세요!
            </p>
          </article>

          <article className="faq-item">
            <h3>문이 너무 빨리 쾅 닫히는데 바로 수리해야 하나요?</h3>
            <p>
              네, 매우 위험한 상태입니다. 힌지 내부 유압 오일이 터져 제동력을 상실하면 바람이 불거나 손을 놓을 때
              문이 흉기처럼 쾅 닫혀 손 끼임 골절이나 유리 파손 사고가 발생할 수 있습니다. 방문객과 직원의 안전을 위해 당일 점검을 권장합니다.
            </p>
          </article>

          <article className="faq-item">
            <h3>상가 매장 영업 중인데 당일 수리가 가능한가요?</h3>
            <p>
              네! 조은샷시는 부산, 김해, 양산, 창원시 전 지역을 상시 순회하고 있어 손님이 덜 붐비는 시간대에 맞춰
              30분~1시간 내외로 현장에서 신속히 수리를 완료해 드립니다. 매장 영업에 지장을 주지 않으니 안심하세요.
            </p>
          </article>

          <article className="faq-item">
            <h3>수리 후 A/S 및 품질 보증은 어떻게 되나요?</h3>
            <p>
              조은샷시에서 교체한 국산 삼화정밀 King 정품 힌지와 부속에 대해 확실한 품질 보증을 지원합니다.
              작업 후 문제가 생기면 책임지고 신속하게 무상 사후 점검을 진행해 드립니다.
            </p>
          </article>
        </div>
      </section>

      {/* 9. DIRECT PHONE & SMS CALL GUIDE (직접 전화 및 문자 사진 전송) */}
      <section className="direct-call-section" aria-label="출장 수리 전화 및 문자 상담">
        <div className="direct-call-card">
          <div className="card-content-wrap">
            <span className="call-badge">빠른 전화 상담 &amp; 현장 방문</span>
            <h2>고장 사진을 문자로 보내주시면<br />5분 내 예상 수리 비용을 바로 안내해 드립니다</h2>
            <p>
              복잡한 신청서 작성 없이 고장 난 문 부위(바닥 힌지, H바, 상부 축 등)를
              사진 찍어 보내주시면 필요한 부속과 당일 출장 수리 일정을 신속히 확인해 드립니다.
            </p>
            <div className="call-btn-group">
              <a href="tel:01093920431" className="btn-call-action" aria-label="010-9392-0431 전화 걸기">
                <FiPhoneCall className="action-icon" />
                <span>010-9392-0431</span>
              </a>
              <a href="sms:01093920431" className="btn-sms-action" aria-label="문자로 고장 사진 전송하기">
                <FiMessageSquare className="action-icon" />
                <span>문자로 고장 사진 전송</span>
              </a>
            </div>
            <span className="call-notice">부산 · 김해 · 양산 · 창원 전지역 당일 방문 가능 · 연중무휴 상담</span>
          </div>

          {/* 우측 하단 전문 엔지니어 캐릭터 (Absolute Position) */}
          <div className="engineer-character-wrap" aria-hidden="true">
            <Image
              src="/images/engineer.png"
              alt=""
              width={260}
              height={260}
              className="engineer-img"
            />
          </div>
        </div>
      </section>


      {/* 10. FLOATING CTA BAR (모바일 하단 고정) */}
      <FloatingCtaBar telNumber="010-9392-0431" displayTel="010-9392-0431" />
    </div>
  );
}
