import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  label,
  icon,
  id,
  type = "text",
  placeholder,
  required,
  className,
  ...props
}) {
  return (
    <div className="grid w-full items-start gap-[15px]">
      {label && (
        <label
          htmlFor={id}
          className="text-xl font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative w-full">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground placeholder:text-[16px]",
            "selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input",
            "flex h-11 w-full min-w-0 rounded-md border bg-[#FCFCFC] shadow-xs transition-[color,box-shadow]",
            "outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            icon ? "pl-12" : "px-4",
            "py-2 font-normal text-base border-none",
            className
          )}
          
          {...props}
        />
      </div>
    </div>
  );
}

export { Input };
