'use client';

import dynamic from 'next/dynamic';
import PDFTemplate from '../PDFTemplate';
import cn from '@/utils/cn';

const BlobProvider = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.BlobProvider),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

function LoadingScreen() {
  return (
    <BlobProvider document={<PDFTemplate />}>
      {({ blob, url, loading, error }) => {
        return (
          <div
            className={cn({
              'bg-base absolute top-0 left-0 z-30 flex size-full items-center justify-center opacity-90':
                loading,
              'absolute -z-30 hidden': !loading,
            })}
          >
            <div className="font-title text-6xl font-bold italic">
              Loading...
            </div>
          </div>
        );
      }}
    </BlobProvider>
  );
}

export default LoadingScreen;
