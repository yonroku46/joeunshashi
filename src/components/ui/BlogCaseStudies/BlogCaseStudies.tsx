'use client';

import React from 'react';
import Image from 'next/image';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';
import { SiNaver } from 'react-icons/si';
import { getRankedBlogPosts, OFFICIAL_BLOG_URL, type BlogPost } from '@/data/blogPosts';
import './BlogCaseStudies.scss';

interface BlogCaseStudiesProps {
  title?: string;
  subtitle?: string;
  filterRegionSlug?: string;
  filterDistrictSlug?: string;
  filterDongSlug?: string;
  locationName?: string;
  maxCount?: number;
}

export default function BlogCaseStudies({
  title,
  subtitle,
  filterRegionSlug,
  filterDistrictSlug,
  filterDongSlug,
  locationName,
  maxCount = 4,
}: BlogCaseStudiesProps) {
  // 4단계 스마트 우선순위 필터링 (동 1순위 > 구 2순위 > 시 3순위 > 최신순 Fallback 4순위)
  const displayedPosts: BlogPost[] = React.useMemo(() => {
    return getRankedBlogPosts({
      regionSlug: filterRegionSlug,
      districtSlug: filterDistrictSlug,
      dongSlug: filterDongSlug,
      maxCount,
    });
  }, [filterRegionSlug, filterDistrictSlug, filterDongSlug, maxCount]);

  const defaultTitle = locationName
    ? `${locationName} 및 인근 현장 시공 일지`
    : '조은샷시 공식 현장 시공 일지';

  const defaultSubtitle = locationName
    ? `네이버 공식 블로그에 기록된 ${locationName} 및 주요 생활권의 실제 유리문 수리·샷시 보수 작업 리포트입니다.`
    : '네이버 공식 블로그에 기록된 실제 현장 유리문 수리 및 샷시 교체 시공 리포트입니다.';

  return (
    <section className="blog-case-studies-section" aria-label={title || defaultTitle}>
      <div className="section-header">
        <div className="header-text">
          <span className="eyebrow">
            <span className="naver-n-box">
              <SiNaver size={10} />
            </span>
            조은샷시 네이버 공식 블로그
          </span>
          <h2>{title || defaultTitle}</h2>
          <p>{subtitle || defaultSubtitle}</p>
        </div>
        <a
          href={OFFICIAL_BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-header-link"
          aria-label="조은샷시 네이버 블로그 새 창 열기"
        >
          <SiNaver size={12} />
          <span>블로그 전체보기</span>
          <FiExternalLink size={14} />
        </a>
      </div>

      <div className="blog-cards-grid">
        {displayedPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            title={`${post.title} - 네이버 블로그에서 자세히 보기`}
          >
            <div className="thumb-wrap">
              <Image
                src={post.thumbnailUrl}
                alt={post.title}
                width={360}
                height={200}
                unoptimized
                referrerPolicy="no-referrer"
                className="thumb-img"
              />
              <span className="region-tag">{post.region}</span>
              <span className="category-tag">{post.category}</span>
            </div>
            <div className="card-body">
              <div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
              <div className="card-footer">
                <span className="post-date">
                  <FiCalendar size={12} style={{ marginRight: '4px' }} />
                  {post.date}
                </span>
                <span className="view-more">
                  <span>현장 리포트</span>
                  <FiExternalLink size={12} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
