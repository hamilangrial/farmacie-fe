"use client";

import React, { useState } from "react";
import Image from "next/image";
import style from "./style.module.css";
import { IMAGES } from "@/_lib/constant/assets/images";
import { ICONS } from "@/_lib/constant/assets/icons";
import { Button } from "@/components/ui/button";

const ProductImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex items-center pl-[44px] pt-[55px] gap-[58px]">
      {/* Thumbnails */}
      <div className="flex flex-col items-center gap-4 overflow-y-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={` h-[145px] w-[145px] rounded-lg overflow-hidden ${
              selectedImage?.image === img.image
                ? style.selectedImg
                : "border-transparent"
            }`}
          >
            <Image
              src={img.image}
              alt={`Thumbnail ${index}`}
              width={145}
              height={145}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="w-[656px] h-[656px] items-center justify-center flex">
        <Image
          src={selectedImage.image}
          alt="Main product"
          width={500}
          height={525}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="w-[704px] flex flex-col max-w-auto h-[463px] gap-[24px] max-h-auto">
        <div className="text-[] w-[540px] max-w-auto">
          <p className="text-[30px] font-bold">
            Somatoline Skin Expert Starter Kit Bende Drenanti Acione Riducent
            Urto
          </p>
        </div>

        <div className="flex gap-[40px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[50px]">
              <div className="flex gap-[24px]">
                <span className="text-2xl font-medium ">Brand:</span>
                <span className="text-2xl font-normal ">
                  Somatoline SkinExpert
                </span>
              </div>
              <div className="flex gap-[24px]">
                <span className="text-2xl font-medium ">Item code:</span>
                <span className="text-2xl font-normal ">038135087</span>
              </div>
            </div>
            <div className="flex flex-row gap-[50px]">
              <div className="flex flex-row items-center gap-[24px]">
                <span className="text-2xl font-medium ">Ratings:</span>
                <div className="flex gap-[10px] items-center justify-center">
                  <span className="text-2xl font-normal ">4.8</span>
                  <Image
                    src={IMAGES.star.path}
                    alt={IMAGES.star.alt}
                    width={119}
                    height={24}
                    className="rounded-xl object-contain"
                  />
                </div>
              </div>
              <div className="flex gap-[24px]">
                <span className="text-2xl font-medium ">Category:</span>
                <span className="text-2xl font-normal ">Bandages</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[393px] h-auto py-[18px] px-[12px] bg-[#01C9A7] rounded-xl">
          <div className="flex gap-[23px] flex-col">
            <div className="flex flex-row-2 gap-[9px]">
              <div className="bg-white flex justify-center rounded-[12px] items-center w-[180px] px-[9px] py-[10px]">
                <div className="flex gap-[10px] rounded-[5px]">
                  <span className="text-[#00997F]">Save:</span>
                  <span className="text-[#00997F]">-38%</span>
                </div>
              </div>
              <div className="bg-white px-[9px] rounded-[12px] flex justify-center items-center w-[180px] py-[10px]">
                <span className="text-[#00997F]">In Stock</span>
              </div>

              <div className="bg-white"></div>
            </div>
            <span className="text-white text-[40px] font-bold">10,22€</span>
            <div className="flex gap-[14px]">
              <div className="flex gap-[12] justify-between w-[95px] items-center p-[10px] bg-white rounded-full">
                <span>
                  <Image
                    src={ICONS.add.path}
                    alt={ICONS.add.alt}
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-[#00997F] font-2xl">1</span>
                <span>
                  <Image
                    src={ICONS.minus.path}
                    alt={ICONS.minus.alt}
                    width={20}
                    height={20}
                  />
                </span>
              </div>
              <Button
                variant="destructive"
                size="sm"
                className="w-[186px] bg-white text-[#01C9A7]"
                leadingIcon={
                  <Image
                    src={ICONS.shopingCart.path}
                    alt={ICONS.shopingCart.alt}
                    width={14}
                    height={14}
                    className="w-full h-auto rounded-t-xl"
                  />
                }
              >
                Add To Cart
              </Button>
              <div className="w-[57px] h-[40] flex justify-center items-center">
              <Button
                variant="destructive"
                className="bg-white"
                leadingIcon={
                  <Image
                  src={ICONS.favorite.path}
                  alt={ICONS.favorite.alt}
                  width={17}
                  height={14}
                  className="w-[57] h-full rounded-t-xl"
                />
                }
              >
              </Button>
              </div>
              {/* <div className="flex gap-[12] justify-between w-[57px] items-center px-[20px] py-[10px] bg-white rounded-[50px]">
                <Image
                  src={ICONS.favorite.path}
                  alt={ICONS.favorite.alt}
                  width={17}
                  height={14}
                  className="w-full h-auto rounded-t-xl"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
