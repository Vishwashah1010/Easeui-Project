import React, { forwardRef, useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const tooltipVariants = cva(
  "absolute z-50 px-2.5 py-1.5 text-xs font-medium rounded-md shadow-md pointer-events-none whitespace-nowrap transition-opacity",
  {
    variants: {
      variant: {
        dark: "bg-zinc-900 text-zinc-100 border border-zinc-700",
        light: "bg-white text-zinc-900 border border-zinc-200 shadow-lg",
        primary: "bg-blue-600 text-white shadow-blue-500/20",
        outline: "bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 backdrop-blur-xs",
      },
      placement: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      variant: "dark",
      placement: "top",
    },
  }
);

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  delay?: number;
  showArrow?: boolean;
  animation?: "fadeIn" | "scaleIn" | "slide" | "bounce";
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      variant = "dark",
      placement = "top",
      delay = 150,
      showArrow = true,
      animation = "scaleIn",
      className,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showTooltip = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsVisible(false);
    };

    useEffect(() => {
      if (isVisible && tooltipRef.current) {
        if (animation === "fadeIn") {
          gsap.fromTo(tooltipRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
        } else if (animation === "scaleIn") {
          gsap.fromTo(
            tooltipRef.current,
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.5)" }
          );
        } else if (animation === "bounce") {
          gsap.fromTo(
            tooltipRef.current,
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "bounce.out" }
          );
        } else if (animation === "slide") {
          const yOffset = placement === "top" ? 6 : placement === "bottom" ? -6 : 0;
          const xOffset = placement === "left" ? 6 : placement === "right" ? -6 : 0;
          gsap.fromTo(
            tooltipRef.current,
            { opacity: 0, x: xOffset, y: yOffset },
            { opacity: 1, x: 0, y: 0, duration: 0.2, ease: "power2.out" }
          );
        }
      }
    }, [isVisible, animation, placement]);

    const arrowClasses = {
      top: "top-full left-1/2 -translate-x-1/2 border-t-current border-x-transparent border-b-transparent border-t-4 border-x-4 border-b-0",
      bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-current border-x-transparent border-t-transparent border-b-4 border-x-4 border-t-0",
      left: "left-full top-1/2 -translate-y-1/2 border-l-current border-y-transparent border-r-transparent border-l-4 border-y-4 border-r-0",
      right: "right-full top-1/2 -translate-y-1/2 border-r-current border-y-transparent border-l-transparent border-r-4 border-y-4 border-l-0",
    }[placement || "top"];

    return (
      <div
        ref={ref}
        className="relative inline-flex"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        {children}

        {isVisible && content && (
          <div
            ref={tooltipRef}
            role="tooltip"
            className={cn(tooltipVariants({ variant, placement }), className)}
          >
            {content}
            {showArrow && (
              <span
                className={cn(
                  "absolute w-0 h-0 text-zinc-900 dark:text-zinc-900",
                  variant === "light" && "text-white",
                  variant === "primary" && "text-blue-600",
                  arrowClasses
                )}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
