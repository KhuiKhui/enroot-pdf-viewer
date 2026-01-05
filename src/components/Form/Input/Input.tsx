import cn from '@/utils/cn';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
}

function Input({ label = 'Placeholder', className, ...base }: InputProps) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <input
        {...base}
        className={cn(
          'border-b-2 border-gray-500 bg-purple-100 p-4 focus:border-purple-700 focus:outline-hidden',
          className,
        )}
      />
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default Input;
