import React from "react";
import style from './style.module.css';  // Make sure this path is correct
import { Button } from "@/components/ui/button";

export const DealCard = ({
  title,
  discountText,
  currentPrice,
  originalPrice,
  image,

}) => {

  return (
    <div className={`${style.cardWrapper} h-[610px] gap-4 bg-gradient-to-r from-[#8B0000] to-[#FF7F50]`}>
      {/* Left side */}
      <div className="flex flex-col pl-[57px] gap-[24px] h-[442px] width-[372px]">
        {/* Discount badge */}
        <div className={`bg-[#FFF2D7] text-[#A20002] ${style.batchWraper}`}>
            Sale {discountText}%
          </div>

        {/* Title */}
        <h2 className={`text-white text-[40px] font-[600px] `}>{title}</h2>

        {/* Pricing */}
        <div className="flex flex-col gap-[24px] text-white text-sm">
          <span className=" items-center flex gap-[24px] ">
            <span className="font-semibold text-[32px]">
            €{currentPrice}
            </span>
             <span className="text-xl font-normal">Including Tax</span>
          </span>
          <span className="line-through text-xl text-[#FFF2D7]">€{originalPrice}</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          className={`bg-[#FFF2D7] max-w-[290px] hover:bg-white text-[#650001] hover:text-[#8B0000] `}
        >
            Shop Now
        </Button>
      </div>

      {/* Right side image */}
      <div className={`pr-[96px] flex-shrink-0`}>
        {image}
      </div>
    </div>
  );
};
