'use client';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

import PDFTemplate from '../PDFTemplate/PDFTemplate';
function PDFPreview() {
  return (
    <div className="aspect-a4 bg-base relative min-h-fit min-w-fit rounded-sm lg:h-full">
      <PDFViewer className="relative z-10 size-full">
        <PDFTemplate />
      </PDFViewer>
    </div>
  );
}

export default PDFPreview;
