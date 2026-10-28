const buildConfig = () => {
  const name = process.env.NEXT_PUBLIC_APP_NAME || "조은샷시";
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT || "조은샷시";
  const defaultTitle = process.env.NEXT_DEFAULT_METADATA_TITLE || "조은샷시 | 부산·김해·창원 샷시·창문 수리 전문";
  const defaultDescription = process.env.NEXT_DEFAULT_METADATA_DESCRIPTION || "부산·김해·창원 전지역 아파트·빌라 샷시 수리, 창문 롤러 교체, 레일 파손 보강, 모헤어 외풍 차단, 미세방충망 당일 출장 수리 전문";
  const defaultKeywords = process.env.NEXT_DEFAULT_METADATA_KEYWORDS || "부산샷시수리,김해샷시수리,창원샷시수리,창문롤러교체,샷시레일수리,외풍차단모헤어";
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
