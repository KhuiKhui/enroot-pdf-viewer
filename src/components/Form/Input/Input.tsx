import cn from '@/utils/cn';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
}
function Input({
  label = 'Placeholder',
  maxLength,
  className,
  ...base
}: InputProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <input
        {...base}
        maxLength={maxLength}
        className={cn(
          'bg-base border-base focus:bg-focus rounded-sm border-b-2 p-4 focus:outline-hidden',
          className,
        )}
      />
      <div className="font-text flex flex-row items-center justify-between text-sm text-gray-500">
        <div>{label}</div>
        {maxLength && <div>Max {maxLength} characters.</div>}
      </div>
    </div>
  );
}

export default Input;
