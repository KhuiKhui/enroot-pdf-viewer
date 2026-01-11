'use client';
import Input from './Input';
import Button from '../Button';
import { useSetAtom } from 'jotai';
import { formValuesAtom } from '@/store';
import Carousel from './Carousel/Carousel';

function Form() {
  const setFormValues = useSetAtom(formValuesAtom);
  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData);

        setFormValues(Object(formValues));
      }}
    >
      <div className="flex flex-col justify-center gap-4">
        <Input
          name="name"
          placeholder="Display name"
          label="Enter your name! This will appear on the final photo."
        />
        <Input
          name="quote"
          placeholder="Quote"
          label="Enter a quote you would like to have on your photo."
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
        <Carousel />
        <Button
          type="submit"
          text="Generate PDF!"
          className="mt-8 w-[70%] self-center"
        />
      </div>
    </form>
  );
}

export default Form;
