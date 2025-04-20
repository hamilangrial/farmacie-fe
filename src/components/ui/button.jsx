import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Defining button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#FFFFFF] text-[#15A9E3] p-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-xl",
        destructive:
          "text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
         outline:
          "bg-[#735FBB] text-white shadow-xs hover:bg-[#FFFFFF] hover:text-[#735FBB] border border-[#735FBB] font-normal text-base",
        secondary:
          "bg-[#01C9A7] text-white shadow-xs hover:bg-secondary/80 hover:text-[#01C9A7] border border-[#01C9A7]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "py-[10px] px-[43px] has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button component
function Button({
  className,
  variant,
  size,
  asChild = false,
  leadingIcon,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        "rounded-[50px] transition-all duration-300 ease-in cursor-pointer"
      )}
      {...props}
    >
      {leadingIcon && (
        <span className="relative shrink-0 flex items-center justify-center">
          {/* Default Icon */}
          <span className="block group-hover:hidden">{leadingIcon}</span>
        
        </span>
      )}
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
