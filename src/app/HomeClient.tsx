'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  FiPhoneCall,
  FiMessageSquare,
  FiClock,
  FiShield,
  FiTool,
  FiArrowRight,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap/ServiceAreaMap';
import FloatingCtaBar from '@/components/ui/FloatingCtaBar/FloatingCtaBar';
import BlogCaseStudies from '@/components/ui/BlogCaseStudies/BlogCaseStudies';
import '@/styles/pages/home.scss';

export default function HomeClient() {
  const servicesTrackRef = useRef<HTMLDivElement>(null);

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

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesTrackRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      servicesTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      {/* 1. HERO SECTION (배경 일체형 프리미엄 다크 히어로) */}
      <section className="hero-section" aria-label="조은샷시 유리문 및 강화도어 수리 서비스 안내">
        <div className="hero-bg-layer" aria-hidden="true">
          <Image
            src="/images/door-repair-sample.jpg"
            alt=""
            fill
            className="hero-bg-image"
            priority
          />
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
        <ServiceAreaMap activeRegion="yangsan" />
      </section>

      {/* 4. SYMPTOMS SECTION (고장 증상 자가진단) */}
      <section className="symptoms-section" aria-labelledby="symptoms-title">
        <div className="section-header">
          <span className="eyebrow">유리문 자가진단</span>
          <h2 id="symptoms-title">이런 증상이 있다면, 즉시 수리가 필요합니다</h2>
          <p>방치하면 문이 너무 빠르게 쾅 닫혀 손 끼임 사고나 유리 파손, 이탈로 이어질 수 있습니다.</p>
        </div>

        <div className="symptoms-grid">
          <article className="symptom-card">
            <span className="card-tag">위험도 상</span>
            <h3>쾅! 하고 맹렬하게 닫히는 문</h3>
            <p>플로어 힌지 내부 유압 오일이 터져 제동력을 잃은 상태입니다. 손 끼임 골절 위험이 큽니다.</p>
          </article>

          <article className="symptom-card">
            <span className="card-tag">파손 위험</span>
            <h3>바닥이나 문틀을 긁으며 뻑뻑함</h3>
            <p>하부 힌지 또는 H바 볼트가 풀려 문이 주저앉았습니다. 바닥 긁힘 및 강화유리 파손을 유발합니다.</p>
          </article>

          <article className="symptom-card">
            <span className="card-tag">보안 취약</span>
            <h3>문이 덜 닫히고 열쇠가 안 맞음</h3>
            <p>0도 센터 정렬이 틀어져 디지털도어락 잠금 데드볼트가 걸리지 않고 냉난방 손실이 큽니다.</p>
          </article>

          <article className="symptom-card">
            <span className="card-tag">이탈 위험</span>
            <h3>문이 덜컹거리며 상부가 흔들림</h3>
            <p>상부 피벗 힌지 핀(상롯트)이 헐거워져 바람이 불면 문이 프레임에서 이탈할 수 있습니다.</p>
          </article>
        </div>
      </section>

      {/* 5. SERVICES SECTION (가로 스크롤 캐러셀 UI 트랙) */}
      <section className="services-section" aria-labelledby="services-title">
        <div className="section-header-row">
          <div className="header-titles">
            <span className="eyebrow">전문 수리 솔루션</span>
            <h2 id="services-title">조은샷시 핵심 수리 서비스</h2>
            <p>원인을 정확히 파악하여 꼭 필요한 부속만 정직하고 투명하게 교체·수리합니다.</p>
          </div>
          <div className="carousel-controls">
            <span className="swipe-hint">좌우로 넘겨보기</span>
            <button
              type="button"
              className="ctrl-btn"
              onClick={() => scrollServices('left')}
              aria-label="이전 수리 서비스 보기"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="ctrl-btn"
              onClick={() => scrollServices('right')}
              aria-label="다음 수리 서비스 보기"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="services-carousel-track" ref={servicesTrackRef}>
          <article className="service-carousel-card">
            <div className="card-thumb-wrap">
              <Image
                src="/images/door-repair-sample.jpg"
                alt="플로어 힌지 교체 작업"
                width={360}
                height={160}
                className="card-thumb"
              />
              <span className="step-pill">01 · HINGE</span>
            </div>
            <div className="card-body">
              <span className="card-badge">Floor Hinge</span>
              <h3>플로어 힌지 교체 &amp; 감속 조절</h3>
              <p>기름 터져 쾅 닫히는 문, 국산 삼화 King 8300 정품으로 2단계 부드러운 감속 복원</p>
              <ul className="spec-list">
                <li><FiCheck className="spec-check" /> 쾅 닫힘 방지 2단계 감속 세팅</li>
                <li><FiCheck className="spec-check" /> 힌지 박스 부식 몰탈 용접 보강</li>
              </ul>
              <a href="tel:01093920431" className="detail-tel-link">
                <span>힌지 수리 전화 문의</span>
                <FiArrowRight />
              </a>
            </div>
          </article>

          <article className="service-carousel-card">
            <div className="card-thumb-wrap">
              <Image
                src="/images/door-repair-sample.jpg"
                alt="강화도어 H바 교체 수리"
                width={360}
                height={160}
                className="card-thumb"
              />
              <span className="step-pill">02 · H-BAR</span>
            </div>
            <div className="card-body">
              <span className="card-badge">Stainless H-Bar</span>
              <h3>강화도어 상/하부 H-Bar 수리·교체</h3>
              <p>부식되고 찌그러져 유리 이탈 위험이 있는 스텐 H바를 새 규격 자재로 부분 교체</p>
              <ul className="spec-list">
                <li><FiCheck className="spec-check" /> 손상 부위만 부분 영구 교체</li>
                <li><FiCheck className="spec-check" /> 바닥 닿임 및 처짐 영구 해결</li>
              </ul>
              <a href="tel:01093920431" className="detail-tel-link">
                <span>H바 수리 전화 문의</span>
                <FiArrowRight />
              </a>
            </div>
          </article>

          <article className="service-carousel-card">
            <div className="card-thumb-wrap">
              <Image
                src="/images/door-repair-sample.jpg"
                alt="상부 피벗 힌지 수리"
                width={360}
                height={160}
                className="card-thumb"
              />
              <span className="step-pill">03 · PIVOT</span>
            </div>
            <div className="card-body">
              <span className="card-badge">Pivot Hinge</span>
              <h3>상부 피벗 힌지(상롯트) 복원</h3>
              <p>문이 흔들리고 상부 축이 덜렁거리는 증상, 견고한 피벗 핀 교체로 이탈 원천 차단</p>
              <ul className="spec-list">
                <li><FiCheck className="spec-check" /> 상부 프레임 홀 유격 완벽 보강</li>
                <li><FiCheck className="spec-check" /> 센터 0도 정렬로 문 덜 닫힘 해결</li>
              </ul>
              <a href="tel:01093920431" className="detail-tel-link">
                <span>상부 축 수리 전화 문의</span>
                <FiArrowRight />
              </a>
            </div>
          </article>

          <article className="service-carousel-card">
            <div className="card-thumb-wrap">
              <Image
                src="/images/door-repair-sample.jpg"
                alt="강화유리문 디지털도어락 설치"
                width={360}
                height={160}
                className="card-thumb"
              />
              <span className="step-pill">04 · LOCK</span>
            </div>
            <div className="card-body">
              <span className="card-badge">Digital Lock</span>
              <h3>강화유리문 전용 디지털도어락 설치</h3>
              <p>유리 타공 없이 안전하게 장착되는 상가 매장 전용 클립형 프리미엄 번호키 시공</p>
              <ul className="spec-list">
                <li><FiCheck className="spec-check" /> 외도어 / 양도어 맞춤 브라켓 장착</li>
                <li><FiCheck className="spec-check" /> 허수 번호 보안 및 자동 잠금 지원</li>
              </ul>
              <a href="tel:01093920431" className="detail-tel-link">
                <span>도어락 설치 전화 문의</span>
                <FiArrowRight />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 6. BEFORE & AFTER (비교 점검) */}
      <section className="before-after-section" aria-label="수리 전후 비교">
        <div className="section-header">
          <span className="eyebrow">전후 비교</span>
          <h2>조은샷시 수리 후 어떻게 달라지나요?</h2>
          <p>비싼 문 전체 교체 비용 없이 수리만으로 얻는 확실한 변화를 확인하세요.</p>
        </div>

        <div className="comparison-grid">
          <article className="comparison-card is-before">
            <div className="comp-header">
              <span className="comp-tag">수리 전 고장 상태</span>
            </div>
            <h3>쾅 닫히고 바닥 긁히는 위험한 문</h3>
            <p>유압 오일이 터져 위험하게 닫히고 바닥에 끌려 손님 통행에 지장을 주며 안전사고가 우려되는 상태.</p>
            <ul className="check-points">
              <li>• 바람 불면 흉기처럼 쾅 닫혀 손 끼임 위험</li>
              <li>• 바닥을 긁어 쇠 긁는 굉음과 유리 파손 위험</li>
              <li>• 문이 덜 닫혀 열쇠가 잠기지 않고 냉난방 손실</li>
            </ul>
          </article>

          <article className="comparison-card is-after">
            <div className="comp-header">
              <span className="comp-tag">조은샷시 수리 후</span>
            </div>
            <h3>새 문처럼 부드럽고 안전한 출입문</h3>
            <p>국산 규격 정품 부속 교체와 정밀 수평 교정으로 매장 손님이 안전하고 부드럽게 이용할 수 있습니다.</p>
            <ul className="check-points">
              <li>• 2단계 정밀 감속으로 손을 놓아도 부드러운 닫힘</li>
              <li>• 바닥에서 5~7mm 일정 높이 유지, 소음 제로</li>
              <li>• 0도 완벽 밀폐로 자동 잠금 도어락 즉시 작동</li>
            </ul>
          </article>
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
      </section>


      {/* 10. FLOATING CTA BAR (모바일 하단 고정) */}
      <FloatingCtaBar telNumber="010-9392-0431" displayTel="010-9392-0431" />
    </div>
  );
}
