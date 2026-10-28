import React from 'react';
import Image from 'next/image';
import { SiNaver } from 'react-icons/si';

/**
 * react-icons/si의 공식 네이버(Simple Icons) 브랜드 벡터 아이콘
 */
export { SiNaver };

interface OfficialIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 네이버 블로그 공식 정품 파비콘/심볼 에셋 (/icons/naver-blog-favicon.ico)
 */
export function NaverBlogFavicon({ size = 18, className, style }: OfficialIconProps) {
  return (
    <Image
      src="/icons/naver-blog-favicon.ico"
      alt="네이버 블로그"
      width={size}
      height={size}
      unoptimized
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
    />
  );
}
