"use client";
import React, { useState, useEffect } from "react";
import { ProductCard } from "@/components/ui/productcard";
import { TopSelling } from "@/_lib/dumyData";
import Image from "next/image";
import { Pagination } from "@/components/ui/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  // Calculate current items
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = TopSelling.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  return (
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
              <BreadcrumbPage>All Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
        {currentItems.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard
              id={product.id}
              image={
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={331}
                  height={280}
                  className="w-full h-auto rounded-t-xl"
                />
              }
              title={product.title}
              price={product.price}
              onClick={() => console.log(`Added ${product.title} to cart`)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center py-6 px-2">
        <Pagination
          currentPage={currentPage}
          totalItems={TopSelling.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
};

export default Shop;
