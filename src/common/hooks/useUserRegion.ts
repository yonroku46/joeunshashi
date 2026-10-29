'use client';

import { useState, useEffect, useCallback } from 'react';

export type ServiceRegionSlug = 'yangsan' | 'gimhae' | 'busan' | 'changwon';

const VALID_REGIONS: ServiceRegionSlug[] = ['yangsan', 'gimhae', 'busan', 'changwon'];
const STORAGE_KEY = 'joeun_user_region';

function matchRegionFromText(text: string): ServiceRegionSlug | null {
  const normalized = text.toLowerCase().trim();

  if (normalized.includes('busan') || normalized.includes('pusan') || normalized.includes('부산')) {
    return 'busan';
  }
  if (normalized.includes('gimhae') || normalized.includes('kimhae') || normalized.includes('김해')) {
    return 'gimhae';
  }
  if (normalized.includes('yangsan') || normalized.includes('양산')) {
    return 'yangsan';
  }
  if (
    normalized.includes('changwon') ||
    normalized.includes('masan') ||
    normalized.includes('jinhae') ||
    normalized.includes('창원') ||
    normalized.includes('마산') ||
    normalized.includes('진해')
  ) {
    return 'changwon';
  }

  return null;
}

export function useUserRegion(defaultRegion: ServiceRegionSlug = 'gimhae') {
  const [currentRegion, setCurrentRegion] = useState<ServiceRegionSlug>(defaultRegion);
  const [isDetecting, setIsDetecting] = useState<boolean>(true);

  // 사용자 수동 선택 시 상태 및 세션스토리지 동기화
  const setRegion = useCallback((region: string) => {
    if (VALID_REGIONS.includes(region as ServiceRegionSlug)) {
      const validSlug = region as ServiceRegionSlug;
      setCurrentRegion(validSlug);
      try {
        sessionStorage.setItem(STORAGE_KEY, validSlug);
      } catch {
        // sessionStorage 비활성화 환경 대비 예외 무시
      }
    }
  }, []);

  useEffect(() => {
    // 1단계: 세션스토리지에 저장된 이전 감지 또는 사용자 선택 확인
    try {
      const cached = sessionStorage.getItem(STORAGE_KEY) as ServiceRegionSlug | null;
      if (cached && VALID_REGIONS.includes(cached)) {
        setCurrentRegion(cached);
        setIsDetecting(false);
        return;
      }
    } catch {
      // ignore
    }

    // 2단계: IP 기반 경량 자동 위치 감지 (브라우저 권한 팝업 없음)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const detectLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          const targetStr = `${data.city || ''} ${data.region || ''} ${data.region_code || ''}`;
          const detected = matchRegionFromText(targetStr);

          if (detected) {
            setCurrentRegion(detected);
            try {
              sessionStorage.setItem(STORAGE_KEY, detected);
            } catch {
              // ignore
            }
            return;
          }
        }
      } catch {
        // 타임아웃 또는 네트워크 오류 시 기본값 유지
      } finally {
        clearTimeout(timeoutId);
        setIsDetecting(false);
      }
    };

    detectLocation();

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    currentRegion,
    setRegion,
    isDetecting,
  };
}
