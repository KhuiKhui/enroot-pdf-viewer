import cn from '@/utils/cn';
import Image from 'next/image';
import { ComponentPropsWithRef } from 'react';

interface CarouselArrowProps extends ComponentPropsWithRef<'div'> {
  src: string;
}

function CarouselArrow({ src, className, ...base }: CarouselArrowProps) {
  return (
    <div
      className={cn(
        'bg-base flex items-center justify-center rounded-full p-4 transition-all hover:bg-red-400',
        className,
      )}
      {...base}
    >
      <Image width={0} height={0} alt="arrow" src={src} className="w-16" />
    </div>
  );
}

export default CarouselArrow;
