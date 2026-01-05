import Input from './Input';
import Button from '../Button';

function Form() {
  return (
    <form action="" method="post">
      <div className="flex flex-col justify-center gap-4">
        <Input
          placeholder="Display name"
          label="Enter your name! This will appear on the final photo."
        />
        <Input
          placeholder="Quote"
          label="Enter a quote you would like to have on your photo."
        />
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
