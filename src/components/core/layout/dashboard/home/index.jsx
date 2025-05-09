import React from "react";
import Carousel from "./carousel";
import SectionHeader from "./sectionheader";
import { MedicienCard } from "@/components/ui";
import { ProductCard } from "@/components/ui/productcard";
import Image from "next/image";
import { IMAGES } from "@/_lib/constant/assets/images";
import { SaleCard } from "@/components/ui/salecard";
import { DealCard } from "@/components/ui/dealcard";
import { CreamCard } from "@/components/ui/creamcard";
import {
  BeautyProduct,
  Essential_Over,
  ExclucsiveDeals,
  TopSelling,
} from "@/_lib/dumyData";
import DiscountBanner from "@/components/ui/discountbanner";
import CategoryBadges from "@/components/ui/categorybadge";

const DashBoard = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel />
      <CategoryBadges />
      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <SectionHeader
          className="gap-[24px]"
          title="Essential Over-the-Counter Medications"
          subtitle="Find reliable, over-the-counter solutions for common health needs, from pain relief to allergy care"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {Essential_Over?.slice(0, 3)?.map((item, index) => (
            <div key={item.id + index} className="flex justify-center">
              <MedicienCard
                key={index}
                image={
                  <Image
                    src={IMAGES.medicien.path}
                    alt={IMAGES.medicien.alt}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-t-xl"
                  />
                }
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <SectionHeader
          className="gap-[24px]"
          title="Top-Selling Products You'll Love"
          subtitle="Explore our most popular items, trusted by customers for quality and results"
          viewMore="View all products"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
          {TopSelling?.slice(0, 10)?.map((item, index) => (
            <div key={item.id + index} className="flex justify-center">
              <ProductCard
                key={item.id}
                image={
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={293}
                    height={229}
                    className="rounded-t-xl w-full h-auto"
                  />
                }
                title={item.title}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <SectionHeader
          className="gap-[24px]"
          title="Exclusive Sale Products"
          subtitle="Save big on our top-quality items with special discounts for a limited time"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ExclucsiveDeals?.map((product) => (
            <SaleCard
              key={product.id}
              variant={product.variant}
              image={
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={293}
                  height={229}
                  className="rounded-t-xl"
                />
              }
              title={product.title}
              discountPercent={product.discountPercent}
              price={product.price}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <SectionHeader
          className="gap-[24px]"
          title="Featured Products"
          subtitle="Discover our curated selection of recommended products for your wellness and beauty needs"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
          {TopSelling?.slice(0, 10)?.map((item, index) => (
            <div key={item.id + index} className="flex justify-center">
              <ProductCard
                key={item.id}
                image={
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={293}
                    height={229}
                    className="rounded-t-xl w-full h-auto"
                  />
                }
                title={item.title}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <SectionHeader
          className="gap-[24px]"
          title="Exclusive Deals & Perks"
          subtitle="Enjoy exclusive benefits and rewards on our premium selections"
        />
        <div className="w-full flex flex-col xl:flex-row gap-4">
          <div className="w-full xl:w-1/2 flex flex-col gap-4">
            <DealCard
              title="Stronger and Thicker Hair With Black Garlic Oil."
              discountText="30"
              currentPrice="14.04"
              originalPrice="20.82"
              image={
                <img
                  src={IMAGES.dealproduct.path}
                  alt={IMAGES.dealproduct.alt}
                  width={325}
                  height={540}
                />
              }
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-4">
            <CreamCard
              title="Dental Care Toothpaste for Vivid and Bright Smiles."
              discountText="30"
              currentPrice="14.04"
              originalPrice="20.82"
              variant="primary"
              image={
                <img
                  src={IMAGES.cream.path}
                  alt={IMAGES.cream.alt}
                  width={202}
                  height={270}
                />
              }
            />
            <CreamCard
              title="Activated Charcoal Toothpaste."
              discountText="30"
              currentPrice="14.04"
              originalPrice="20.82"
              image={
                <img
                  src={IMAGES.cream.path}
                  alt={IMAGES.cream.alt}
                  width={208}
                  height={270}
                />
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <SectionHeader
          className="gap-[24px]"
          title="Enhance Your Beauty Routine"
          subtitle="Explore premium skincare, makeup, and personal care essentials for your best self"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {BeautyProduct.map((item, index) => (
            <div key={item.id + index} className="flex justify-center">
              <MedicienCard
                key={index}
                image={
                  <Image
                    src={IMAGES.beautproduct.path}
                    alt={IMAGES.beautproduct.alt}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-t-xl"
                  />
                }
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <DiscountBanner />
      </div>
    </div>
  );
};

export default DashBoard;
