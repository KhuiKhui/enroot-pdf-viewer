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

function DownloadButton({
  className,
  ...base
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...base}
      className={cn(
        'rounded-md bg-black p-4 text-center text-white transition-all hover:bg-gray-700 active:bg-green-500',
        className,
      )}
    >
      <PDFDownloadLink
        document={<PDFTemplate />}
        fileName="EnROOT Memories.pdf"
        className="font-title text-title"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading...' : 'Download!'
        }
      </PDFDownloadLink>
    </button>
  );
}

export default DownloadButton;
