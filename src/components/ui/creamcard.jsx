import React from "react";
import style from "./style.module.css"; // Make sure this path is correct
import { Button } from "@/components/ui/button";

export const CreamCard = ({
  title,
  discountText,
  currentPrice,
  originalPrice,
  image,
  variant,
}) => {
  return (
    <div
      className={`${
        style.cardWrapper
      } flex flex-col md:flex-row gap-4 p-4 h-auto ${
        variant === "primary" ? style.primary : style.secondary
      }`}
    >
      <div className="flex flex-col gap-4 sm:pl-[40px] sm:gap-[12px] sm:h-[189px] sm:w-[404px]">
        <div className="flex items-center gap-2 sm:gap-[20px]">
          <div
            className={`py-1 px-4 text-lg sm:text-2xl rounded-full font-semibold ${
              variant === "primary"
                ? style.primarybatchWrapper
                : style.secondarybatchWrapper
            }`}
          >
            Sale {discountText}%
          </div>
          <span className="line-through text-base sm:text-xl text-white">
            €{originalPrice}
          </span>
        </div>
        <span className="text-white text-lg sm:text-[28px] font-semibold">
          {title}
        </span>

        <div className="flex md:flex-row flex-col items-start md:items-center gap-2 sm:gap-[24px] text-white text-sm">
          <h2
            className={`${
              variant === "primary" ? style.primaryprice : style.secondaryprice
            } font-semibold text-xl sm:text-2xl`}
          >
            €{currentPrice}
          </h2>
          <span className="text-sm sm:text-base font-normal">
            Including Tax
          </span>
          <Button
            variant="outline"
            size="sm"
            className={`${
              variant === "primary"
                ? style.primarybutton
                : style.secondarybutton
            }`}
          >
            Shop Now
          </Button>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex justify-center sm:pr-[50px] pt-[25px] flex-shrink-0">
        {image}
      </div>
    </div>
  );
};
