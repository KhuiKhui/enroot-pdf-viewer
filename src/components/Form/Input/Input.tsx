import cn from '@/utils/cn';

//const baseInputStyles = 'border-b-2 border-gray-500 bg-purple-100 p-4 focus:border-purple-700 focus:outline-hidden';
const baseStyles = "bg-[#FFD8E4] border-b-2 border-[#FFD8E4] p-4 focus:bg-[#FFF2F6] focus:outline-hidden";
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
}
function Input({ label = 'Placeholder', className, ...base }: InputProps) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <input
        {...base}
        className={cn(
          //baseInputStyles,
          baseStyles,
          className,
        )}
      />
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default Input;
