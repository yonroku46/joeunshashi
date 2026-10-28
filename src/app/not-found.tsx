import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import '@/styles/pages/not-found.scss';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <span className="error-code">404</span>
      <h1 className="error-title">요청하신 페이지를 찾을 수 없습니다</h1>
      <p className="error-desc">
        페이지의 주소가 변경되었거나 삭제되어 현재 찾을 수 없습니다.
        조은샷시 메인 화면으로 이동하시면 다양한 시공 사례와 안내를 확인하실 수 있습니다.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg">
          홈으로 이동하기
        </Button>
      </Link>
    </div>
  );
}
