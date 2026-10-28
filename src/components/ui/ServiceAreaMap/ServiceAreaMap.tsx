'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import './ServiceAreaMap.scss';

interface ServiceAreaMapProps {
  activeRegion?: string;
  onSelectRegion?: (slug: string) => void;
  className?: string;
}

interface RegionMeta {
  slug: string;
  name: string;
  fullName: string;
  title: string;
  subText: string;
  majorAreas: string[];
  features: string;
}

const REGION_INFOS: Record<string, RegionMeta> = {
  yangsan: {
    slug: 'yangsan',
    name: '양산',
    fullName: '경상남도 양산시',
    title: '물금·증산·석산·사송·웅상 전지역',
    subText: '양산부산대병원 상권 및 신도시 상가 당일 방문',
    majorAreas: ['물금읍(증산·범어)', '동면(석산·사송)', '중앙·양주(남부·중부)', '웅상(서창·덕계)'],
    features: '신축 상가 수평 정렬, 병원·약국 안전 감속 힌지, 번호키 당일 설치',
  },
  gimhae: {
    slug: 'gimhae',
    name: '김해',
    fullName: '경상남도 김해시',
    title: '내외동·삼계동·장유·율하·진영 전지역',
    subText: '김해 전지역 상가·식당·오피스 출입문 1시간 출장',
    majorAreas: ['내외동·삼계동', '장유1·2·3동(율하)', '부원동·동상동', '진영읍·주촌면'],
    features: '상가 쾅 닫힘 방지 King 8300 교체, 하부 스텐 H바 수리, 처짐 해결',
  },
  busan: {
    slug: 'busan',
    name: '부산',
    fullName: '부산광역시',
    title: '16개 구·군 전지역 상가·빌딩·매장',
    subText: '해운대·서면·광안리·사상·강서·명지 등 30분 출장',
    majorAreas: ['해운대·수영·남구', '부산진구(서면)·동래', '강서구(명지)·사상·북구', '사하·연제·중·동구'],
    features: '해풍 염분 부식 힌지 박스 몰탈 용접 보강, 대형 강화도어 긴급 수리',
  },
  changwon: {
    slug: 'changwon',
    name: '창원',
    fullName: '경상남도 창원시',
    title: '성산구·의창구·마산·진해구 전지역',
    subText: '상남동 번화가 및 마산·진해 상권 신속 순회',
    majorAreas: ['성산구(상남·중앙)', '의창구(명서·팔용)', '마산회원·합포(합성·댓거리)', '진해구(석동·용원)'],
    features: '상남동 번화가 심야·당일 긴급 수리, 관공서·빌딩 출입문 정밀 세팅',
  },
};

interface MapPathData {
  slug: string;
  name: string;
  ariaLabel: string;
  d: string;
  textX: number;
  textY: number;
}

const REGIONS_MAP_PATHS: MapPathData[] = [
  {
    slug: 'yangsan',
    name: '양산',
    ariaLabel: '경상남도 양산시 권역 선택',
    d: 'M388.8,242.8 L381.2,235.8 L365.6,227.9 L357.7,215.7 L351.8,198.6 L330.6,190.7 L307.1,169.9 L298.0,167.3 L285.2,167.8 L277.9,166.0 L271.8,161.6 L268.0,153.8 L271.3,149.5 L275.2,148.5 L273.4,139.2 L284.1,132.8 L284.7,123.8 L295.4,118.9 L304.2,122.8 L313.1,117.8 L311.8,113.7 L298.6,104.7 L297.9,101.9 L300.4,100.6 L301.1,97.0 L309.0,90.9 L322.0,89.9 L329.5,86.7 L336.3,88.5 L351.6,81.9 L352.5,72.5 L349.1,68.5 L349.8,65.0 L347.5,61.4 L351.6,56.6 L339.2,48.0 L341.9,43.1 L346.3,39.6 L360.7,41.4 L371.4,33.2 L370.6,28.8 L375.6,22.8 L388.9,23.7 L388.2,27.2 L391.7,27.9 L429.7,20.0 L430.4,24.5 L427.4,26.0 L426.4,34.5 L434.9,40.0 L456.7,46.7 L460.6,49.9 L473.4,51.5 L477.1,66.1 L483.8,70.5 L486.3,76.3 L494.1,84.3 L500.2,86.8 L506.6,96.1 L526.8,108.3 L538.4,107.8 L553.8,101.8 L559.0,108.4 L557.1,115.3 L558.7,117.5 L566.8,119.6 L574.5,129.2 L566.4,136.5 L559.5,147.3 L557.4,146.6 L552.1,150.9 L552.0,153.8 L556.4,158.1 L551.3,171.0 L544.2,173.5 L537.7,179.3 L528.2,177.1 L512.7,168.5 L496.3,167.0 L494.8,172.6 L499.2,179.4 L492.8,184.5 L491.6,196.4 L487.1,199.3 L485.0,205.0 L480.4,207.6 L477.2,220.0 L459.1,222.0 L445.0,233.7 L437.9,232.3 L433.5,228.7 L426.2,235.4 L425.4,242.2 L419.4,242.2 L415.1,246.1 L407.0,243.7 L391.6,248.4 L388.8,242.8 Z',
    textX: 420,
    textY: 130,
  },
  {
    slug: 'gimhae',
    name: '김해',
    ariaLabel: '경상남도 김해시 권역 선택',
    d: 'M267.9,337.5 L270.9,339.0 L271.1,343.3 L274.0,346.5 L269.8,348.5 L270.0,355.6 L266.2,355.3 L261.8,350.1 L262.4,342.3 L260.2,341.7 L245.2,343.6 L242.3,350.1 L237.1,349.0 L228.8,352.0 L218.0,348.0 L191.6,350.6 L183.6,348.9 L171.2,340.9 L165.2,343.0 L152.2,342.1 L155.1,326.7 L157.8,320.0 L161.7,317.7 L161.2,311.9 L155.7,308.0 L142.1,307.7 L137.7,302.9 L133.9,290.0 L136.4,286.8 L137.5,277.2 L134.9,273.8 L132.8,274.7 L125.8,257.2 L126.0,251.6 L120.1,240.5 L120.9,236.5 L115.4,229.7 L111.2,218.0 L113.1,215.6 L130.6,216.0 L126.0,211.3 L127.8,204.8 L131.5,202.2 L145.0,210.9 L150.5,209.5 L153.4,205.8 L152.8,197.1 L160.0,196.3 L160.1,189.6 L162.5,191.7 L161.8,194.3 L164.0,193.5 L170.7,183.0 L178.3,182.4 L189.3,185.3 L196.5,182.6 L202.9,175.1 L201.6,163.4 L212.4,154.8 L233.9,150.9 L257.3,141.0 L262.3,141.6 L266.2,145.3 L269.2,157.3 L275.9,164.8 L284.9,167.8 L296.5,167.1 L307.1,169.9 L330.6,190.7 L351.8,198.6 L357.7,215.7 L365.0,227.2 L383.1,237.1 L391.6,248.4 L390.2,258.7 L378.4,282.7 L362.9,288.0 L344.7,290.9 L338.5,291.6 L331.8,288.4 L313.0,298.9 L306.9,298.0 L303.2,293.1 L300.1,294.9 L300.7,292.6 L296.7,295.3 L301.3,299.8 L278.3,300.9 L266.1,311.5 L271.3,319.3 L271.1,323.4 L276.1,328.9 L274.8,337.7 L269.0,335.6 L267.9,337.5 Z',
    textX: 240,
    textY: 250,
  },
  {
    slug: 'busan',
    name: '부산',
    ariaLabel: '부산광역시 권역 선택',
    d: 'M355.3,459.0 L357.3,459.8 L356.4,463.3 L352.9,463.1 L355.3,459.0 Z M233.7,431.0 L236.5,430.0 L237.1,423.2 L239.6,423.8 L241.4,428.1 L252.5,428.6 L256.0,432.8 L244.4,436.9 L248.4,443.8 L249.3,452.8 L247.8,459.9 L242.3,462.5 L238.4,473.7 L235.6,475.0 L235.6,478.1 L240.6,483.6 L238.1,489.3 L240.3,492.0 L228.1,500.0 L230.2,494.3 L222.8,494.5 L223.2,488.7 L220.0,488.2 L220.2,485.2 L224.9,484.4 L221.1,481.5 L226.0,480.0 L227.0,477.3 L213.9,472.9 L213.4,470.3 L209.2,471.3 L207.8,468.4 L215.8,468.1 L217.3,463.9 L211.4,461.8 L210.7,459.7 L214.5,458.9 L214.6,454.0 L209.2,448.0 L201.8,446.5 L200.5,437.5 L203.0,438.8 L209.0,436.7 L206.9,431.5 L231.2,425.1 L231.1,418.5 L212.4,416.4 L220.4,416.2 L223.0,413.7 L227.4,413.4 L229.1,410.5 L232.7,413.3 L233.1,411.2 L225.8,406.0 L224.1,402.3 L225.9,399.5 L236.4,399.5 L241.2,395.0 L241.9,389.8 L237.2,387.1 L233.7,375.5 L228.1,376.4 L217.7,372.5 L206.1,363.2 L198.8,350.1 L218.0,348.0 L228.8,352.0 L237.1,349.0 L242.3,350.1 L245.2,343.6 L260.2,341.7 L262.4,342.3 L261.8,350.1 L266.2,355.3 L270.9,355.1 L269.8,348.5 L274.0,346.5 L271.1,343.3 L270.9,339.0 L267.9,337.5 L269.0,335.6 L274.8,337.7 L276.0,328.1 L271.1,323.4 L271.3,319.3 L266.1,311.5 L273.8,304.4 L280.3,300.1 L289.3,301.5 L301.3,299.8 L296.7,295.3 L300.7,292.6 L300.1,294.9 L303.2,293.1 L306.9,298.0 L313.0,298.9 L331.8,288.4 L338.5,291.6 L344.7,290.9 L362.9,288.0 L378.4,282.7 L390.2,258.7 L391.8,248.2 L407.0,243.7 L415.1,246.1 L419.4,242.2 L425.4,242.2 L426.2,235.4 L433.5,228.7 L437.9,232.3 L445.0,233.7 L459.1,222.0 L477.9,219.5 L480.4,207.6 L485.0,205.0 L487.1,199.3 L491.5,196.6 L492.8,184.6 L499.2,179.4 L494.8,172.6 L496.4,166.9 L512.7,168.5 L528.2,177.1 L537.6,179.4 L544.2,173.5 L551.3,171.0 L556.4,158.1 L551.4,152.4 L557.4,146.6 L564.6,153.2 L572.6,155.4 L584.4,152.8 L588.4,153.9 L593.7,149.2 L600.3,151.1 L602.8,147.9 L606.9,150.0 L614.5,148.5 L627.2,166.8 L630.3,167.3 L628.0,175.3 L631.5,180.0 L630.8,184.5 L627.4,188.2 L632.4,190.2 L635.6,189.3 L639.1,193.1 L645.9,194.6 L649.1,198.8 L645.5,204.8 L647.5,205.9 L644.3,208.7 L636.0,208.8 L633.2,206.8 L634.5,204.3 L629.1,201.3 L617.7,205.8 L612.5,211.4 L608.6,219.6 L611.1,227.0 L613.5,225.8 L611.1,233.1 L607.7,235.7 L610.3,241.2 L606.1,243.3 L603.6,250.2 L596.3,249.8 L594.9,256.9 L588.8,255.9 L587.0,258.0 L588.2,261.5 L591.8,262.3 L595.9,259.9 L602.8,259.9 L604.0,271.8 L599.5,274.8 L597.3,285.5 L593.7,287.5 L591.3,294.9 L582.0,294.7 L586.2,300.2 L583.5,316.8 L577.9,321.8 L578.8,325.6 L574.8,327.5 L569.9,324.9 L568.2,329.9 L566.0,328.4 L561.9,331.4 L560.4,330.1 L556.6,331.5 L551.7,347.3 L544.6,349.2 L540.3,352.9 L525.6,349.0 L517.8,350.9 L515.5,355.5 L513.3,355.6 L515.3,350.6 L511.4,351.5 L509.6,354.2 L505.2,352.7 L498.8,346.4 L501.6,351.1 L500.9,353.8 L487.2,368.0 L485.0,369.0 L479.1,369.9 L483.6,372.2 L482.1,373.9 L483.4,374.6 L486.9,371.3 L492.5,383.8 L493.3,392.7 L489.4,402.2 L482.6,401.1 L480.1,398.6 L472.4,402.4 L463.9,402.0 L463.2,394.6 L461.5,394.4 L457.6,394.9 L457.8,398.1 L446.6,398.1 L439.8,394.4 Z',
    textX: 440,
    textY: 320,
  },
  {
    slug: 'changwon',
    name: '창원',
    ariaLabel: '경상남도 창원시 권역 선택',
    d: 'M152.2,342.1 L155.1,326.7 L157.8,320.0 L161.7,317.7 L161.2,311.9 L155.7,308.0 L142.1,307.7 L137.7,302.9 L133.9,290.0 L136.4,286.8 L137.5,277.2 L134.9,273.8 L132.8,274.7 L125.8,257.2 L120.1,240.5 L115.4,229.7 L111.2,218.0 L113.1,215.6 L100.0,210.0 L85.0,230.0 L70.0,260.0 L65.0,300.0 L68.0,340.0 L75.0,370.0 L90.0,400.0 L110.0,430.0 L135.0,450.0 L160.0,460.0 L180.0,465.0 L200.5,437.5 L203.0,438.8 L209.0,436.7 L206.9,431.5 L231.2,425.1 L231.1,418.5 L212.4,416.4 L220.4,416.2 L223.0,413.7 L227.4,413.4 L229.1,410.5 L232.7,413.3 L233.1,411.2 L225.8,406.0 L224.1,402.3 L225.9,399.5 L236.4,399.5 L241.2,395.0 L241.9,389.8 L237.2,387.1 L233.7,375.5 L228.1,376.4 L217.7,372.5 L206.1,363.2 L198.8,350.1 L191.6,350.6 L183.6,348.9 L171.2,340.9 L165.2,343.0 L152.2,342.1 Z',
    textX: 135,
    textY: 360,
  },
];

export default function ServiceAreaMap({
  activeRegion: initialActiveRegion = 'yangsan',
  onSelectRegion,
  className = '',
}: ServiceAreaMapProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>(initialActiveRegion);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleSelect = (slug: string) => {
    setSelectedRegion(slug);
    if (onSelectRegion) {
      onSelectRegion(slug);
    }
  };

  const currentInfo = REGION_INFOS[selectedRegion] || REGION_INFOS.yangsan;

  // SVG 렌더링 순서: 비활성(0) -> 선택된 활성(1) -> 마우스 호버(2)
  // 마우스 호버 시 해당 영역이 항상 최상단 레이어로 올라와 active에 가려지지 않음
  const sortedMapPaths = [...REGIONS_MAP_PATHS].sort((a, b) => {
    const getOrder = (slug: string) => {
      if (slug === hoveredRegion) return 2;
      if (slug === selectedRegion) return 1;
      return 0;
    };
    return getOrder(a.slug) - getOrder(b.slug);
  });

  return (
    <div className={`service-area-map-widget ${className}`}>
      <div className="map-header">
        <div className="title-row">
          <FiMapPin className="pin-icon" aria-hidden="true" />
          <span className="badge">동남권 핵심 4대 권역</span>
        </div>
        <h3>부산 · 김해 · 양산 · 창원 당일 출장 권역</h3>
        <p>원하시는 지역을 지도나 탭에서 선택하시면 세부 출장 생활권을 확인하실 수 있습니다.</p>
      </div>

      <div className="map-layout">
        {/* SVG 지리적 인터랙티브 맵 */}
        <div className="map-graphic-box">
          <svg
            viewBox="50 0 640 520"
            className="interactive-svg-map"
            role="img"
            aria-label="조은샷시 부산 김해 양산 창원 출장 권역 지도"
          >
            {sortedMapPaths.map((item) => {
              const isActive = selectedRegion === item.slug;
              const isHovered = hoveredRegion === item.slug;

              return (
                <g
                  key={item.slug}
                  className={`region-group ${isActive ? 'is-active' : ''} ${isHovered ? 'is-hovered' : ''}`}
                  onClick={() => handleSelect(item.slug)}
                  onMouseEnter={() => setHoveredRegion(item.slug)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onFocus={() => setHoveredRegion(item.slug)}
                  onBlur={() => setHoveredRegion(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={item.ariaLabel}
                  onKeyDown={(e) => e.key === 'Enter' && handleSelect(item.slug)}
                >
                  <path d={item.d} className="region-path" />
                  <text x={item.textX} y={item.textY} className="region-text">
                    {item.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* 선택된 권역 상세 카드 */}
        <div className="map-detail-card">
          <div className="card-top-header">
            <span className="region-badge">{currentInfo.fullName}</span>
            <h4>{currentInfo.name} 전지역 당일 출장 수리</h4>
            <p className="card-sub">{currentInfo.subText}</p>
          </div>

          <div className="sub-areas-box">
            <span className="box-title">관할 주요 생활권역</span>
            <div className="area-tags-wrap">
              {currentInfo.majorAreas.map((area, idx) => (
                <span key={idx} className="area-tag">{area}</span>
              ))}
            </div>
          </div>

          <div className="features-box">
            <span className="box-title">지역 맞춤 수리 특성</span>
            <p>{currentInfo.features}</p>
          </div>

          <div className="card-footer-actions">
            <Link href={`/area/${currentInfo.slug}`} className="btn-detail-link">
              <span>{currentInfo.name} 세부 출장 지역 &amp; 동별 안내 보기</span>
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a href="tel:01093920431" className="btn-direct-tel">
              <span>{currentInfo.name} 당일 출장 전화 상담</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
