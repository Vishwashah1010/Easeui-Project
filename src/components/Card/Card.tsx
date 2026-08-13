import React, { useEffect, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import gsap from "gsap";

const cardVariants = cva(
  "rounded-xl transition-all duration-300 cursor-pointer overflow-hidden border",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-800 border-gray-200 shadow-md hover:shadow-xl dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800",
        dark: "bg-zinc-950 text-white border-zinc-800 shadow-lg hover:shadow-2xl",
        outline: "border-gray-300 bg-transparent text-gray-800 dark:border-zinc-700 dark:text-zinc-100",
        glass: "backdrop-blur-md bg-white/40 dark:bg-zinc-900/40 text-gray-900 dark:text-zinc-100 border-white/20 dark:border-white/10 shadow-lg",
      },
      size: {
        sm: "p-4 text-sm max-w-xs",
        md: "p-6 text-base max-w-sm",
        lg: "p-8 text-lg max-w-md",
        full: "p-6 w-full",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  title?: string;
  description?: string;
  image?: string;
  ratio?: "square" | "16:9" | "4:3";
  footer?: React.ReactNode;
  animate?: boolean;
  animationType?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      asChild = false,
      title,
      description,
      children,
      className,
      variant = "light",
      image,
      ratio = "16:9",
      size = "md",
      footer,
      animate = true,
      animationType = "fadeIn",
      hoverAnimation = "none",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const cardRef = useRef<HTMLDivElement | null>(null);

    // Entrance Animation
    useEffect(() => {
      if (animate && cardRef.current && animationType !== "none") {
        entranceAnimations[animationType]?.(cardRef.current);
      }
    }, [animate, animationType]);

    // Hover Animation
    const handleMouseEnter = () => {
      const el = cardRef.current;
      if (!el || hoverAnimation === "none") return;
      hoverAnimations[hoverAnimation]?.(el);
    };

    const handleMouseLeave = () => {
      const el = cardRef.current;
      if (!el || hoverAnimation === "none") return;
      hoverAnimations.reset(el);
    };

    const handleMouseDown = () => {
      const el = cardRef.current;
      if (!el) return;
      gsap.to(el, { scale: 0.97, duration: 0.1, ease: "power1.inOut" });
    };

    const handleMouseUp = () => {
      const el = cardRef.current;
      if (!el) return;
      gsap.to(el, { scale: 1.02, duration: 0.1, ease: "back.out(2)" });
    };

    const imageRatio =
      ratio === "16:9"
        ? "aspect-video"
        : ratio === "4:3"
        ? "aspect-[4/3]"
        : "aspect-square";

    return (
      <Comp
        ref={(node) => {
          cardRef.current = node as HTMLDivElement;
          if (typeof ref === "function") ref(node as HTMLDivElement);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node as HTMLDivElement;
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={cn(cardVariants({ variant, size }), className)}
        role="article"
        tabIndex={0}
        {...props}
      >
        {image && (
          <div className={cn(imageRatio, "mb-4 overflow-hidden rounded-lg")}>
            <img
              src={image}
              alt={title || "Card image"}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {title && (
          <h3 className="font-bold text-lg mb-1.5 text-[inherit]">{title}</h3>
        )}

        {description && (
          <p className="text-sm opacity-80 mb-4 text-[inherit]">{description}</p>
        )}

        {children}

        {footer && <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10">{footer}</div>}
      </Comp>
    );
  }
);

Card.displayName = "Card";
