// Navbar.tsx
import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const navbarVariants = cva(
  "w-full flex items-center justify-between px-6 py-3 rounded-xl border transition-all select-none",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white border-slate-800 shadow-md",
        light: "bg-white text-gray-800 border-gray-200 shadow-xs dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800",
        primary: "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20",
        glass: "backdrop-blur-md bg-white/20 dark:bg-zinc-900/30 text-gray-900 dark:text-zinc-100 border border-white/20 dark:border-white/10 shadow-lg",
        outline: "bg-transparent border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-zinc-100",
      },
      size: {
        default: "min-h-16",
        sm: "min-h-12 py-2 px-4 text-sm",
        lg: "min-h-20 py-4 px-8 text-lg",
        xl: "min-h-24 py-5 px-10 text-xl",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
);

export interface NavLinkItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
  logo?: React.ReactNode;
  links?: NavLinkItem[];
  actions?: React.ReactNode;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      logo = <span className="font-bold text-xl tracking-tight">EaseUI</span>,
      links = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Customer", href: "#" },
      ],
      actions,
      animation = "fadeIn",
      hoverAnimation = "none",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "nav";
    const navbarRef = useRef<HTMLElement | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
      if (!navbarRef.current || animation === "none") return;
      entranceAnimations[animation]?.(navbarRef.current);
    }, [animation]);

    const handleMouseEnter = () => {
      if (navbarRef.current && hoverAnimation !== "none") {
        hoverAnimations[hoverAnimation]?.(navbarRef.current);
      }
    };

    const handleMouseLeave = () => {
      if (navbarRef.current && hoverAnimation !== "none") {
        gsap.to(navbarRef.current, {
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 0.15,
        });
      }
    };

    return (
      <Comp
        ref={(node) => {
          navbarRef.current = node as HTMLElement;
          if (typeof ref === "function") ref(node as HTMLElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn(
          "relative flex-wrap md:flex-nowrap",
          navbarVariants({ variant, size }),
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children ? (
          children
        ) : (
          <>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="cursor-pointer">{logo}</div>
            </div>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-6 font-medium text-sm">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href || "#"}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className={cn(
                    "transition-colors hover:opacity-100",
                    link.active ? "opacity-100 font-semibold" : "opacity-75"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions / Profile (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {actions ? (
                actions
              ) : (
                <button
                  type="button"
                  className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xs"
                >
                  Profile
                </button>
              )}
            </div>

            {/* Mobile Drawer (Collapsible) */}
            {mobileOpen && (
              <div className="w-full md:hidden pt-4 pb-2 border-t border-black/10 dark:border-white/10 mt-3 space-y-3 flex flex-col">
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href || "#"}
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        link.onClick();
                      }
                      setMobileOpen(false);
                    }}
                    className="px-2 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-black/5 dark:border-white/5">
                  {actions ? (
                    actions
                  ) : (
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all"
                    >
                      Profile
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Navbar.displayName = "Navbar";
