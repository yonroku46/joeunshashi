import regionsData from "./regions.json";
import type { ServiceRegion, District } from "@/types/region";

export const SERVICE_REGIONS: ServiceRegion[] = regionsData.regions as ServiceRegion[];
export const COMMON_SERVICES = regionsData.commonServices;
export const SERVICE_AREA_SUMMARY = regionsData.serviceAreaSummary;

/**
 * 모든 지원 권역 slug 목록 반환 (generateStaticParams 등에서 사용)
 */
export function getAllRegionSlugs(): string[] {
  return SERVICE_REGIONS.map((r) => r.slug);
}

/**
 * slug로 권역(시/도) 데이터 조회
 */
export function getRegionBySlug(slug: string): ServiceRegion | undefined {
  return SERVICE_REGIONS.find((r) => r.slug === slug);
}

/**
 * 특정 권역 내 구/동 slug 목록 반환
 */
export function getDistrictSlugs(regionSlug: string): string[] {
  const region = getRegionBySlug(regionSlug);
  return region ? region.districts.map((d) => d.slug) : [];
}

/**
 * 권역 및 구/동 slug로 구 데이터 조회
 */
export function getDistrictBySlug(
  regionSlug: string,
  districtSlug: string
): { region: ServiceRegion; district: District } | undefined {
  const region = getRegionBySlug(regionSlug);
  if (!region) return undefined;
  const district = region.districts.find((d) => d.slug === districtSlug);
  if (!district) return undefined;
  return { region, district };
}

/**
 * 견적 폼용 드롭다운 옵션 리스트
 */
export function getRegionSelectOptions(): Array<{
  value: string;
  label: string;
  districts: Array<{ value: string; label: string }>;
}> {
  return SERVICE_REGIONS.map((r) => ({
    value: r.slug,
    label: r.name,
    districts: r.districts.map((d) => ({
      value: d.slug,
      label: d.name,
    })),
  }));
}
