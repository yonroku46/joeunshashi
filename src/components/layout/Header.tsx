'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPhoneCall, FiMenu, FiX, FiCheck } from 'react-icons/fi';
import './Header.scss';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          setIsHeaderHidden(true);
        } else if (currentScrollY < lastScrollY) {
          setIsHeaderHidden(false);
        }
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      const handleResize = () => {
        if (window.innerWidth > 992) {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('resize', handleResize);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (targetId: string) => {
    closeMobileMenu();
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="top-banner-notice">
        <div className="site-width banner-inner">
          <span className="notice-badge">당일 출장</span>
          <span className="notice-text">
            동남권 전지역 상가·매장 유리문·강화도어 책임 수리
          </span>
        </div>
      </div>

      <header
        className={`app-header ${isScrolled ? 'is-scrolled' : ''} ${
          isHeaderHidden ? 'is-hidden-mobile' : ''
        }`}
      >
        <div className="header-inner">
          <Link href="/" className="brand" onClick={closeMobileMenu}>
            <div className="brand-symbol" aria-hidden="true">
              <span className="symbol-char">조</span>
              <span className="symbol-char accent">은</span>
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">조은샷시</span>
              <p className="brand-sub">부산 · 김해 · 양산 · 창원</p>
            </div>
          </Link>

          <nav className="nav-links desktop-nav" aria-label="메인 메뉴">
            <Link href="/#services-title" onClick={() => handleNavClick('services-title')}>
              수리 서비스
            </Link>
            <Link href="/#symptoms-title" onClick={() => handleNavClick('symptoms-title')}>
              고장 자가진단
            </Link>
            <Link href="/area">출장 지역</Link>
            <Link href="/#faq-section" onClick={() => handleNavClick('faq-section')}>
              자주 묻는 질문
            </Link>
          </nav>

          <div className="header-actions">
            <a
              href="tel:01093920431"
              className="header-tel-btn"
              aria-label="대표 전화 010-9392-0431 상담 연결"
            >
              <FiPhoneCall className="action-icon" aria-hidden="true" />
              <span className="tel-text">전화 문의</span>
            </a>

            <button
              type="button"
              className="mobile-hamburger"
              onClick={toggleMobileMenu}
              aria-label="모바일 메뉴 열기/닫기"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu-drawer" id="mobile-menu-panel">
            <nav className="mobile-nav" aria-label="모바일 전용 메뉴">
              <Link
                href="/#services-title"
                onClick={() => handleNavClick('services-title')}
              >
                <FiCheck className="menu-icon" />
                <span>핵심 수리 솔루션 (힌지·H바·도어락)</span>
              </Link>
              <Link
                href="/#symptoms-title"
                onClick={() => handleNavClick('symptoms-title')}
              >
                <FiCheck className="menu-icon" />
                <span>유리문 고장 증상 자가진단</span>
              </Link>
              <Link href="/area" onClick={closeMobileMenu}>
                <FiCheck className="menu-icon" />
                <span>부산 · 김해 · 양산 · 창원 출장 권역</span>
              </Link>
              <Link
                href="/#faq-section"
                onClick={() => handleNavClick('faq-section')}
              >
                <FiCheck className="menu-icon" />
                <span>자주 묻는 질문 (FAQ)</span>
              </Link>
              <div className="mobile-menu-cta">
                <a href="tel:01093920431" className="mobile-tel-btn">
                  <FiPhoneCall />
                  <span>바로 전화문의</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={closeMobileMenu}
          aria-label="메뉴 닫기"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeMobileMenu();
            }
          }}
        />
      )}
    </>
  );
}
