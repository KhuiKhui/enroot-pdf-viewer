import { CarouselItemType } from '@/constants/carouselItems';
import cn from '@/utils/cn';
import Image from 'next/image';

interface CarouselItemProps extends React.ComponentPropsWithRef<'div'> {
  value: CarouselItemType;
}
function CarouselItem({ value, className }: CarouselItemProps) {
  return (
    <div
      className={cn(
        'bg-base flex shrink-0 grow-0 basis-full flex-row gap-4 rounded-sm text-center',
        className,
      )}
    >
      <Image
        className="rounded-tl-sm rounded-bl-sm"
        src={value.src}
        alt="frame-pic"
        width={250}
        height={100}
      />
      <div className="flex flex-col items-start">
        <div className="block text-lg font-bold">{value.label}</div>
        <div>{value.desc}</div>
      </div>
    </div>
  );
}

export default CarouselItem;
