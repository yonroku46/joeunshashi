'use client';

import React, { AnchorHTMLAttributes, forwardRef, MouseEvent, useEffect, useState } from 'react';

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
      target,
      rel,
      children,
      ...rest
    },
    ref
  ) => {
    const rawPhone = phone.replace(/[^0-9]/g, '');
    const smsHref = href || `sms:${rawPhone}`;

    // SSR 하이드레이션 일치를 위해 초기값 false, 마운트 후 감지
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {
      setIsMounted(true);
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const detectedMobile = mobileRegex.test(navigator.userAgent);
      setIsMobile(detectedMobile);
    }, []);

    const isPc = isMounted && !isMobile;
    const finalHref = isPc ? fallbackUrl : smsHref;
    const finalTarget = isPc ? (target || '_blank') : target;
    const finalRel = isPc ? (rel || 'noopener noreferrer') : rel;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
      }
      if (e.defaultPrevented) return;

      // 즉시 감지 (마운트 시점 타이밍 이슈 대비)
      const currentIsMobile =
        typeof navigator !== 'undefined' &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      if (!currentIsMobile) {
        e.preventDefault();
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <a
        ref={ref}
        href={finalHref}
        target={finalTarget}
        rel={finalRel}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

SmsLink.displayName = 'SmsLink';

export default SmsLink;
