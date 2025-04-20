"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 9.90",
    image: "/path-to-image.png",
  },
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 67.90",
    image: "/path-to-image.png",
  },
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 100.90",
    image: "/path-to-image.png",
  },
  {
    title: "Intense Drainage & Toning – Discover The Power Of Osmotic Therapy!",
    subtitle: "Detox With Osmotic Therapy Wraps",
    price: "€ 677.90",
    image: "/path-to-image.png",
  },
]

export default function ProductCarousel() {
  return (
    <div className="h-[400px] w-full max-w-2xl mx-auto">
      <Carousel
        orientation="vertical"
        autoScroll
        autoScrollInterval={4000}
        className="h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-[400px]l flex items-center justify-center">
              <div className="flex flex-col md:flex-row items-center justify-between bg-green-100 rounded-xl p-6 gap-4 h-full w-full">
                {/* Text Content */}
                <div className="flex-1 space-y-4 text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{slide.title}</h2>
                  <p className="text-md font-medium text-green-900">{slide.subtitle}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold">{slide.price}</span>
                    <Button variant="secondary">Shop Now</Button>
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

        <CarouselPrevious className="top-2 left-1/2 -translate-x-1/2 rotate-90" />
        <CarouselNext className="bottom-2 left-1/2 -translate-x-1/2 -rotate-90" />
      </Carousel>
    </div>
  )
}
