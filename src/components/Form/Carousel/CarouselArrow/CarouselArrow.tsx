import cn from '@/utils/cn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ComponentPropsWithRef } from 'react';

interface CarouselArrowProps extends ComponentPropsWithRef<'div'> {
  disabled: boolean;
  src: string;
  icon: IconDefinition;
}

function CarouselArrow({
  disabled,
  icon,
  className,
  ...base
}: CarouselArrowProps) {
  return (
    <div
      className={cn(
        {
          'bg-base transition-all hover:scale-105 hover:bg-red-400': !disabled,
          'bg-gray-400': disabled,
        },
        'flex items-center justify-center rounded-full p-2 md:p-4',
        className,
      )}
      {...base}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default CarouselArrow;
