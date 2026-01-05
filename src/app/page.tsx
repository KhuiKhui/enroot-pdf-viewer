import Form from '@/components/Form';
import PDFViewer from '@/components/PDFViewer';
export default function Home() {
  return (
    <div className="flex size-full flex-col justify-center gap-6 p-4">
      <div className="my-4 self-start text-2xl font-bold">
        Enroot PDF Viewer
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <Form />
        <PDFViewer />
      </div>
    </div>
  );
}
