import { SpeedInsights } from '@vercel/speed-insights/next';

import Form from '@/components/Form';
import PDFPreview from '@/components/PDFPreview';
export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col gap-6 p-4">
      <div className="my-4 self-start text-2xl font-bold">
        Enroot PDF Viewer
      </div>
      <div className="grid size-full grid-cols-1 gap-16 md:grid-cols-2">
        <Form />
        <PDFPreview />
      </div>
      <SpeedInsights />
    </div>
  );
}
