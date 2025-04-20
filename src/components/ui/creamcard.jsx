import React from "react";
import style from './style.module.css';  // Make sure this path is correct
import { Button } from "@/components/ui/button";

export const CreamCard = ({
  title,
  discountText,
  currentPrice,
  originalPrice,
  image,
  variant
}) => {

  return (
    <div className={`${style.cardWrapper} gap-4 h-[300px] ${variant === "primary"? style.primary : style.secondary }`}>
      <div className="flex flex-col pl-[40px] gap-[12px] h-[189px] width-[404px]">
        <div className="flex items-center gap-[20px]">
        <div className={`py-[5px] px-[18px] text-2xl rounded-[50px] font-semibold ${variant === "primary" ? style.primarybatchWrapper : style.secondarybatchWrapper}`}>
            Sale {discountText}%
          </div>
          <span className="line-through text-xl text-white">€{originalPrice}</span>
          </div>
        <span className={`text-white text-[28px] w-[372px] font-semibold`}>{title}</span>

        <div className="flex flex-row items-center gap-[24px] text-white text-sm">
          
            <h2 className={`${variant === "primary"? style.primaryprice : style.secondaryprice} font-semibold text-2xl`}>
            €{currentPrice}
            </h2>
          <span className="text-base font-normal">Including Tax</span>
          <Button
          variant="outline"
          size="sm"
          className={`${variant === "primary"? style.primarybutton : style.secondarybutton} `}
        >
            Shop Now
        </Button>
        </div>

       
      </div>

      {/* Right side image */}
      <div className={`pr-[50px] pt-[25px] flex-shrink-0`}>
        {image}
      </div>
    </div>
  );
};
