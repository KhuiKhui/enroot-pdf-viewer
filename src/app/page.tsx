import { SpeedInsights } from '@vercel/speed-insights/next';

import Form from '@/components/Form';
import PDFPreview from '@/components/PDFPreview';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col gap-6 p-8">
      <div>
        <Image
          width={500}
          height={100}
          alt="title"
          src="/Create Your Memories!.svg"
        />
      </div>
      <div className="grid size-full grid-cols-1 gap-16 md:grid-cols-2">
        <Form />
        <PDFPreview />
      </div>
      <SpeedInsights />
    </div>
  );
}
