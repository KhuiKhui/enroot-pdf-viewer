'use client';
import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Frame from './Frame';
import { frames, FrameType } from '@/constants/frames';
import CarouselArrow from './CarouselArrow';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { EmblaCarouselType } from 'embla-carousel';

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlide, getCurrentSlide] = useState(0);

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    getCurrentSlide(emblaApi.selectedScrollSnap());
  }, []);
  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <CarouselArrow
        icon={faAngleLeft}
        src="left-arrow.svg"
        onClick={currentSlide == 0 ? () => {} : onPrevButtonClick}
        disabled={currentSlide == 0}
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="grid auto-cols-[100%] grid-flow-col">
          {frames.map((item: FrameType, _: number) => {
            return <Frame value={item} key={item.src + _} />;
          })}
        </div>
      </div>
      <CarouselArrow
        icon={faAngleRight}
        src="right-arrow.svg"
        onClick={
          currentSlide == frames.length - 1 ? () => {} : onNextButtonClick
        }
        disabled={currentSlide == frames.length - 1}
      />
    </div>
  );
}

export default Carousel;
