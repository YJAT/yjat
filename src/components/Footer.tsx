'use client';

import { ReactElement, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Footer({children}: {children: ReactElement}) {

  const pathname = usePathname();
  const footerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (footerRef.current) {
      console.log(footerRef.current);
      const bodyHeight = document.body.offsetHeight;
      if (bodyHeight < window.innerHeight) {
        footerRef.current.classList.add('fixed', 'bottom-0', 'w-full');
      } else {
        footerRef.current.classList.remove('fixed', 'bottom-0', 'w-full');
      }
    }
  }, [pathname]);

  return (
    <div ref={footerRef}>
      {children}
    </div>
  );
}

