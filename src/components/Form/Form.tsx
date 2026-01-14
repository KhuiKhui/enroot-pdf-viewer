'use client';
import Input from './Input';
import Button from '../Button';
import { useAtomValue, useSetAtom } from 'jotai';
import { formValuesAtom, frameIdAtom } from '@/store';
import Carousel from './Carousel/Carousel';
import DownloadButton from '../Button/DownloadButton';

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
      <div className="flex flex-col justify-center gap-6">
        <Input
          name="name"
          placeholder="Display name"
          label="Enter your name! This will appear on the final photo."
          maxLength={20}
        />
        <Input
          name="quote"
          placeholder="Quote"
          label="Enter a quote you would like to have on your photo."
          maxLength={30}
        />
        <div className="grid grid-cols-3 gap-4">
          <Input
            name="media1"
            type="file"
            label="Choose the first image."
            className="text-center font-bold"
          />
          <Input
            name="media2"
            type="file"
            label="Choose the second image."
            className="text-center font-bold"
          />
          <Input
            name="media3"
            type="file"
            label="Choose the third image."
            className="text-center font-bold"
          />
        </div>
        <br className="mt-1" />
        <Carousel />
        <div className="flex flex-row items-center justify-center gap-4">
          <Button
            type="submit"
            text="Refresh PDF!"
            className="mt-8 w-[70%] self-center"
          />
          <DownloadButton className="mt-8 w-[70%] self-center" />
        </div>
      </div>
    </form>
  );
}

export default Form;
