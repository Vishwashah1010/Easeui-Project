import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useEffect, useRef } from "react";
import { cn } from "@/libs/utils";
import { X } from "lucide-react";
import gsap from "gsap";

const modalVariants = cva(
  "relative flex flex-col z-50 transition-all duration-300 rounded-2xl shadow-2xl overflow-hidden",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-900 border border-gray-200 shadow-2xl",
        dark: "bg-zinc-900 text-zinc-100 border border-zinc-700 shadow-2xl",
        outline: "bg-white/90 dark:bg-zinc-900/90 text-gray-900 dark:text-zinc-100 border border-gray-300 dark:border-zinc-700 backdrop-blur-md",
        glass: "backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 text-gray-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 shadow-2xl",
      },
      size: {
        sm: "w-[90%] max-w-sm p-5",
        md: "w-[90%] max-w-md p-6",
        lg: "w-[90%] max-w-lg p-8",
        xl: "w-[90%] max-w-2xl p-8",
        full: "w-[95%] max-w-5xl p-8 max-h-[90vh]",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  asChild?: boolean;
  isOpen?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  onDone?: () => void;
  doneText?: string;
  closeText?: string;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      asChild = false,
      title,
      description,
      children,
      className,
      isOpen = false,
      onClose,
      onDone,
      doneText = "Done",
      closeText = "Close",
      showCloseButton = true,
      footer,
      variant = "light",
      size = "md",
      ...props
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);

    // Close on Escape key press
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isOpen && onClose) {
          onClose();
        }
      };

      if (isOpen) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, onClose]);

    // Entrance scale animation
    useEffect(() => {
      if (isOpen && dialogRef.current) {
        gsap.fromTo(
          dialogRef.current,
          { scale: 0.9, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
      }
    }, [isOpen]);

    if (!isOpen) return null;
    const Comp = asChild ? Slot : "div";

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop Overlay */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
          onClick={onClose}
        />

        {/* Modal Card */}
        <Comp
          ref={(node) => {
            dialogRef.current = node as HTMLDivElement;
            if (typeof ref === "function") ref(node as HTMLDivElement);
            else if (ref)
              (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          role="dialog"
          aria-modal="true"
          className={cn(modalVariants({ variant, size }), className)}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          {...props}
        >
          {/* Close X Button */}
          {showCloseButton && onClose && (
            <button
              type="button"
              aria-label="Close Modal"
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition-all focus:outline-hidden"
            >
              <X size={18} />
            </button>
          )}

          {/* Header */}
          {(title || description) && (
            <div className="mb-4 pr-6">
              {title && (
                <h3 className="text-xl font-bold tracking-tight text-[inherit]">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm opacity-75 mt-1 text-[inherit]">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Body */}
          <div className="flex-1 overflow-y-auto">{children}</div>

          {/* Footer */}
          {footer ? (
            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex justify-end gap-3">
              {footer}
            </div>
          ) : (
            (onClose || onDone) && (
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex justify-end gap-3">
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-zinc-700 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {closeText}
                  </button>
                )}
                {onDone && (
                  <button
                    type="button"
                    onClick={onDone}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
                  >
                    {doneText}
                  </button>
                )}
              </div>
            )
          )}
        </Comp>
      </div>
    );
  }
);

Modal.displayName = "Modal";
