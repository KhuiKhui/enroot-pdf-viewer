'use client';
import cn from '@/utils/cn';
import PDFTemplate from '@/components/PDFTemplate';

import dynamic from 'next/dynamic';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

interface DownloadButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: string;
}

function DownloadButton({ className, ...base }: DownloadButtonProps) {
  return (
    <button
      {...base}
      className={cn(
        'max-w-fit rounded-md bg-black p-4 text-center text-white transition-all hover:bg-gray-700 active:bg-green-500',
        className,
      )}
    >
      <PDFDownloadLink
        document={<PDFTemplate />}
        fileName="EnROOT Memories.pdf"
        className="font-title text-title"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF!'
        }
      </PDFDownloadLink>
    </button>
  );
}

export default DownloadButton;
