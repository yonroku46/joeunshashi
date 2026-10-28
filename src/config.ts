const buildConfig = () => {
  const name = process.env.NEXT_PUBLIC_APP_NAME || "조은샷시";
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT || "조은샷시";
  const defaultTitle = process.env.NEXT_DEFAULT_METADATA_TITLE || "조은샷시 | 부산·김해·창원 유리문·강화도어·상가출입문 수리 전문";
  const defaultDescription = process.env.NEXT_DEFAULT_METADATA_DESCRIPTION || "부산·김해·창원 전지역 상가·매장·사무실 유리문 수리, 강화도어 플로어 힌지 교체, H바 수리, 출입문 바닥 긁힘 및 쾅 닫힘 당일 출장 수리 전문 조은샷시";
  const defaultKeywords = process.env.NEXT_DEFAULT_METADATA_KEYWORDS || "부산유리문수리,김해유리문수리,창원유리문수리,강화도어수리,상가출입문수리,플로어힌지교체,강화유리문수리,H바교체,조은샷시";
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost"}${process.env.NEXT_PUBLIC_VIEW_PORT ? ':' + process.env.NEXT_PUBLIC_VIEW_PORT : ''}`;
  const apiRoot = process.env.NEXT_PUBLIC_API_ROOT || "/api";

  return {
    defaultLanguage: "ko",
    baseUrl,
    apiRoot,
    service: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${name}`,
        },
        description: defaultDescription,
        keywords: defaultKeywords,
      },
    },
  };
};

export const config = buildConfig();
