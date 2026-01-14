'use client';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Frame from './Frame';
import { frames, FrameType } from '@/constants/frames';
import CarouselArrow from './CarouselArrow';

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <CarouselArrow src="left-arrow.svg" onClick={onPrevButtonClick} />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="grid auto-cols-[100%] grid-flow-col">
          {frames.map((item: FrameType, _: number) => {
            return <Frame value={item} key={item.src + _} />;
          })}
        </div>
      </div>
      <CarouselArrow src="right-arrow.svg" onClick={onNextButtonClick} />
    </div>
  );
}

export default Carousel;
