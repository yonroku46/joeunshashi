'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhoneCall, FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap/ServiceAreaMap';
import FloatingCtaBar from '@/components/ui/FloatingCtaBar/FloatingCtaBar';
import BlogCaseStudies from '@/components/ui/BlogCaseStudies/BlogCaseStudies';
import type { BreadcrumbItem, District, DongInfo } from '@/types/region';
import '@/styles/pages/area.scss';

const HERO_SLIDES = [
  { id: 1, src: '/images/hero-1.jpg', alt: '조은샷시 강화유리문 및 플로어 힌지 정밀 수리 현장' },
  { id: 2, src: '/images/hero-2.jpg', alt: '아파트 및 상가 알루미늄·하이샷시 레일 롤러 보수 현장' },
  { id: 3, src: '/images/hero-3.jpg', alt: '외풍 차단 고밀도 모헤어 및 미세방충망 시공 현장' },
  { id: 4, src: '/images/hero-4.jpg', alt: '빌라 및 주택 창문 처짐 수평 조율 및 잠금장치 수리' },
];

interface AreaClientProps {
  breadcrumbItems: BreadcrumbItem[];
  targetType: 'region' | 'district' | 'dong';
  title: string;
  eyebrow: string;
  description: string;
  locationName: string;
  characteristics: string[];
  keyIssues: string[];
  nearbyDongs: DongInfo[];
  districts?: District[];
  regionSlug: string;
  districtSlug?: string;
  dongSlug?: string;
}

export default function AreaClient({
  breadcrumbItems,
  targetType,
  title,
  eyebrow,
  description,
  locationName,
  characteristics,
  keyIssues,
  nearbyDongs,
  districts = [],
  regionSlug,
}: AreaClientProps) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // 배경 슬라이드 자동 전환 (완벽한 메모리 누수 방지 & 백그라운드 탭 리소스 절약)
  useEffect(() => {
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
  }, []);

  return (
    <div className="area-container">
      {/* 1. BREADCRUMB & HERO SECTION (배경 일체형 프리미엄 다크 히어로 & 4장 크로스페이드) */}
      <section className="location-hero" aria-label={`${locationName} 출장 수리 안내`}>
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

        <div className="location-hero-inner">
          <div className="hero-top-breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="hero-content">
            <span className="hero-eyebrow">{eyebrow}</span>
            <h1 className="hero-title">
              {title}<br />
              <span>플로어 힌지 &amp; 출입문 당일 수리</span>
            </h1>
            <p className="hero-desc">{description}</p>

            <div className="hero-cta-group">
              <a href="tel:01093920431" className="btn-tel" aria-label="출장 상담 바로걸기">
                <FiPhoneCall className="btn-icon" />
                <span>010-9392-0431</span>
              </a>
              <a href="sms:01093920431" className="btn-sms" aria-label="문자로 고장 사진 전송하기">
                <FiMessageSquare className="btn-icon" />
                <span>문자로 사진 전송</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="area-content-body">

      {/* 2. LOCATION INTRO (지역별 맞춤 고장 환경 및 진단) */}
      <section className="location-intro" aria-label={`${locationName} 출입문 환경 및 맞춤 진단`}>
        <div className="intro-header">
          <p className="eyebrow">{locationName} 출장 맞춤 수리 안내</p>
          <h2>문 상태와 설치 환경을 확인한 뒤<br />필요한 부속 작업 범위를 안내합니다</h2>
        </div>
        <p className="intro-content">
          {locationName}의 상가 1층 매장, 카페, 식당, 사무실, 병원, 학원 및 빌라 공동현관 강화유리문 고장 상담을 신속히 진행합니다.
          문이 너무 빨리 쾅 닫히거나 바닥에 끌려 덜 닫히는 증상, 하부 H바 파손, 열쇠 구멍 불일치 사진을 보내주시면
          방문 전 대략적인 예상 수리 비용과 당일 일정 조율을 도와드립니다.
        </p>

        {(characteristics.length > 0 || keyIssues.length > 0) && (
          <div className="key-points-grid">
            <div className="point-card">
              <strong>{locationName} 주요 출입문 환경 특성</strong>
              <p>{characteristics.join(' · ') || '상가 및 주거 밀집 상권 출입문 점검'}</p>
            </div>
            <div className="point-card">
              <strong>자주 접수되는 대표 고장 증상</strong>
              <p>{keyIssues.join(' · ') || '플로어 힌지 유압 터짐, 하부 바닥 긁힘, H바 부식'}</p>
            </div>
            <div className="point-card">
              <strong>신속 당일 출장 지원</strong>
              <p>영업 매장에 지장 없도록 30분~1시간 내 현장 정밀 수리 완결</p>
            </div>
          </div>
        )}
      </section>

      {/* 3. MAJOR SERVICES (주요 수리 항목) */}
      <section className="services-section" aria-labelledby="services-title">
        <h2 id="services-title" className="section-title">
          {locationName} 주요 유리문 수리 항목
        </h2>
        <p className="section-sub">
          비싼 문 전체 교체 없이, 국산 규격 플로어 힌지 및 핵심 부속 수리로 90% 비용을 아껴드립니다.
        </p>

        <div className="service-grid">
          <article className="service-card">
            <div>
              <h3>플로어 힌지(Floor Hinge) 교체 &amp; 감속 조절</h3>
              <p>기름이 새어 나와 쾅 닫히는 유리문, 국산 삼화정밀 King 정품 힌지로 2단계 부드러운 감속을 복원합니다.</p>
              <ul className="spec-list">
                <li>King 8300, 8500 전 규격 정품 보유</li>
                <li>손 끼임 방지 2단계 감속 속도 정밀 세팅</li>
                <li>바닥 힌지 케이스 몰탈 용접 보강</li>
              </ul>
            </div>
            <a href="tel:01093920431" className="card-link">
              <span>힌지 교체 전화 문의</span>
              <FiArrowRight />
            </a>
          </article>

          <article className="service-card">
            <div>
              <h3>강화도어 상/하부 H-Bar(스테인리스 바) 수리·교체</h3>
              <p>찌그러지거나 부식되어 헐거워진 스테인리스 H바를 새 규격 자재로 교체하여 유리 이탈을 방지합니다.</p>
              <ul className="spec-list">
                <li>손상된 H바만 부분 영구 교체</li>
                <li>부식 없는 고강도 스테인리스 커버 시공</li>
                <li>바닥 긁힘 및 처짐 현상 영구 해결</li>
              </ul>
            </div>
            <a href="tel:01093920431" className="card-link">
              <span>H-Bar 교체 전화 문의</span>
              <FiArrowRight />
            </a>
          </article>

          <article className="service-card">
            <div>
              <h3>상부 피벗 힌지(상롯트) &amp; 힌지 박스 복원</h3>
              <p>문이 흔들리거나 상부 축이 덜렁거리는 증상, 견고한 피벗 핀 교체로 안전 이탈을 원천 차단합니다.</p>
              <ul className="spec-list">
                <li>상부 프레임 홀 유격 완벽 보강</li>
                <li>강풍 대비 출입문 이탈 방지</li>
                <li>센터 0도 정렬로 문 덜 닫힘 해결</li>
              </ul>
            </div>
            <a href="tel:01093920431" className="card-link">
              <span>상부 축 수리 전화 문의</span>
              <FiArrowRight />
            </a>
          </article>

          <article className="service-card">
            <div>
              <h3>강화유리문 전용 디지털도어락 / 번호키 설치</h3>
              <p>유리 타공 없이 안전하게 장착되는 상가 매장 전용 클립형·타공형 프리미엄 디지털도어락을 당일 시공합니다.</p>
              <ul className="spec-list">
                <li>외도어 / 양도어 전용 브라켓 장착</li>
                <li>허수 번호 보안 및 자동 잠금 지원</li>
                <li>매장 인테리어 어울리는 디자인</li>
              </ul>
            </div>
            <a href="tel:01093920431" className="card-link">
              <span>도어락 설치 전화 문의</span>
              <FiArrowRight />
            </a>
          </article>
        </div>
      </section>

      {/* 4. INTERACTIVE SERVICE AREA MAP */}
      <section className="area-map-container" aria-label="출장 권역 지도">
        <ServiceAreaMap activeRegion={regionSlug} />
      </section>

      {/* 5. NEARBY DONGS OR DISTRICTS (내부 링크망 / Internal Linking Hub) */}
      {nearbyDongs.length > 0 && (
        <section className="nearby-section" aria-label="가까운 지역 출장 안내">
          <div className="nearby-header">
            <p className="eyebrow">지역별 안내 바로가기</p>
            <h2>{locationName} 인근 생활권 유리문 수리</h2>
            <p>인근 구·동별 출장 안내 페이지입니다. 고객님이 계신 생활권을 선택해 주세요.</p>
          </div>

          <div className="nearby-links-grid">
            {nearbyDongs.map((dong) => (
              <Link
                key={dong.slug}
                href={`/area/${dong.regionSlug}/${dong.districtSlug}/${dong.slug}`}
                className="nearby-dong-link"
              >
                <span>{dong.districtName} {dong.name} 문수리</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 시/도 단위 페이지일 경우 구/군 선택 그리드 노출 */}
      {targetType === 'region' && districts.length > 0 && (
        <section className="nearby-section" aria-label="구·군별 세부 안내">
          <div className="nearby-header">
            <p className="eyebrow">{locationName} 관할 구·군</p>
            <h2>{locationName} 지역별 세부 수리 안내</h2>
            <p>원하시는 구·군을 선택하시면 상세 수리 안내와 비용을 확인하실 수 있습니다.</p>
          </div>

          <div className="nearby-links-grid">
            {districts.map((d) => (
              <Link
                key={d.slug}
                href={`/area/${regionSlug}/${d.slug}`}
                className="nearby-dong-link"
              >
                <span>{d.fullName} 문수리</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 6. OFFICIAL BLOG CASE STUDIES (네이버 공식 블로그 시공 일지) */}
      <BlogCaseStudies
        filterRegionSlug={regionSlug}
        title={`${locationName} 및 주요 현장 시공 일지`}
        subtitle={`네이버 공식 블로그에 기록된 ${locationName} 및 인근 생활권의 실제 유리문 수리 작업 리포트입니다.`}
      />

      {/* 7. CONTACT BANNER (직접 전화 및 문자 안내) */}
      <section className="location-contact-banner" aria-label="출장 상담 안내">
        <div className="banner-content-wrap">
          <span className="banner-badge">빠른 전화 상담</span>
          <h2>{locationName} 유리문·강화도어 당일 출장 상담</h2>
          <p>문 전체 사진과 바닥 힌지 덮개 사진을 문자로 보내주시면 5분 내 정확한 수리 비용과 일정을 안내해 드립니다.</p>
          <div className="banner-btn-group">
            <a href="tel:01093920431" className="contact-tel-btn">
              <FiPhoneCall className="btn-icon" />
              <span>010-9392-0431</span>
            </a>
            <a href="sms:01093920431" className="contact-sms-btn">
              <FiMessageSquare className="btn-icon" />
              <span>사진 전송 문자 문의</span>
            </a>
          </div>
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
      </section>

      </div>

      {/* 7. FLOATING CTA BAR */}
      <FloatingCtaBar telNumber="010-9392-0431" displayTel="010-9392-0431" />
    </div>
  );
}
