import React, { forwardRef, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";

// ========================
// 1. Container Component
// ========================
const containerVariants = cva("w-full mx-auto px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

// ========================
// 2. Grid Component
// ========================
const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
      12: "grid-cols-12",
    },
    gap: {
      none: "gap-0",
      sm: "gap-2 sm:gap-3",
      md: "gap-4 sm:gap-6",
      lg: "gap-6 sm:gap-8",
      xl: "gap-8 sm:gap-12",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "md",
    align: "stretch",
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, align, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridVariants({ cols, gap, align }), className)}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

// ========================
// 3. Stack Component
// ========================
const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "col",
    gap: "md",
    align: "stretch",
    justify: "start",
    wrap: false,
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, wrap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(stackVariants({ direction, gap, align, justify, wrap }), className)}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

// ========================
// 4. Section / Layout Component
// ========================
const sectionVariants = cva("w-full transition-colors", {
  variants: {
    variant: {
      default: "bg-transparent text-inherit",
      card: "bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xs",
      muted: "bg-gray-50 dark:bg-zinc-900/50 border-y border-gray-200 dark:border-zinc-800",
      dark: "bg-zinc-950 text-zinc-100 border-y border-zinc-800",
      primary: "bg-blue-600 text-white",
    },
    padding: {
      none: "py-0 px-0",
      sm: "py-6 px-4 sm:px-6",
      md: "py-12 px-4 sm:px-6 lg:px-8",
      lg: "py-16 px-4 sm:px-6 lg:px-8",
      xl: "py-24 px-4 sm:px-6 lg:px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant,
      padding,
      animation = "none",
      hoverAnimation = "none",
      children,
      ...props
    },
    ref
  ) => {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (sectionRef.current && animation !== "none") {
        entranceAnimations[animation]?.(sectionRef.current);
      }
    }, [animation]);

    const handleMouseEnter = () => {
      if (sectionRef.current && hoverAnimation !== "none") {
        hoverAnimations[hoverAnimation]?.(sectionRef.current);
      }
    };

    const handleMouseLeave = () => {
      if (sectionRef.current && hoverAnimation !== "none") {
        gsap.to(sectionRef.current, { scale: 1, rotation: 0, y: 0, duration: 0.2 });
      }
    };

    return (
      <section
        ref={(node) => {
          sectionRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn(sectionVariants({ variant, padding }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export const Layout = Section;
