'use client';

import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { SERVICE_REGIONS } from '@/data/regions';
import Button from '@/components/ui/Button/Button';
import './QuickEstimateForm.scss';

export default function QuickEstimateForm() {
  const { enqueueSnackbar } = useSnackbar();

  const [regionSlug, setRegionSlug] = useState<string>('busan');
  const [districtSlug, setDistrictSlug] = useState<string>('haeundae');
  const [repairSymptom, setRepairSymptom] = useState<string>('문이 쾅 닫힘 / 유압 터짐 (플로어 힌지 교체)');
  const [doorCount, setDoorCount] = useState<string>('강화도어 1개 (외도어 단문)');
  const [placeType, setPlaceType] = useState<string>('상가 / 매장 1층 출입문');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const selectedRegion = SERVICE_REGIONS.find((r) => r.slug === regionSlug) || SERVICE_REGIONS[0];
  const availableDistricts = selectedRegion.districts;

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextRegion = e.target.value;
    setRegionSlug(nextRegion);
    const target = SERVICE_REGIONS.find((r) => r.slug === nextRegion);
    if (target && target.districts.length > 0) {
      setDistrictSlug(target.districts[0].slug);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 9) {
      enqueueSnackbar('상담받으실 연락처를 정확히 입력해 주세요.', { variant: 'warning' });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      enqueueSnackbar(
        `[수리 상담 접수 완료] ${selectedRegion.name} ${
          availableDistricts.find((d) => d.slug === districtSlug)?.name || ''
        } [${repairSymptom}] 무료 출장 견적 접수가 완료되었습니다. 조은샷시 담당자가 곧 연락드립니다.`,
        { variant: 'success', autoHideDuration: 6000 }
      );
      setPhone('');
      setName('');
    }, 600);
  };

  return (
    <div className="quick-estimate-card" id="estimate-section">
      <div className="card-header">
        <span className="badge">30초 간이 견적 & 당일 출장 수리</span>
        <h2>부산·김해·창원 유리문·강화도어 수리 견적 신청</h2>
        <p>비싼 전체 교체 대신 수리로 해결하세요! 증상과 사진을 남겨주시면 예상 수리 비용을 친절히 안내해 드립니다.</p>
      </div>

      <form className="estimate-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="region-select">출장 지역</label>
            <div className="select-row">
              <select
                id="region-select"
                value={regionSlug}
                onChange={handleRegionChange}
                aria-label="시·도 선택"
              >
                {SERVICE_REGIONS.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.fullName}
                  </option>
                ))}
              </select>
              <select
                id="district-select"
                value={districtSlug}
                onChange={(e) => setDistrictSlug(e.target.value)}
                aria-label="구·동 선택"
              >
                {availableDistricts.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="repair-symptom">수리 필요 증상</label>
            <select
              id="repair-symptom"
              value={repairSymptom}
              onChange={(e) => setRepairSymptom(e.target.value)}
            >
              <option value="문이 쾅 닫힘 / 유압 터짐 (플로어 힌지 교체)">문이 쾅 닫힘 / 기름 유출 (플로어 힌지 교체)</option>
              <option value="문이 바닥·문틀에 긁힘 / 안 닫힘 (수평 높이 정렬)">문이 처져 바닥·틀 긁힘 (수평 높이 정렬)</option>
              <option value="문이 덜 닫히고 제자리에 안 멈춤 (센터 정지 불량)">문이 제자리에 안 멈춤 / 열쇠 안 잠김</option>
              <option value="하부/상부 H-Bar 파손·부식 (스텐 H바 교체)">하부 스테인리스 H바 파손 / 부식 교체</option>
              <option value="상부 축 덜렁거림 (상롯트 피벗 힌지 교체)">상부 피벗 힌지(상롯트) 이탈·흔들림 수리</option>
              <option value="강화유리문 디지털도어락 / 번호키 신규 설치">강화유리문 전용 디지털도어락(번호키) 설치</option>
              <option value="기타 강화도어 / 상가 출입문 전체 점검">기타 상가 출입문 종합 점검 및 수리</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="door-count">수리 수량</label>
            <select
              id="door-count"
              value={doorCount}
              onChange={(e) => setDoorCount(e.target.value)}
            >
              <option value="강화도어 1개 (외도어 단문)">강화도어 1개 (외도어 - 단문)</option>
              <option value="강화도어 2개 (양도어 양문)">강화도어 2개 (양도어 - 양문)</option>
              <option value="매장 내외 유리문 3개 이상">매장 유리문 3개 이상</option>
              <option value="건물 전체 출입문 일괄 점검">건물 전체 출입문 일괄 수리 점검</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="place-type">설치 장소</label>
            <select
              id="place-type"
              value={placeType}
              onChange={(e) => setPlaceType(e.target.value)}
            >
              <option value="상가 / 매장 1층 출입문">상가 / 매장 1층 출입문</option>
              <option value="카페 / 식당 / 주점">카페 / 음식점 / 주점</option>
              <option value="사무실 / 빌딩 출입문">사무실 / 빌딩 출입문</option>
              <option value="학원 / 병원 / 약국">학원 / 병원 / 약국 강화도어</option>
              <option value="빌라 / 오피스텔 공동현관문">빌라 / 오피스텔 공동현관</option>
              <option value="기타 출입문">기타 출입문</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone">연락처 (필수)</label>
            <input
              type="tel"
              id="contact-phone"
              placeholder="예: 010-1234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-name">성함 또는 상호명 (선택)</label>
            <input
              type="text"
              id="contact-name"
              placeholder="예: 홍길동 (또는 OO카페/매장명)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-footer">
          <div className="security-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>상담 목적 외에는 정보를 사용하지 않으며, 안심하고 무료 견적을 받으실 수 있습니다.</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? '접수 중...' : '30초 수리 견적 상담 신청하기'}
          </Button>
        </div>
      </form>
    </div>
  );
}
