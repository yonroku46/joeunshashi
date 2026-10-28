import React from 'react';
import Link from 'next/link';
import type { BreadcrumbItem } from '@/types/region';
import './Breadcrumb.scss';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  baseUrl?: string;
}

export default function Breadcrumb({
  items,
  className = '',
  baseUrl = 'http://localhost:3000',
}: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Schema.org BreadcrumbList 구조화 데이터
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <nav className={`ui-breadcrumb ${className}`} aria-label="현재 위치 내비게이션">
        <ol className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.url} className={`breadcrumb-item ${isLast ? 'is-current' : ''}`}>
                {isLast ? (
                  <strong aria-current="page">{item.name}</strong>
                ) : (
                  <>
                    <Link href={item.url}>{item.name}</Link>
                    <span className="separator" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
