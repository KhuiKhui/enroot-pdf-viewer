import cn from '@/utils/cn';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
}
function Input({ label = 'Placeholder', className, ...base }: InputProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <input
        {...base}
        className={cn(
          'bg-base border-base focus:bg-focus rounded-sm border-b-2 p-4 focus:outline-hidden',
          className,
        )}
      />
      <div className="font-text text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default Input;
