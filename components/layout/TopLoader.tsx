'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

export function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    // This is to handle the initial load, especially for pages that are not prefetched.
    const handleInitialLoad = () => {
        NProgress.start();
        NProgress.done();
    };
    
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      handleInitialLoad();
    } else {
      window.addEventListener('load', handleInitialLoad);
      // Cleanup
      return () => {
        window.removeEventListener('load', handleInitialLoad);
      };
    }
  }, []);

  // Effect to handle client-side navigation
  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();
    
    // We are monkey-patching pushState and replaceState to trigger the loading bar.
    // This is a common practice for libraries like nprogress with Next.js App Router
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      handleStart();
      originalPushState.apply(history, args);
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function(...args) {
      handleStart();
      originalReplaceState.apply(history, args);
    };

    const handlePopState = () => {
        handleStop();
    }
    
    window.addEventListener('popstate', handlePopState);

    return () => {
      // Restore original history methods
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}
