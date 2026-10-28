'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhoneCall, FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap/ServiceAreaMap';
import FloatingCtaBar from '@/components/ui/FloatingCtaBar/FloatingCtaBar';
import { SERVICE_REGIONS, ALL_DONGS } from '@/data/regions';
import '@/styles/pages/area.scss';

export default function AreaIndexClient() {
  const breadcrumbItems = [
    { name: '홈', url: '/' },
    { name: '출장 지역 안내', url: '/area' },
  ];

  return (
    <div className="area-container">
      {/* 1. BREADCRUMB & HERO SECTION (배경 일체형 프리미엄 다크 히어로) */}
      <section className="location-hero" aria-label="출장 가능 지역 전체 안내">
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

        <div className="location-hero-inner">
          <div className="hero-top-breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="hero-content">
            <span className="hero-eyebrow">부산 · 김해 · 양산 · 창원 전지역 당일 출장</span>
            <h1 className="hero-title">
              조은샷시 출장 가능 지역 안내<br />
              <span>상가 유리문·강화도어 수리 전문</span>
            </h1>
            <p className="hero-desc">
              부산광역시, 경상남도 김해시, 경상남도 양산시, 경상남도 창원시 전 지역 상가, 매장, 카페, 식당, 학원, 사무실 출입문 수리를 당일 신속 출장 방문합니다.
              고객님이 계신 생활권을 선택하시면 구·동별 맞춤 수리 안내와 예상 비용을 확인하실 수 있습니다.
            </p>

            <div className="hero-cta-group">
              <a href="tel:01093920431" className="btn-tel" aria-label="출장 상담 바로걸기">
                <FiPhoneCall className="btn-icon" />
                <span>010-9392-0431 전화 상담</span>
              </a>
              <a href="sms:01093920431" className="btn-sms" aria-label="문자로 고장 사진 전송하기">
                <FiMessageSquare className="btn-icon" />
                <span>문자로 사진 전송</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT (1200px 중앙 정렬 컨테이너) */}
      <div className="area-content-body">
        {/* 4대 권역 인터랙티브 지도 위젯 */}
        <section className="area-map-container" aria-label="출장 권역 지도 안내">
          <ServiceAreaMap activeRegion="yangsan" />
        </section>

        {SERVICE_REGIONS.map((region) => (
          <section key={region.slug} className="nearby-section" aria-label={`${region.fullName} 출장 지역`}>
            <div className="nearby-header">
              <p className="eyebrow">{region.fullName}</p>
              <h2>{region.name} 전지역 상가·매장 유리문 수리</h2>
              <p>{region.metaDescription}</p>
            </div>

            <div className="nearby-links-grid">
              {region.districts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/area/${region.slug}/${d.slug}`}
                  className="nearby-dong-link"
                >
                  <span>{d.fullName} 문수리</span>
                  <FiArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="dongs-sub-block">
              <h3 className="sub-block-title">
                {region.name} 주요 읍·면·동 바로가기
              </h3>
              <div className="nearby-links-grid">
                {ALL_DONGS.filter((dong) => dong.regionSlug === region.slug).map((dong) => (
                  <Link
                    key={dong.slug}
                    href={`/area/${dong.regionSlug}/${dong.districtSlug}/${dong.slug}`}
                    className="nearby-dong-link"
                  >
                    <span>{dong.districtName} {dong.name}</span>
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <FloatingCtaBar telNumber="010-9392-0431" displayTel="010-9392-0431" />
    </div>
  );
}
