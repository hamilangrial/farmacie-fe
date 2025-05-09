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
    <div className="flex flex-col lg:flex-row items-center gap-6">
      {/* Thumbnails */}
      <div className="flex flex-row lg:flex-col items-center gap-4 overflow-x-auto lg:overflow-y-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`h-16 w-16 md:h-24 md:w-24 md:h-[100px] md:w-[145px] rounded-lg overflow-hidden ${
              selectedImage?.image === img.image
                ? style.selectedImg
                : "border-transparent"
            }`}
          >
            <Image
              src={img.image}
              alt={`Thumbnail ${index}`}
              width={145}
              height={100}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="w-full md:w-[656px] h-auto flex items-center justify-center">
        <Image
          src={selectedImage.image}
          alt="Main product"
          width={500}
          height={525}
          className="rounded-xl object-contain"
        />
      </div>

      <div className="w-full flex flex-col max-w-full h-auto gap-6 md:gap-8 lg:ml-8">
        <div className="text-left">
          <p className="text-2xl md:text-3xl font-bold">
            Somatoline Skin Expert Starter Kit Bende Drenanti Acione Riducent
            Urto
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div className="flex gap-4 items-center">
                <span className="text-lg md:text-2xl font-medium">Brand:</span>
                <span className="text-lg md:text-xl font-normal">
                  Somatoline SkinExpert
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-lg md:text-2xl font-medium">
                  Item code:
                </span>
                <span className="text-lg md:text-xl font-normal">
                  038135087
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div className="flex items-center gap-4">
                <span className="text-lg md:text-2xl font-medium">
                  Ratings:
                </span>
                <div className="flex gap-2 items-center justify-center">
                  <span className="text-lg md:text-xl font-normal">4.8</span>
                  <Image
                    src={IMAGES.star.path}
                    alt={IMAGES.star.alt}
                    width={119}
                    height={24}
                    className="rounded-xl object-contain"
                  />
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-lg md:text-2xl font-medium">
                  Category:
                </span>
                <span className="text-lg md:text-xl font-normal">Bandages</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[393px] h-auto py-4 px-3 bg-[#01C9A7] rounded-xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <div className="bg-white flex justify-center rounded-lg items-center w-full md:w-[180px] px-3 py-2">
                <div className="flex gap-2 rounded-md">
                  <span className="text-[#00997F]">Save:</span>
                  <span className="text-[#00997F]">-38%</span>
                </div>
              </div>
              <div className="bg-white px-3 rounded-lg flex justify-center items-center w-full md:w-[180px] py-2">
                <span className="text-[#00997F]">In Stock</span>
              </div>
            </div>
            <span className="text-white text-3xl md:text-4xl font-bold">
              10,22€
            </span>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex gap-3 justify-between w-full md:w-[95px] items-center p-2 bg-white rounded-full">
                <span>
                  <Image
                    src={ICONS.add.path}
                    alt={ICONS.add.alt}
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-[#00997F] text-lg md:text-2xl">1</span>
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
                className="w-full md:w-[186px] bg-white text-[#01C9A7]"
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
              <div className="w-full md:w-[57px] h-auto flex justify-center items-center">
                <Button
                  variant="destructive"
                  className="bg-white"
                  leadingIcon={
                    <Image
                      src={ICONS.favorite.path}
                      alt={ICONS.favorite.alt}
                      width={17}
                      height={14}
                      className="w-full h-auto rounded-t-xl"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
