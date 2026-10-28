'use client';

import React from 'react';
import Link from 'next/link';
import './FloatingCtaBar.scss';

interface FloatingCtaBarProps {
  telNumber?: string;
  displayTel?: string;
}

export default function FloatingCtaBar({
  telNumber = '010-9392-0431',
  displayTel = '010-9392-0431',
}: FloatingCtaBarProps) {
  return (
    <aside className="floating-cta-bar" aria-label="빠른 전화 및 견적 상담">
      <div className="cta-container">
        <a
          href={`tel:${telNumber.replace(/[^0-9]/g, '')}`}
          className="cta-btn cta-btn-tel"
          aria-label={`전화 상담 바로걸기 ${displayTel}`}
        >
          <svg
            className="cta-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="btn-text">
            <span className="sub-text">부산·김해·창원</span>
            <span className="main-text">전화 상담하기</span>
          </div>
        </a>

        <Link href="#estimate-section" className="cta-btn cta-btn-estimate" scroll={true}>
          <svg
            className="cta-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <div className="btn-text">
            <span className="sub-text">무료 견적안내</span>
            <span className="main-text">30초 견적 신청</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
