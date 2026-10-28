'use client';

import React, { useState, useEffect } from 'react';
import { FiPhoneCall, FiArrowRight } from 'react-icons/fi';
import './FloatingCtaBar.scss';

interface FloatingCtaBarProps {
  telNumber?: string;
  displayTel?: string;
  scrollThreshold?: number;
}

export default function FloatingCtaBar({
  telNumber = '010-9392-0431',
  displayTel = '010-9392-0431',
  scrollThreshold = 320,
}: FloatingCtaBarProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  const rawTel = telNumber.replace(/[^0-9]/g, '');

  return (
    <aside
      className={`floating-cta-bar ${isVisible ? 'is-visible' : ''}`}
      aria-label="빠른 전화 상담 바"
      aria-hidden={!isVisible}
    >
      <div className="cta-container">
        <a
          href={`tel:${rawTel}`}
          className="cta-btn-main"
          aria-label={`전화 상담 바로 연결 ${displayTel}`}
        >
          <div className="cta-icon-box" aria-hidden="true">
            <FiPhoneCall size={18} />
          </div>
          <div className="btn-text">
            <span className="main-text">{displayTel} 전화 상담 연결</span>
            <span className="sub-text">부산 · 김해 · 양산 · 창원 당일 출장 점검</span>
          </div>
          <FiArrowRight className="cta-arrow" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
