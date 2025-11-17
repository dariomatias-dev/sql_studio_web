"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const screenshots: string[] = Array.from(
  { length: 8 },
  (_, i) => `/screenshots/screenshot_${i + 1}.jpg`
);

export const ScreenshotsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [imageLoadingStates, setImageLoadingStates] = useState<boolean[]>(
    Array(screenshots.length).fill(true)
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const handleImageLoad = useCallback((index: number) => {
    setImageLoadingStates((prevStates) => {
      const newStates = [...prevStates];

      newStates[index] = false;

      return newStates;
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center py-8">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_25%]"
            >
              <div className="relative flex h-full max-h-[70vh] w-full items-center justify-center rounded-2xl border-0 bg-gray-50 p-0">
                <Image
                  src={src}
                  alt={`SQL Studio Screenshot ${index + 1}`}
                  width={540}
                  height={960}
                  onLoad={() => handleImageLoad(index)}
                  priority={index < 4}
                  className={`h-auto max-h-[70vh] w-auto rounded-2xl object-contain transition-opacity duration-300 border shadow-xl ${
                    imageLoadingStates[index] ? "opacity-0" : "opacity-100"
                  }`}
                />
                {imageLoadingStates[index] && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/60">
                    <div
                      className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-gray-300 border-t-gray-900"
                      role="status"
                    >
                      <span className="sr-only">Loading image...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="flex rounded-full border border-gray-300 bg-white p-2 text-gray-700 shadow-lg transition-colors duration-200 hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex gap-1">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className="flex h-2 w-4 items-center justify-center"
            >
              <button
                onClick={() => onDotButtonClick(index)}
                className={`h-2 cursor-pointer rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? "w-4 bg-blue-500"
                    : "w-2 bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="flex cursor-pointer rounded-full border border-gray-300 bg-white p-2 text-gray-700 shadow-lg transition-colors duration-200 hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
          aria-label="Next screenshot"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
