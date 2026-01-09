'use client';

import PDFTemplate from '../PDFTemplate/PDFTemplate';
import { PDFViewer } from '@react-pdf/renderer';
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
