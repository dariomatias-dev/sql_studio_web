"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const screenshots = Array.from(
  { length: 12 },
  (_, i) => `/screenshots/screenshot_${(i % 8) + 1}.jpg`
);

export const ScreenshotsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 md:py-12">
      <div className="z-10 w-full max-w-[1800px] perspective-[1000px]">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex touch-pan-y items-center">
            {screenshots.map((src, index) => {
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="relative min-w-0 flex-[0_0_75%] px-2 sm:flex-[0_0_50%] md:flex-[0_0_35%] lg:flex-[0_0_25%] sm:px-4"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="group relative cursor-pointer transition-all duration-500 ease-out"
                    onClick={() => scrollTo(index)}
                    style={{
                      transform: isSelected
                        ? "scale(1) translateZ(0)"
                        : "scale(0.85) translateZ(-20px)",
                      opacity: isSelected ? 1 : 0.4,
                      zIndex: isSelected ? 20 : 10,
                      filter: isSelected ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  >
                    <div className="relative overflow-hidden rounded-4xl sm:rounded-4xl border-[3px] sm:border-4 border-slate-200 bg-white shadow-xl sm:shadow-2xl transition-all duration-300">
                      <div className="relative aspect-9/21 w-full bg-slate-50">
                        <Image
                          src={src}
                          alt={`Screen ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 75vw, (max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
                          priority={Math.abs(index - selectedIndex) < 4}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-50" />
                      </div>
                    </div>

                    <div
                      className={`absolute -bottom-6 sm:-bottom-10 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-[100%] bg-slate-400/30 blur-lg sm:blur-xl transition-all duration-500 ${
                        isSelected
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="z-20 mt-6 md:mt-10 flex max-w-[95vw] items-center gap-3 sm:gap-6 rounded-full border border-slate-200 bg-white/80 px-4 py-2 sm:px-6 sm:py-2.5 shadow-lg backdrop-blur-md">
        <button
          onClick={scrollPrev}
          className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
          {screenshots.map((_, i) => (
            <button
              key={i}
              className="relative flex h-3 w-3 cursor-pointer items-center justify-center"
              onClick={() => scrollTo(i)}
            >
              <div
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "w-4 sm:w-6 bg-slate-800"
                    : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900 active:scale-95"
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};
