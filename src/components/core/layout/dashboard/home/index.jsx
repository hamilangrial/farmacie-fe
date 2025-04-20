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
import { BeautyProduct, Essential_Over, TopSelling } from "@/_lib/dumyData";
import DiscountBanner from "@/components/ui/discountbanner";

const DashBoard = () => {
 
  return (
    // <div className="flex flex-col gap-[130px]">
    <div className="w-[100%] gap-[117px] flex flex-col items-center">
      {/* <Carousel /> */}
      <div className="w-[1759px] flex flex-col gap-[65px]">
        <SectionHeader
          className="gap-[24px]"
          title="Essential Over-the-Counter Medications"
          subtitle="Find reliable, over-the-counter solutions for common health needs, from pain relief to allergy care"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 py-2">
          {Essential_Over.map((item, index) => (
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
          ))}
        </div>
      </div>
      <div className="w-[1759px] flex flex-col gap-[65px]">
        <SectionHeader
          className="gap-[24px]"
          title="Top-Selling Products You’ll Love"
          subtitle="Explore our most popular items, trusted by customers for quality and results"
          viewMore="View all products"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-2">
          {TopSelling.map((item, index) => (
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
          ))}
        </div>
      </div>
      <div className="w-[1759px] flex flex-col gap-[65px]">
        <SectionHeader
          className="gap-[24px]"
          title="Top-Selling Products You’ll Love"
          subtitle="Explore our most popular items, trusted by customers for quality and results"
          viewMore="View all products"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 py-2">
          <SaleCard
            variant="secondary"
            image={
              <Image
                src={IMAGES.saleproduct.path}
                alt={IMAGES.saleproduct.alt}
                width={293}
                height={229}
                className="rounded-t-xl w-full h-auto"
              />
            }
            title="Cerave Moisturizing Anti-Shine Gel Face Cream For Oily Skin 52 ml"
            discountPercent={30}
            price="14.04"
            originalPrice="20.82"
          />

          <SaleCard
            variant="primary"
            image={
              <Image
                src={IMAGES.saleproduct.path}
                alt={IMAGES.saleproduct.alt}
                width={293}
                height={229}
                className="rounded-t-xl w-full h-auto"
              />
            }
            title="Cerave Moisturizing Anti-Shine Gel Face Cream For Oily Skin 52 ml"
            discountPercent={30}
            price="14.04"
            originalPrice="20.82"
          />
          <SaleCard
            variant="destructive"
            image={
              <Image
                src={IMAGES.saleproduct.path}
                alt={IMAGES.saleproduct.alt}
                width={293}
                height={229}
                className="rounded-t-xl w-full h-auto"
              />
            }
            title="Cerave Moisturizing Anti-Shine Gel Face Cream For Oily Skin 52 ml"
            discountPercent={30}
            price="14.04"
            originalPrice="20.82"
          />
        </div>
      </div>
      <div className="w-[1759px] flex flex-col gap-[65px]">
        <SectionHeader
          className="gap-[24px]"
          title="Featured Products"
          subtitle="Discover our curated selection of recommended products for your wellness and beauty needs"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-2">
          {TopSelling.map((item, index) => (
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
          ))}
        </div>
      </div>
      <div className="w-[1759px] flex flex-col gap-[65px]">
        <SectionHeader
          className="gap-[24px]"
          title="Exclusive Deals & Perks"
          subtitle="Enjoy exclusive benefits and rewards on our premium selections"
        />
        <div className="w-full grid grid-cols-2 gap-4">
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
        
        <div className="w-full grid grid-rows-2 gap-[10px]">
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
      <div className="w-[1759px] flex flex-col gap-[65px]">
        <SectionHeader
          className="gap-[24px]"
          title="Enhance Your Beauty Routine"
          subtitle="Explore premium skincare, makeup, and personal care essentials for your best self"
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 py-2">
          {BeautyProduct.map((item, index) => (
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
          ))}
        </div>
      </div>
      <div className="w-[1759px] flex flex-col gap-[65px]">
      <DiscountBanner/>
      </div>
    {/* </div> */}
    
    </div>
  );
};

export default DashBoard;
