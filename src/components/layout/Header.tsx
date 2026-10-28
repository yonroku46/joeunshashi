'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useHeaderVisibility } from '@/common/hooks/useHeaderVisibility';
import Button from '@/components/ui/Button/Button';
import './Header.scss';

export default function Header() {
  const { isHeaderVisible } = useHeaderVisibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="top-banner-notice">
        <div className="site-width banner-inner">
          <span className="notice-badge">부산·김해·창원 당일 출장</span>
          <span className="notice-text">비싼 교체 대신 수리로 해결! 뻑뻑한 창문, 깨진 레일, 외풍 모헤어 전문</span>
          <a href="tel:01093920431" className="banner-tel" aria-label="대표 전화 상담 바로연결">
            010-9392-0431
          </a>
        </div>
      </div>

      <header className={`app-header ${!isHeaderVisible ? 'hidden' : ''}`}>
        <div className="header-inner">
          <Link href="/" className="brand" onClick={closeMobileMenu}>
            <span className="brand-badge">샷시·창문 수리</span>
            <span className="brand-name">조은샷시</span>
          </Link>

          <nav className="nav-links desktop-nav" aria-label="메인 메뉴">
            <Link href="/services/window-repair">창문 롤러 교체</Link>
            <Link href="/services/window-repair">깨진 레일 보강</Link>
            <Link href="/services/window-repair">모헤어 외풍차단</Link>
            <Link href="/services/screen-window">미세방충망</Link>
            <Link href="/pricing">수리 비용 안내</Link>
            <Link href="#areas-section">출장 지역</Link>
          </nav>

          <div className="header-actions">
            <a href="tel:01093920431" className="header-tel-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <span>전화 상담</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              className="header-cta-btn"
              onClick={() => {
                const el = document.getElementById('estimate-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              수리 견적
            </Button>

            <button
              type="button"
              className="mobile-hamburger"
              onClick={toggleMobileMenu}
              aria-label="모바일 메뉴 열기/닫기"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <nav className="mobile-nav" aria-label="모바일 전용 메뉴">
              <Link href="/services/window-repair" onClick={closeMobileMenu}>
                창문 롤러(바퀴) 교체 & 수평 조정
              </Link>
              <Link href="/services/window-repair" onClick={closeMobileMenu}>
                깨진 샷시 레일 스테인리스 보강
              </Link>
              <Link href="/services/window-repair" onClick={closeMobileMenu}>
                외풍·먼지 차단 모헤어 전면 교체
              </Link>
              <Link href="/services/screen-window" onClick={closeMobileMenu}>
                친환경 미세방충망 교체 & 망갈이
              </Link>
              <Link href="/pricing" onClick={closeMobileMenu}>
                부위별 예상 수리비 안내
              </Link>
              <Link href="#areas-section" onClick={closeMobileMenu}>
                부산·김해·창원시 출장 지역
              </Link>
              <div className="mobile-menu-cta">
                <a href="tel:01093920431" className="mobile-tel-btn">
                  수리 상담 바로걸기
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
