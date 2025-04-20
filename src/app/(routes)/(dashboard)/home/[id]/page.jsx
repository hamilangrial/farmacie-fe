"use client";

import { useParams } from "next/navigation";
import { BreadcrumSeparator } from "@/components/ui/breadcrumb/index";
import React from "react";
import ProductImageGallery from "@/components/ui/productGallery";
import { IMAGES } from "@/_lib/constant/assets/images";
import { Tab } from "@/components/ui/tabs/index";
import { BeautyProduct, DetailTabLable, tabs, TopSelling } from "@/_lib/dumyData";
import { ProductCard } from "@/components/ui/productcard";
import Image from "next/image";
import SectionHeader from "@/components/core/layout/dashboard/home/sectionheader";
import { MedicienCard } from "@/components/ui";
import DiscountBanner from "@/components/ui/discountbanner";
import { ICONS } from "@/_lib/constant/assets/icons";
import { TabsContent } from "@/components/ui/tabs";

const Page = () => {
  const params = useParams();
  const id = params?.id;
  const paths = id ? [id.toString()] : [];

  const Data = [
    {
      image: IMAGES.galleryImages.path,
    },
    {
      image: IMAGES.product.path,
    },
    {
      image: IMAGES.galleryImages.path,
    },
    {
      image: IMAGES.galleryImages.path,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-[65px]">
        <div className="flex flex-col gap-[24px]">
          <BreadcrumSeparator paths={paths} />
          <div className="w-[1759px] flex flex-col gap-[65px]">
            <ProductImageGallery images={Data} />
          </div>
        </div>
        <div className="flex flex-col gap-[120px]">
          <div className="p-[33px]">
            <Tab
            tabs={DetailTabLable}
              Icon={
                <Image
                  src={ICONS.tabVector.path}
                  alt={ICONS.tabVector.alt}
                  width={24}
                  height={12}
                />
              }
              className="gap-[50px]"
            >
              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="pt-4">
                  <div className="flex flex-col gap-[40px]">
                    <h3 className="text-5xl font-bold">{tab.header}</h3>
                    <div className="flex items-center gap-[24px]">
                      <h3 className="font-semibold text-[32px]">
                        {tab.subheader}
                      </h3>
                      <h3 className="text-2xl">{tab.headerText}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[40px]">
                    <SectionHeader
                      className="gap-[40px]"
                      subtitle="Find reliable, over-the-counter solutions for common health needs, from pain relief to allergy care"
                    />
                    <div className="px-[30px] py-[40px]">
                      <SectionHeader
                        className="gap-[30px]"
                        subtitleClassName="px-[34px] py-[33px]"
                        title="Therapeutic indications"
                        subtitle="Find reliable, over-the-counter solutions for common health needs, from pain relief to allergy care"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tab>
          </div>
          <div className="w-[1759px] flex flex-col gap-[65px]">
            <SectionHeader
              className="gap-[24px]"
              title="Explore Similar Products"
              subtitle="Discover related items that complement or enhance your current selection"
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
            <DiscountBanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
