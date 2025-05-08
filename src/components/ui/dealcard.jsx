import React from "react";
import style from "./style.module.css"; // Make sure this path is correct
import { Button } from "@/components/ui/button";

export const DealCard = ({
  title,
  discountText,
  currentPrice,
  originalPrice,
  image,
}) => {
  return (
    <div
      className={`rounded-xl flex flex-col md:flex-row h-auto gap-4 bg-gradient-to-r from-[#8B0000] to-[#FF7F50] p-4`}
    >
      {/* Left side */}
      <div className="flex flex-col gap-4 sm:pl-[57px] sm:gap-[24px]">
        {/* Discount badge */}
        <div className={`bg-[#FFF2D7] text-[#A20002] ${style.batchWraper}`}>
          Sale {discountText}%
        </div>

        {/* Title */}
        <h2 className="text-white text-2xl sm:text-[40px] font-semibold">
          {title}
        </h2>

        {/* Pricing */}
        <div className="flex flex-col gap-2 sm:gap-[24px] text-white text-sm">
          <span className="flex items-center gap-2 sm:gap-[24px]">
            <span className="font-semibold text-xl sm:text-[32px]">
              €{currentPrice}
            </span>
            <span className="text-base sm:text-xl font-normal">
              Including Tax
            </span>
          </span>
          <span className="line-through text-base sm:text-xl text-[#FFF2D7]">
            €{originalPrice}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="bg-[#FFF2D7] max-w-full sm:max-w-[290px] hover:bg-white text-[#650001] hover:text-[#8B0000]"
        >
          Shop Now
        </Button>
      </div>
      {/* Right side image */}
      <div className="flex justify-center sm:pr-[96px] flex-shrink-0">
        {image}
      </div>
    </div>
  );
};
