'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICE_REGIONS } from '@/data/regions';
import QuickEstimateForm from '@/components/ui/QuickEstimateForm/QuickEstimateForm';
import FloatingCtaBar from '@/components/ui/FloatingCtaBar/FloatingCtaBar';
import '@/styles/pages/home.scss';

export default function HomeClient() {
  const [activeRegionTab, setActiveRegionTab] = useState<string>('busan');

  const currentRegion =
    SERVICE_REGIONS.find((r) => r.slug === activeRegionTab) || SERVICE_REGIONS[0];

  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="조은샷시 수리 서비스 안내">
        <div className="hero-inner">
          <p className="hero-region-label">부산광역시 · 김해시 · 창원시 전지역 출장 수리</p>
          <h1 className="hero-title">
            비싼 전체 교체 대신 수리로,<br />
            <span>새 창문처럼 부드럽게</span> 복원해 드립니다
          </h1>
          <p className="hero-desc">
            뻑뻑해서 안 열리는 창문, 바닥 긁힘, 깨진 레일, 삭아서 날리는 모헤어.<br className="mobile-break" />
            창틀을 뜯지 않고 규격 부속 수리로 90% 비용을 아껴드립니다.
          </p>

          <div className="hero-cta-group">
            <a href="tel:01093920431" className="hero-tel-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>전화 상담 바로걸기</span>
            </a>
            <Link href="#estimate-section" className="hero-estimate-btn">
              <span>30초 수리 견적 조회 & 방문 점검</span>
            </Link>
          </div>

          <div className="hero-checklist">
            <span className="check-item">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              교체 대비 비용 90% 절감
            </span>
            <span className="check-item">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              규격 정품 롤러 & 고강도 스텐 레일
            </span>
            <span className="check-item">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              부산·김해·창원 당일 신속 출장
            </span>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (신뢰 띠 배너) */}
      <section className="trust-strip" aria-label="조은샷시 핵심 신뢰 요소">
        <div className="trust-item">
          <div className="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div className="trust-text">
            <strong>당일 신속 출장 수리</strong>
            <span>부산·김해·창원 전지역 당일 방문 점검</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="trust-text">
            <strong>교체 비용 90% 절감</strong>
            <span>틀 뜯지 않고 부속 수리로 새 창문 복원</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="trust-text">
            <strong>정품 자재 & 품질 보증</strong>
            <span>고하중 트윈 롤러 & 스테인리스 레일</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="trust-text">
            <strong>투명한 사전 견적 안내</strong>
            <span>사진 한 장으로 예상 수리비 사전 확인</span>
          </div>
        </div>
      </section>

      {/* 3. SYMPTOMS SECTION (고장 증상 자가진단) */}
      <section className="symptoms-section" aria-labelledby="symptoms-title">
        <div className="section-header">
          <span className="eyebrow">창문 고장 자가진단</span>
          <h2 id="symptoms-title">이런 증상이 있다면, 즉시 수리가 필요합니다</h2>
          <p>방치하면 창문이 레일에서 이탈해 추락 사고로 이어질 수 있습니다.</p>
        </div>

        <div className="symptoms-grid">
          <article className="symptom-card">
            <span className="card-tag">개폐 불량</span>
            <h3>창문이 뻑뻑하고 무거울 때</h3>
            <p>창문을 열 때 두 손으로 온 힘을 줘야 열리거나, 롤러가 굳어 바닥을 긁으며 쇠 긁는 굉음이 나는 경우.</p>
          </article>

          <article className="symptom-card">
            <span className="card-tag">레일 파손</span>
            <h3>샷시 레일이 깨지고 파였을 때</h3>
            <p>플라스틱 레일이 깨져서 바퀴가 걸려 문이 덜컹거리고, 창문이 한쪽으로 기울어 틈이 벌어지는 경우.</p>
          </article>

          <article className="symptom-card">
            <span className="card-tag">외풍·가루날림</span>
            <h3>창문 틈새 찬바람 & 털가루</h3>
            <p>창문을 닫아도 웃바람이 들어오고, 삭아서 검은 털가루가 날리며 호흡기를 위협하는 모헤어 노후 상태.</p>
          </article>

          <article className="symptom-card">
            <span className="card-tag">안전 위험</span>
            <h3>창문 흔들림 & 락 잠금 불가</h3>
            <p>바람이 불면 창문이 덜덜 흔들려 이탈 위험이 있거나, 크리센트 잠금장치가 맞지 않아 문이 안 잠기는 경우.</p>
          </article>
        </div>
      </section>

      {/* 4. REGIONS SECTION (부산·김해·창원시 권역별 빠른 찾기) */}
      <section className="regions-section" id="areas-section" aria-labelledby="regions-title">
        <div className="section-header">
          <span className="eyebrow">출장 가능 생활권</span>
          <h2 id="regions-title">부산 · 김해 · 창원시 지역별 수리 안내</h2>
          <p>고객님이 계신 생활권을 선택하시면 구·동별 창호 수리 사례와 맞춤 솔루션을 확인하실 수 있습니다.</p>
        </div>

        <div className="region-tabs" role="tablist" aria-label="지역 선택">
          {SERVICE_REGIONS.map((region) => (
            <button
              key={region.slug}
              type="button"
              role="tab"
              aria-selected={activeRegionTab === region.slug}
              className={`tab-btn ${activeRegionTab === region.slug ? 'active' : ''}`}
              onClick={() => setActiveRegionTab(region.slug)}
            >
              {region.fullName}
            </button>
          ))}
        </div>

        <div className="region-detail-card">
          <div className="region-card-top">
            <h3>{currentRegion.fullName} 전 지역 당일 출장 수리</h3>
            <p>{currentRegion.metaDescription}</p>
          </div>

          <div className="districts-grid">
            {currentRegion.districts.map((district) => (
              <div key={district.slug} className="district-pill">
                <div className="district-header">
                  <strong>{district.name}</strong>
                  <span>당일 출장</span>
                </div>
                <div className="neighborhoods">
                  {district.majorNeighborhoods.slice(0, 4).join(', ')} 등
                </div>
                <ul className="issue-list">
                  {district.keyIssues.map((issue, idx) => (
                    <li key={idx}>#{issue}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION (전문 수리 서비스) */}
      <section className="services-section" aria-labelledby="services-title">
        <div className="section-header">
          <span className="eyebrow">전문 수리 분야</span>
          <h2 id="services-title">조은샷시 전문 수리 서비스</h2>
          <p>비싼 샷시 전체 교체 없이, 부속 수리와 보강만으로 새 창문처럼 부드럽게 만듭니다.</p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <span className="card-badge">당일 수리 1위</span>
            <h3>창문 롤러(바퀴) 교체 & 수평 조정</h3>
            <p>마모되고 깨진 롤러를 창호 무게와 규격에 맞는 고하중 정품 트윈 롤러로 교체하여 손가락 하나로 열리게 복원합니다.</p>
            <ul className="spec-list">
              <li>알루미늄창, 하이샷시, 시스템창호 전 규격 롤러 보유</li>
              <li>창문 처짐 및 뒤틀림 수평 완벽 조정</li>
              <li>바닥 긁힘 방지 및 개폐 소음 100% 제거</li>
            </ul>
            <Link href="/services/window-repair" className="detail-link">
              롤러 교체 수리 상세 보기 &rarr;
            </Link>
          </article>

          <article className="service-card">
            <span className="card-badge">특허형 보강 공법</span>
            <h3>깨진 샷시 레일 스테인리스 보강 수리</h3>
            <p>무거운 베란다 창문으로 인해 깨지거나 주저앉은 플라스틱 레일을 튼튼한 고강도 스텐 레일로 덧방 보강합니다.</p>
            <ul className="spec-list">
              <li>샷시 틀 전체 교체 없이 레일만 영구적으로 보강</li>
              <li>부식과 마모에 강한 고강도 스테인리스 커버 시공</li>
              <li>수리 후 덜컹거림 없는 매끄러운 주행감 회복</li>
            </ul>
            <Link href="/services/window-repair" className="detail-link">
              레일 보강 수리 상세 보기 &rarr;
            </Link>
          </article>

          <article className="service-card">
            <span className="card-badge">단열·외풍 복원</span>
            <h3>외풍·먼지 차단 모헤어(방풍털) 전면 교체</h3>
            <p>10년 이상 지나 삭아서 가루가 날리고 바람이 새는 모헤어를 창문 전체를 탈거하여 빽빽한 고밀도 모헤어로 교체합니다.</p>
            <ul className="spec-list">
              <li>겨울철 찬바람 웃바람 유입 원천 차단 (실내 2~3℃ 상승)</li>
              <li>호흡기에 해로운 삭은 미세 털가루 날림 해결</li>
              <li>외부 소음 및 미세먼지 차단 기밀성 회복</li>
            </ul>
            <Link href="/services/window-repair" className="detail-link">
              모헤어 교체 상세 보기 &rarr;
            </Link>
          </article>

          <article className="service-card">
            <span className="card-badge">날벌레 100% 차단</span>
            <h3>친환경 미세방충망 교체 & 망갈이</h3>
            <p>구멍 나고 녹슨 낡은 알루미늄 방충망을 촘촘하고 튼튼한 모노필라멘트 미세방충망으로 현장에서 바로 교체합니다.</p>
            <ul className="spec-list">
              <li>0.5mm 초미세 날벌레 완벽 차단</li>
              <li>부식 없는 소재로 10년 이상 깨끗하게 사용</li>
              <li>창문 틈새 물구멍 방충망 밴드 서비스 부착</li>
            </ul>
            <Link href="/services/screen-window" className="detail-link">
              미세방충망 상세 보기 &rarr;
            </Link>
          </article>
        </div>
      </section>

      {/* 6. BEFORE & AFTER SECTION */}
      <section className="before-after-section" aria-labelledby="comparison-title">
        <div className="section-header">
          <span className="eyebrow">확실한 수리 효과</span>
          <h2 id="comparison-title">수리 전후 비교 (Before & After)</h2>
          <p>비싼 교체 대신 1시간 수리로 새 창문처럼 회복됩니다.</p>
        </div>

        <div className="comparison-grid">
          <div className="comparison-card is-before">
            <div className="comp-header">
              <span className="comp-tag">수리 전 (고장 증상)</span>
            </div>
            <h3>롤러 마모 / 레일 파손 / 삭은 모헤어</h3>
            <p>창문이 뻑뻑해 두 손으로 밀어도 안 움직이고, 바람이 숭숭 새며 털가루가 날립니다.</p>
            <ul className="check-points">
              <li>❌ 문 열 때마다 드르륵 굉음과 바닥 긁힘</li>
              <li>❌ 창문 틈새로 들어오는 겨울철 한기 및 외풍</li>
              <li>❌ 창문이 흔들려 태풍이나 강풍 시 이탈 위험</li>
            </ul>
          </div>

          <div className="comparison-card is-after">
            <div className="comp-header">
              <span className="comp-tag">수리 후 (조은샷시 완벽 복원)</span>
            </div>
            <h3>신품 롤러 교체 + 스텐 레일 + 고밀도 모헤어</h3>
            <p>틀 교체 없이 부속 정밀 교체로 부드러운 손가락 개폐와 완벽한 외풍 차단을 회복합니다.</p>
            <ul className="check-points">
              <li>✔ 손가락 하나로 스르륵 열리는 완벽한 구동감</li>
              <li>✔ 틈새 모헤어 복원으로 찬바람·소음 원천 차단</li>
              <li>✔ 샷시 전체 교체 대비 90% 이상 비용 절감</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="process-section" aria-labelledby="process-title">
        <div className="section-header">
          <span className="eyebrow">간편한 수리 절차</span>
          <h2 id="process-title">조은샷시 당일 수리 절차</h2>
          <p>사진 한 장이면 예상 수리비 확인부터 당일 방문 수리까지 완료됩니다.</p>
        </div>

        <div className="process-grid">
          <article className="process-card">
            <span className="step-num">STEP 1</span>
            <h3>문 사진 전송 & 상담</h3>
            <p>창문 전체와 하부 레일 사진을 보내주시면 증상과 예상 수리비를 바로 안내합니다.</p>
          </article>

          <article className="process-card">
            <span className="step-num">STEP 2</span>
            <h3>당일 출장 방문</h3>
            <p>부산·김해·창원시 일정을 조율하여 수리 전용 장비와 부속을 싣고 방문합니다.</p>
          </article>

          <article className="process-card">
            <span className="step-num">STEP 3</span>
            <h3>현장 정밀 수리 (30분~1시간)</h3>
            <p>창문 탈거 후 규격 롤러 교체, 레일 보강, 모헤어 교체 작업을 현장에서 완벽 시공합니다.</p>
          </article>

          <article className="process-card">
            <span className="step-num">STEP 4</span>
            <h3>고객 확인 & 사후 보증</h3>
            <p>고객님과 함께 부드러운 개폐와 수평을 확인하고 수리 부속 보증을 제공합니다.</p>
          </article>
        </div>
      </section>

      {/* 8. ESTIMATE FORM (수리 견적 신청 폼) */}
      <div className="estimate-wrapper">
        <QuickEstimateForm />
      </div>

      {/* 9. FAQ SECTION */}
      <section className="faq-section" id="faq-section" aria-labelledby="faq-title">
        <div className="section-header">
          <span className="eyebrow">궁금증 해결</span>
          <h2 id="faq-title">자주 묻는 질문 (FAQ)</h2>
          <p>샷시 수리를 문의하시는 고객님들께서 가장 많이 물어보시는 질문입니다.</p>
        </div>

        <div className="faq-list">
          <article className="faq-item">
            <h3>비싼 전체 교체 없이 수리만으로 정말 해결이 되나요?</h3>
            <p>
              네, 대부분의 고객님께서 샷시 전체를 바꿔야 하나 고민하시지만, 실제 현장 점검 결과 80~90%는
              마모된 롤러 교체와 깨진 레일 스테인리스 보강, 삭은 모헤어 교체만으로도 새 창문처럼 부드럽고
              외풍 없는 상태로 완벽히 복원됩니다. 큰돈 들이지 마시고 먼저 수리 진단을 받아보세요!
            </p>
          </article>

          <article className="faq-item">
            <h3>수리 비용은 대략 어떻게 되나요?</h3>
            <p>
              수리 부위(롤러 교체, 레일 보강, 모헤어 교체)와 창문 크기, 수량에 따라 차이가 있습니다.
              고장 난 창문 전체와 하부 레일 사진을 찍어 보내주시면 방문 전 대략적인 예상 수리비를
              투명하게 먼저 안내해 드립니다.
            </p>
          </article>

          <article className="faq-item">
            <h3>당일 출장 수리도 가능한가요?</h3>
            <p>
              네! 조은샷시는 부산, 김해, 창원시 전 지역을 상시 순회하고 있어 일정 조율 후 빠른 당일 방문 수리가
              가능합니다. 급하게 문이 안 닫히거나 이탈 위험이 있는 경우 전화 주시면 신속히 출동합니다.
            </p>
          </article>

          <article className="faq-item">
            <h3>수리 후 A/S 및 보증은 어떻게 되나요?</h3>
            <p>
              조은샷시에서 교체한 롤러와 스테인리스 레일, 부속에 대해 확실한 품질 보증을 지원합니다.
              작업 후 문제가 생기면 책임지고 신속하게 무상 사후 점검을 진행해 드립니다.
            </p>
          </article>
        </div>
      </section>

      {/* 10. FLOATING CTA BAR (모바일 하단 고정) */}
      <FloatingCtaBar telNumber="010-9392-0431" displayTel="010-9392-0431" />
    </div>
  );
}
