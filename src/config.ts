const buildConfig = () => {
  const name = process.env.NEXT_PUBLIC_APP_NAME || "조은샷시";
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT || "조은샷시";
  const defaultTitle = process.env.NEXT_DEFAULT_METADATA_TITLE || "부산·김해·창원 유리문·강화도어 수리 | 당일 힌지교체·출입문 보수 | 조은샷시";
  const defaultDescription = process.env.NEXT_DEFAULT_METADATA_DESCRIPTION || "부산·김해·창원·양산 전 지역 상가·매장 유리문·강화도어 수리 전문. 문 쾅 닫힘, 바닥 쓸림, 힌지 기름 유출 당일 신속 출장. 사진 전송 시 5분 내 견적 안내! 📞 010-9392-0431";
  const defaultKeywords = process.env.NEXT_DEFAULT_METADATA_KEYWORDS || "부산유리문수리,김해유리문수리,창원유리문수리,양산유리문수리,강화도어수리,플로어힌지교체,상가출입문수리,유리문쾅닫힘,유리문바닥쓸림,H바교체,조은샷시";
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost"}${process.env.NEXT_PUBLIC_VIEW_PORT ? ':' + process.env.NEXT_PUBLIC_VIEW_PORT : ''}`;
  const apiRoot = process.env.NEXT_PUBLIC_API_ROOT || "/api";
  const naverSiteVerification = process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "a2518e46edf05cd04dbb958d325d285b50067f1a";

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
        naverSiteVerification,
      },
    },
  };
};

export const config = buildConfig();
