"use client";

import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import React from "react";
import ProductImageGallery from "@/components/ui/productGallery";
import { IMAGES } from "@/_lib/constant/assets/images";
import { Tab } from "@/components/ui/tabs/index";
import {
  BeautyProduct,
  DetailTabLable,
  markdownContent,
  tabs,
  TopSelling,
} from "@/_lib/dumyData";
import { ProductCard } from "@/components/ui/productcard";
import Image from "next/image";
import SectionHeader from "@/components/core/layout/dashboard/home/sectionheader";
import { MedicienCard } from "@/components/ui";
import DiscountBanner from "@/components/ui/discountbanner";
import { ICONS } from "@/_lib/constant/assets/icons";
import { TabsContent } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import rehypeRaw from "rehype-raw";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;
  // const paths = id ? [id.toString()] : [];

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
      <div className="flex flex-col gap-6">
        <div className="px-4 ms-6 py-2 bg-white w-fit shadow-xs rounded-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/shop">Shop</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col gap-6 p-4 sm:p-6">
          <ProductImageGallery images={Data} />
        </div>
        <div className="flex flex-col gap-6 p-4 sm:p-6">
          <div>
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
              className="gap-4 md:gap-8"
            >
              {tabs.map((tab) => (
                // <TabsContent key={tab.value} value={tab.value} className="pt-4">
                //   <div className="flex flex-col gap-6 md:gap-10">
                //     <h3 className="text-2xl md:text-5xl font-bold">
                //       {tab.header}
                //     </h3>
                //     <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                //       <h3 className="font-semibold text-lg md:text-xl">
                //         {tab.subheader}
                //       </h3>
                //       <h3 className="text-md md:text-lg">{tab.headerText}</h3>
                //     </div>
                //   </div>
                //   <div className="flex flex-col gap-6 md:gap-10">
                //     <SectionHeader
                //       className="gap-6 md:gap-10"
                //       subtitle="Find reliable, over-the-counter solutions for common health needs, from pain relief to allergy care"
                //     />
                //     <div className="px-4 md:px-8 py-6 md:py-10">
                //       <SectionHeader
                //         className="gap-4 md:gap-6"
                //         subtitleClassName="px-4 md:px-8 py-4 md:py-8"
                //         title="Therapeutic indications"
                //         subtitle="Find reliable, over-the-counter solutions for common health needs, from pain relief to allergy care"
                //       />
                //     </div>
                //   </div>
                // </TabsContent>
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="p-4 md:p-8"
                >
                  <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {markdownContent}
                    </ReactMarkdown>
                  </div>
                </TabsContent>
              ))}
            </Tab>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-4 sm:p-6">
          <SectionHeader
            className="gap-[24px]"
            title="Explore Similar Products"
            subtitle="Discover related items that complement or enhance your current selection"
            viewMore="View all products"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
            {TopSelling.map((item, index) => (
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
    </>
  );
};

export default ProductDetails;
