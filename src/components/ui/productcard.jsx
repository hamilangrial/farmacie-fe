"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ICONS } from "@/_lib/constant/assets/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export function ProductCard({
  image,
  title,
  price,
  onClick,
  id,
  isWishlist = false,
  onWishlistToggle,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (typeof onWishlistToggle === "function") {
      onWishlistToggle(id, !isWishlist);
    }
  };

  return (
    <Card
      className="w-[331px] h-[448px] gap-[25px] flex flex-col justify-between cursor-pointer"
      onClick={() => router.push(`/shop/${id}`)}
    >
      <CardContent className="p-0">{image}</CardContent>

      <div className="pl-[11px] flex flex-col gap-[5px] justify-between h-full">
        <span className="text-sm text-[#15A9E3]">SOP/OTC</span>

        <CardHeader className="p-0">
          <CardTitle className="text-xl w-[202px] leading-snug line-clamp-2 overflow-hidden">
            {title}
          </CardTitle>
        </CardHeader>

        <CardFooter className="p-0 pr-4 gap-[5px] justify-start items-center flex-col mt-auto">
          <div className="w-full flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[#184363]">{price}</span>
            <button
              onClick={handleWishlistToggle}
              className="text-sm font-medium text-[#184363] hover:text-[#26C0AB] transition-colors"
            >
              {isWishlist ? (
                <BsHeartFill className="text-[#26C0AB] text-xl" />
              ) : (
                <BsHeart className="text-xl text-[#26C0AB] hover:text-gray-400 transition-colors" />
              )}
            </button>
          </div>

          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            leadingIcon={
              <Image
                src={isHovered ? ICONS.shopingCart.path : ICONS.cart.path}
                alt={isHovered ? ICONS.shopingCart.alt : ICONS.cart.alt}
                width={14}
                height={14}
                className="w-full h-auto rounded-t-xl transition-opacity duration-300"
              />
            }
          >
            Add To Cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
