"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDot,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/_lib/constant/assets/images";
import { useRouter } from "next/navigation";
const slides = [
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 9.90",
    image: IMAGES.dealproduct.path,
  },
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 67.90",
    image: IMAGES.galleryImages.path,
  },
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 100.90",
    image: IMAGES.dealproduct.path,
  },
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 677.90",
    image: IMAGES.galleryImages.path,
  },
];

export default function ProductCarousel() {
  const router = useRouter();

  return (
    <div className="h-full w-full px-5">
      <Carousel
        orientation="horizontal"
        autoScroll
        autoScrollInterval={4000}
        className="h-full w-full"
      >
        {/* <CarouselPrevious /> */}
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className="flex flex-col md:flex-row items-center justify-between rounded-xl p-6 lg:p-12 gap-4 h-full w-full"
                style={{
                  backgroundImage: `url(${IMAGES.banner.path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
              >
                {/* Text Content */}
                <div className="flex-1 text-left space-y-4 md:space-y-8 py-4 md:py-12 lg:py-16">
                  <h2 className="text-2xl md:text-5xl font-bold text-[#43533D]">
                    {slide.title}
                  </h2>
                  <p className="text-md md:text-xl font-medium text-[#FFFFFF]">
                    {slide.subtitle}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-lg md:text-2xl font-bold text-[#43533D]">
                      {slide.price}
                    </span>
                    <Button
                      variant="secondary"
                      className="text-[#43533D] bg-white border-none"
                      onClick={() => {
                        console.log("Shop Now");
                        router.push("/shop");
                      }}
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <Image
                    src={slide.image}
                    alt="Product"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselDot className="bg-white z-10 left-8/12 -translate-x-1/2 " />
        <CarouselDot className="bg-white z-10 left-7/12 -translate-x-1/2 " />
        <CarouselDot className="bg-white z-10 left-6/12 -translate-x-1/2 " />
        <CarouselDot className="bg-white z-10 left-5/12 -translate-x-1/2 " /> */}

        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
