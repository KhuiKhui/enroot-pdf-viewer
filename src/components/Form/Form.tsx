'use client';
import Input from './Input';
import Button from '../Button';
import { useAtomValue, useSetAtom } from 'jotai';
import { formValuesAtom, frameIdAtom } from '@/store';
import Carousel from './Carousel/Carousel';
import DownloadButton from '../Button/DownloadButton';
import { document } from 'pdfkit/js/page';
import TextArea from './TextArea';

function Form() {
  const setFormValues = useSetAtom(formValuesAtom);
  const frameId = useAtomValue(frameIdAtom);
  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData);

        const formValuesObject = Object(formValues); // turn formValues into a workable object
        formValuesObject.frameId = frameId;

        console.log(formValuesObject);
        setFormValues(formValuesObject);
      }}
    >
      <div className="flex size-fit flex-col justify-center gap-4">
        <Input
          name="name"
          placeholder="Display name"
          label="Enter your name! This will appear on the final photo."
          maxLength={20}
        />
        <TextArea
          name="quote"
          placeholder="Quote"
          label="Enter a quote you would like to have on your photo."
          maxLength={250}
          className="resize-none"
        />
        <div className="grid grid-cols-3 gap-4">
          <Input
            name="media1"
            type="file"
            label="Choose the first image."
            className="text-center font-bold"
            accept=".jpg, .jpeg, .png"
          />
          <Input
            name="media2"
            type="file"
            label="Choose the second image."
            className="text-center font-bold"
            accept=".jpg, .jpeg, .png"
          />
          <Input
            name="media3"
            type="file"
            label="Choose the third image."
            className="text-center font-bold"
            accept=".jpg, .jpeg, .png"
          />
        </div>
        <Carousel />
        <div className="mt-8 flex size-full flex-row items-center justify-center gap-4">
          <Button
            type="submit"
            text="Refresh!"
            className="w-[50%] md:w-[60%]"
          />
          <DownloadButton className="w-[50%] md:max-w-fit" />
        </div>
      </div>
    </form>
  );
}

export default Form;
