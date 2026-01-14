import { SpeedInsights } from '@vercel/speed-insights/next';

import Form from '@/components/Form';
import PDFPreview from '@/components/PDFPreview';
import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col gap-6 p-8">
      <LoadingScreen />
      <div>
        <Image
          width={500}
          height={100}
          alt="title"
          src="/Create Your Memories!.svg"
        />
      </div>
      <div className="flex size-full flex-col gap-16 lg:flex-row">
        <Form />
        <PDFPreview />
      </div>
      <SpeedInsights />
    </div>
  );
}
