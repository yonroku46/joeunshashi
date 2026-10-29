'use client';

import React, { useState, useEffect } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
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
          aria-label={`전화 상담 연결 ${displayTel}`}
        >
          <FiPhoneCall className="cta-icon" size={17} aria-hidden="true" />
          <span className="tel-number">{displayTel}</span>
          <span className="tel-action">전화 연결</span>
        </a>
      </div>
    </aside>
  );
}
