'use client';

import React, { AnchorHTMLAttributes, forwardRef, MouseEvent, useState } from 'react';
import PhotoConsultDialog from '@/components/dialog/PhotoConsultDialog';

const KAKAO_OPEN_CHAT_URL = 'https://open.kakao.com/o/st9et7Ai';

export interface SmsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  phone?: string;
  fallbackUrl?: string;
}

export const SmsLink = forwardRef<HTMLAnchorElement, SmsLinkProps>(
  (
    {
      phone = '010-9392-0431',
      fallbackUrl = KAKAO_OPEN_CHAT_URL,
      href,
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const rawPhone = phone.replace(/[^0-9]/g, '');
    const actualHref = href || `sms:${rawPhone}`;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
      }
      if (e.defaultPrevented) return;

      const isMobile =
        typeof navigator !== 'undefined' &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // PC(데스크톱) 환경일 때: 다이얼로그 팝업 표출
      if (!isMobile) {
        e.preventDefault();
        setIsDialogOpen(true);
      }
    };

    return (
      <>
        <a ref={ref} href={actualHref} onClick={handleClick} {...rest}>
          {children}
        </a>

        {isDialogOpen && (
          <PhotoConsultDialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            phone={phone}
            kakaoUrl={fallbackUrl}
          />
        )}
      </>
    );
  }
);

SmsLink.displayName = 'SmsLink';

export default SmsLink;
