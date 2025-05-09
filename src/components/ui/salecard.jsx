import React from "react";
import { Button } from "@/components/ui/button";

const variantColors = {
  destructive: "bg-[#BCC901] border-[#BCC901]",
  primary: "bg-[#092C4C] border-[#092C4C]",
  secondary: "bg-[#735FBB] border-[#735FBB]",
};

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

  const priceTextColor =
    variant === "primary"
      ? "text-[#01C9A7]"
      : variant === "secondary"
      ? "text-[#FFEA00]"
      : "text-[#092C4C]";

  const discountBgColor =
    variant === "primary"
      ? "bg-[#01C9A7]"
      : variant === "secondary"
      ? "bg-[#FFEA00]"
      : "bg-[#092C4C]";

  const discountTextColor =
    variant === "primary"
      ? "text-[#092C4C]"
      : variant === "secondary"
      ? "text-[#092C4C]"
      : "text-[#BCC901]";

  const buttonDefaultBgColor =
    variant === "primary"
      ? "bg-[#092C4C] border-[#092C4C]"
      : variant === "secondary"
      ? "bg-[#735FBB] border-[#735FBB]"
      : "bg-[#BCC901] border-[#BCC901]";

  const buttonHoverBgColor =
    variant === "primary"
      ? "bg-white text-[#092C4C] border-[#092C4C]"
      : variant === "secondary"
      ? "bg-white text-[#735FBB] border-[#735FBB]"
      : "bg-white text-[#BCC901] border-[#BCC901]";

  return (
    <div className="relative w-full flex flex-col justify-between h-full min-h-[360px] xl:min-h-[311px] 2xl:min-h-[420px] rounded-t-[12px] overflow-visible group">
      {/* Card Body */}
      <div
        className={`${cardBg} flex flex-col-reverse lg:flex-row justify-between items-center gap-4 p-4 md:p-6 xl:p-8 rounded-t-[12px] h-full`}
      >
        {/* Text Content */}
        <div className="flex flex-col gap-2 w-full lg:w-1/2 items-start self-start">
          <div
            className={`${discountBgColor} ${discountTextColor} text-sm sm:text-base font-semibold px-2 py-1 rounded-md w-fit`}
          >
            Sale {discountPercent}%
          </div>

          <p className="text-lg xl:text-2xl font-semibold text-white leading-snug">
            {title}
          </p>
          <p className={`text-base xl:text-xl ${priceTextColor} font-semibold`}>
            €{price}
          </p>
          <p className="text-sm text-white line-through">€{originalPrice}</p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-end relative z-10">
          <div className="relative w-full h-full flex justify-center items-end lg:absolute lg:top-30 xl:top-60 lg:left-0 2xl:top-70">
            <div className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[260px] xl:w-[280px] 2xl:w-[300px] h-auto -mt-4">
              {image}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-3 px-4 lg:px-8">
        <Button
          variant="outline"
          size="sm"
          className={`${buttonDefaultBgColor} hover:${buttonHoverBgColor} text-white w-full sm:w-auto`}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
