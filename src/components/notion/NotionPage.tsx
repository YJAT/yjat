'use client';

import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// 動態導入必要的組件
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
);

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);

const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
});

const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
});

type NotionPageProps = {
  recordMap: any;
};

export default function NotionPage({ recordMap }: NotionPageProps) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(darkModeMediaQuery.matches);

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  if (!recordMap) {
    return <div>載入中...</div>;
  }

  return (
    <div className='prose prose-lg max-w-none'>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={theme}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
        }}
      />
    </div>
  );
}
