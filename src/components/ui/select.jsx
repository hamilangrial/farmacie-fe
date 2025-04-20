"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export const Select = React.forwardRef(
  ({ className, children, value, onChange, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          value={value}
          onChange={onChange}
          className={cn(
            "h-10 w-full appearance-none rounded-none outline-none border border-input bg-background px-3 py-2 text-sm",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
      </div>
    );
  }
);
Select.displayName = "Select";

export const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <option
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default py-1.5 pl-8 pr-2 text-sm outline-none",
          className
        )}
        {...props}
      >
        {children}
      </option>
    );
  }
);
SelectItem.displayName = "SelectItem";
