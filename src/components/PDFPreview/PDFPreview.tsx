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
    <div className="size-full rounded-md bg-gray-300 p-4">
      <PDFViewer className="size-full">
        <PDFTemplate />
      </PDFViewer>
    </div>
  );
}

export default PDFPreview;
