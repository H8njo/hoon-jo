'use client';
import React, { createContext, useEffect, useState } from 'react';
import PageAnimation from '../components/client-components/PageAnimation';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export const RedirectContext = createContext<any>({});

const RedirectContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [url, redirect] = useState<string | null>(null);

  useEffect(() => {
    if (url === null) return;
    const timeout = setTimeout(() => {
      router.push(url);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [url]);
  return (
    <>
      <PageAnimation animate={url}></PageAnimation>
      <RedirectContext.Provider value={{ redirect }}>
        {children}
      </RedirectContext.Provider>
    </>
  );
};

export default RedirectContextProvider;
