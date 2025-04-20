import React from "react";
import { Button } from "@/components/ui/button";

// Shared color map
const variantColors = {
  destructive: "bg-[#BCC901] border-[#BCC901]",
  primary: "bg-[#092C4C] border-[#092C4C]",
  secondary: "bg-[#735FBB] border-[#735FBB]",
};

// Get card background and button border color based on variant
const buttonVariants = (variant) => {
  return variantColors[variant] || "";
};

export function SaleCard({
  image,
  title,
  discountPercent,
  variant = "primary",
  price,
  originalPrice,
}) {
  const cardBg = buttonVariants(variant);

  // Set text color based on variant
  const priceTextColor =
    variant === "primary"
      ? "text-[#01C9A7]" // primary text color
      : variant === "secondary"
      ? "text-[#FFEA00]" // secondary text color
      : "text-[#092C4C]"; // destructive text color

  // Set background color for Sale Discount div based on variant
  const discountBgColor = variant === "primary" 
    ? "bg-[#01C9A7]" // primary background color
    : variant === "secondary"
    ? "bg-[#FFEA00]" // secondary background color
    : "bg-[#092C4C]"; // destructive background color

  // Set Sale Discount text color to match the card background
  const discountTextColor = variant === "primary" 
    ? "text-[#092C4C]" // primary text color for sale
    : variant === "secondary"
    ? "text-[#092C4C]" // secondary text color for sale
    : "text-[#BCC901]"; // destructive text color for sale

  // Set default and hover colors for the button based on variant
  const buttonDefaultBgColor = variant === "primary" 
    ? "bg-[#092C4C] border-[#092C4C]" // primary button default style
    : variant === "secondary"
    ? "bg-[#735FBB] border-[#735FBB]" // secondary button default style
    : "bg-[#BCC901] border-[#BCC901]"; // destructive button default style

  const buttonHoverBgColor = variant === "primary" 
    ? "bg-white text-[#092C4C] border-[#092C4C]" // primary button hover style
    : variant === "secondary"
    ? "bg-white text-[#735FBB] border-[#735FBB]" // secondary button hover style
    : "bg-white text-[#BCC901] border-[#BCC901]"; // destructive button hover style

  return (
    <div className="w-[560px] flex gap-[41px] flex-col h-[411px]">
      <div className={`${cardBg} flex rounded-[12px] p-[29px] h-[290px]`}>
        <div className="flex flex-col gap-[11px]">
          {/* Sale Discount div with dynamic background and text color */}
          <div className={`${discountBgColor} ${discountTextColor} text-2xl font-semibold px-2 py-1 rounded-md w-fit h-[44px]`}>
            Sale {discountPercent}%
          </div>
          <span className="w-[283px]">
            <p className="text-2xl text-white font-semibold">{title}</p>
          </span>
          <p className={`text-2xl ${priceTextColor} font-semibold`}>€{price}</p>
          <p className="text-base text-white font-normal line-through">€{originalPrice}</p>
        </div>
        <div>{image}</div>
      </div>

      <div className="pl-[29px]">
        <Button
          variant="outline"
          size="sm"
          className={`${buttonDefaultBgColor} hover:${buttonHoverBgColor} text-white`} // Button default and hover styles
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
