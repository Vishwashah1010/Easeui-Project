import React, { forwardRef, useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";

const carouselVariants = cva(
  "relative w-full overflow-hidden rounded-xl border transition-all select-none",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-zinc-100 shadow-sm",
        dark: "bg-zinc-950 border-zinc-800 text-zinc-100 shadow-md",
        light: "bg-gray-50 border-gray-200 text-gray-900 shadow-sm",
        outline: "bg-transparent border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-zinc-100",
        glass: "backdrop-blur-md bg-white/40 dark:bg-zinc-900/40 border-white/20 dark:border-white/10 shadow-lg",
      },
      size: {
        sm: "max-w-md",
        md: "max-w-2xl",
        lg: "max-w-4xl",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface CarouselSlide {
  id?: string | number;
  title?: string;
  description?: string;
  image?: string;
  content?: React.ReactNode;
}

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  aspectRatio?: "video" | "square" | "wide" | "auto";
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
  onSlideChange?: (index: number) => void;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      variant,
      size,
      slides = [],
      autoPlay = false,
      interval = 4000,
      showArrows = true,
      showDots = true,
      aspectRatio = "video",
      animation = "fadeIn",
      hoverAnimation = "none",
      onSlideChange,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slideTrackRef = useRef<HTMLDivElement | null>(null);

    const totalSlides = slides.length;

    // Entrance animation
    useEffect(() => {
      if (containerRef.current && animation !== "none") {
        entranceAnimations[animation]?.(containerRef.current);
      }
    }, [animation]);

    // Autoplay timer
    useEffect(() => {
      if (!autoPlay || isHovered || totalSlides <= 1) return;

      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % totalSlides;
          onSlideChange?.(next);
          return next;
        });
      }, interval);

      return () => clearInterval(timer);
    }, [autoPlay, interval, isHovered, totalSlides, onSlideChange]);

    const goToSlide = (index: number) => {
      const targetIndex = (index + totalSlides) % totalSlides;
      setCurrentIndex(targetIndex);
      onSlideChange?.(targetIndex);
    };

    const handlePrev = (e: React.MouseEvent) => {
      e.stopPropagation();
      goToSlide(currentIndex - 1);
    };

    const handleNext = (e: React.MouseEvent) => {
      e.stopPropagation();
      goToSlide(currentIndex + 1);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (containerRef.current && hoverAnimation !== "none") {
        hoverAnimations[hoverAnimation]?.(containerRef.current);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 0.2,
        });
      }
    };

    const aspectRatioClass = {
      video: "aspect-video",
      square: "aspect-square",
      wide: "aspect-[21/9]",
      auto: "min-h-[260px]",
    }[aspectRatio];

    if (totalSlides === 0) {
      return (
        <div className="p-8 text-center text-gray-500 border rounded-xl">
          No slides provided.
        </div>
      );
    }

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(carouselVariants({ variant, size }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Slides Track */}
        <div
          ref={slideTrackRef}
          className={cn("relative w-full overflow-hidden", aspectRatioClass)}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id || index}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out flex flex-col justify-end",
                  isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                )}
              >
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.title || `Slide ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Overlay gradient for readability if image exists */}
                {slide.image && (slide.title || slide.description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                )}

                {/* Custom Content or Title/Description */}
                {slide.content ? (
                  <div className="relative z-20 w-full h-full flex items-center justify-center p-6">
                    {slide.content}
                  </div>
                ) : (
                  (slide.title || slide.description) && (
                    <div className="relative z-20 p-6 text-white space-y-1">
                      {slide.title && (
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                          {slide.title}
                        </h3>
                      )}
                      {slide.description && (
                        <p className="text-sm sm:text-base text-gray-200 line-clamp-2">
                          {slide.description}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* Previous Arrow */}
        {showArrows && totalSlides > 1 && (
          <button
            type="button"
            aria-label="Previous Slide"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all opacity-80 hover:opacity-100 hover:scale-110 focus:outline-hidden"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next Arrow */}
        {showArrows && totalSlides > 1 && (
          <button
            type="button"
            aria-label="Next Slide"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all opacity-80 hover:opacity-100 hover:scale-110 focus:outline-hidden"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Indicator Dots */}
        {showDots && totalSlides > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-xs">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to slide ${dotIndex + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(dotIndex);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  dotIndex === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
