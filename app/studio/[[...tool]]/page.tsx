'use client';
import dynamic from 'next/dynamic';

const Studio = dynamic(() => import('../../../sanity/Studio'), { ssr: false });

export default function Page() {
  return <Studio />;
}
