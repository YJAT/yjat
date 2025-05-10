"use client"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FooterPosition() {
  const pathname = usePathname();
  
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      const bodyHeight = document.body.offsetHeight;
      if (bodyHeight < window.innerHeight) {
        footer.classList.add('fixed', 'bottom-0', 'w-full');
      } else {
        footer.classList.remove('fixed', 'bottom-0', 'w-full');
      }
    }
  }, [pathname]);

  return null;
}