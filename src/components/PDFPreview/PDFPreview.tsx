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
    <PDFViewer className="aspect-a4 rounded-sm lg:h-full">
      <PDFTemplate />
    </PDFViewer>
  );
}

export default PDFPreview;
