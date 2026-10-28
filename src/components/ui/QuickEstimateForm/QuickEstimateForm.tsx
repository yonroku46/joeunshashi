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
  const [repairSymptom, setRepairSymptom] = useState<string>('뻑뻑한 창문 / 안 열림 (롤러 교체)');
  const [windowCount, setWindowCount] = useState<string>('베란다 창문 1~2틀');
  const [buildingType, setBuildingType] = useState<string>('아파트');
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
        <h2>부산·김해·창원 샷시 수리 견적 신청</h2>
        <p>비싼 전체 교체 대신 수리로 해결하세요! 증상과 사진을 남겨주시면 예상 수리 비용을 안내해 드립니다.</p>
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
              <option value="뻑뻑한 창문 / 안 열림 (롤러 교체)">뻑뻑하고 무거운 창문 (롤러 바퀴 교체)</option>
              <option value="깨진 레일 / 바닥 긁힘 (스텐 레일 보강)">깨진 플라스틱 레일 (스텐 레일 덧방 보강)</option>
              <option value="창문 틈새 바람 / 가루 날림 (모헤어 교체)">외풍·웃바람 / 삭은 모헤어 털가루 교체</option>
              <option value="미세방충망 교체 / 찢어진 방충망">미세방충망 교체 / 찢어진 망갈이</option>
              <option value="창문 흔들림 / 태풍 이탈 위험">창문 흔들림 / 태풍 대비 이탈 방지</option>
              <option value="창문 락(잠금장치) 고장 / 안 닫힘">창문 잠금장치(크리센트·오토락) 수리</option>
              <option value="기타 창문·샷시 수리 점검">기타 창문·샷시 전체 수리 점검</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="window-count">수리 수량</label>
            <select
              id="window-count"
              value={windowCount}
              onChange={(e) => setWindowCount(e.target.value)}
            >
              <option value="베란다 창문 1~2틀">베란다 창문 1~2틀 (부분 수리)</option>
              <option value="베란다 창문 3~4틀">베란다 창문 3~4틀</option>
              <option value="방창 / 실내창문 1~2틀">방창 / 실내창문 1~2틀</option>
              <option value="집 전체 창문 모헤어/수리">집 전체 창문 모헤어 / 방충망 전체 수리</option>
              <option value="상가 / 사무실 창호 수리">상가 / 사무실 창호 수리</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="building-type">주거 형태</label>
            <select
              id="building-type"
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value)}
            >
              <option value="아파트">아파트 (구축/대단지)</option>
              <option value="빌라·다세대">빌라 / 다세대 / 연립</option>
              <option value="단독주택">단독주택 / 전원주택</option>
              <option value="상가·오피스텔">상가 / 오피스텔 / 사무실</option>
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
            <label htmlFor="contact-name">성함 또는 아파트 단지명 (선택)</label>
            <input
              type="text"
              id="contact-name"
              placeholder="예: 홍길동 (또는 OO아파트)"
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
