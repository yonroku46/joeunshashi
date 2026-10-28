'use client';

import React from 'react';
import Image from 'next/image';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';
import { SiNaver } from 'react-icons/si';
import { BLOG_POSTS, OFFICIAL_BLOG_URL, type BlogPost } from '@/data/blogPosts';
import './BlogCaseStudies.scss';

interface BlogCaseStudiesProps {
  title?: string;
  subtitle?: string;
  filterRegionSlug?: string;
  maxCount?: number;
}

export default function BlogCaseStudies({
  title = '조은샷시 공식 현장 시공 일지',
  subtitle = '네이버 공식 블로그에 기록된 실제 현장 유리문 수리 및 샷시 교체 시공 리포트입니다.',
  filterRegionSlug,
  maxCount = 4,
}: BlogCaseStudiesProps) {
  // 특정 지역 페이지일 경우 해당 지역 포스트 우선 정렬
  const displayedPosts: BlogPost[] = React.useMemo(() => {
    if (!filterRegionSlug) {
      return BLOG_POSTS.slice(0, maxCount);
    }
    const matched = BLOG_POSTS.filter((post) => post.regionSlug === filterRegionSlug);
    const others = BLOG_POSTS.filter((post) => post.regionSlug !== filterRegionSlug);
    return [...matched, ...others].slice(0, maxCount);
  }, [filterRegionSlug, maxCount]);

  return (
    <section className="blog-case-studies-section" aria-label={title}>
      <div className="section-header">
        <div className="header-text">
          <span className="eyebrow">
            <span className="naver-n-box">
              <SiNaver size={10} />
            </span>
            조은샷시 네이버 공식 블로그
          </span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
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
