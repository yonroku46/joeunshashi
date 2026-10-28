import React from 'react';
import Link from 'next/link';
import { SiNaver } from 'react-icons/si';
import { OFFICIAL_BLOG_URL } from '@/data/blogPosts';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="company-info">
            <span className="brand-title">조은샷시</span>
            <p className="service-desc">
              부산광역시 · 김해시 · 양산시 · 창원시 상가·매장·사무실·빌라 유리문 수리, 강화도어 플로어 힌지 교체, H바 수리, 출입문 바닥 긁힘·쾅 닫힘 당일 출장 수리 전문
            </p>
            <a
              href={OFFICIAL_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-blog-btn"
              title="조은샷시 네이버 공식 블로그 새 창 열기"
            >
              <span className="naver-icon-box">
                <SiNaver size={12} />
              </span>
              <span>네이버 공식 블로그 시공 일지 ↗</span>
            </a>
          </div>

          <div className="footer-nav-groups">
            <div className="nav-group">
              <span className="group-title">전문 수리 서비스</span>
              <Link href="/#services-title">플로어 힌지(유압) 교체</Link>
              <Link href="/#services-title">강화도어 H-Bar(스텐) 수리</Link>
              <Link href="/#services-title">상부 피벗 힌지 &amp; 힌지 박스 복원</Link>
              <Link href="/#services-title">강화유리문 디지털도어락 설치</Link>
            </div>
            <div className="nav-group">
              <span className="group-title">출장 가능 지역</span>
              <Link href="/area">출장 지역 전체보기</Link>
              <Link href="/area/busan">부산광역시 전지역</Link>
              <Link href="/area/yangsan">양산시 전지역</Link>
              <Link href="/area/gimhae">김해시 전지역</Link>
              <Link href="/area/changwon">창원시 전지역</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} 조은샷시. All rights reserved.
          </p>
          <div className="footer-links">
            <a href={OFFICIAL_BLOG_URL} target="_blank" rel="noopener noreferrer">
              <SiNaver size={11} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#03c75a' }} />
              <span>네이버 공식 블로그</span>
            </a>
            <a href="tel:01093920431">전화 상담 바로걸기</a>
            <Link href="/#faq-section">자주 묻는 질문</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
