import cn from '@/utils/cn';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: string;
}

function Button({ text = 'Click me!', className }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-md bg-black p-4 text-white transition-all hover:bg-gray-700 active:bg-green-500',
        className,
      )}
    >
      {text}
    </button>
  );
}

export default Button;
