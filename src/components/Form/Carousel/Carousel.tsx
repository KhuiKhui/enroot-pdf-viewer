'use client';
import { useEffect, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselItem from './CarouselItem';
import { CarouselItemType, carouselItems } from '@/constants/carouselItems';
import CarouselArrow from './CarouselArrow';

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    console.log(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <CarouselArrow
        src="left-arrow.svg"
        onClick={() => {
          if (emblaApi) emblaApi.scrollPrev();
        }}
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselItems.map((item: CarouselItemType, _: number) => {
            return <CarouselItem value={item} key={item.src + _} />;
          })}
        </div>
      </div>
      <CarouselArrow
        src="right-arrow.svg"
        onClick={() => {
          if (emblaApi) emblaApi.scrollNext();
        }}
      />
    </div>
  );
}

export default Carousel;
