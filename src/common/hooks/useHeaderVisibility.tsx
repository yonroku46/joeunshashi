'use client';

import { createContext, useContext, useState, useEffect, useRef, useMemo } from 'react';
import { usePathname } from 'next/navigation';

interface HeaderVisibilityContextType {
  isHeaderVisible: boolean;
  isTop: boolean;
}

const HeaderVisibilityContext = createContext<HeaderVisibilityContextType>({
  isHeaderVisible: true,
  isTop: true,
});

export function HeaderVisibilityProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState<boolean>(true);
  const thresholdRef = useRef<number>(10);

  useEffect(() => {
    setIsTop(window.scrollY < thresholdRef.current);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nextIsTop = currentScrollY < thresholdRef.current;
      setIsTop((prev) => (prev !== nextIsTop ? nextIsTop : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const value = useMemo(() => ({
    isHeaderVisible: true,
    isTop,
  }), [isTop]);

  return (
    <HeaderVisibilityContext.Provider value={value}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}

export function useHeaderVisibility() {
  return useContext(HeaderVisibilityContext);
}
