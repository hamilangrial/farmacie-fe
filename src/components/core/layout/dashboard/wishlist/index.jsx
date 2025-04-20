"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import SectionHeader from "../home/sectionheader";
import { TopSelling } from "@/_lib/dumyData";
import { ProductCard } from "@/components/ui/productcard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Wishlist = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CartHeader />
      <WishlistItems />
      <RelatedProducts />
    </div>
  );
};

// CartHeader Component
const CartHeader = () => {
  return (
    <div className="px-3 sm:px-4 ms-2 sm:ms-6 py-2 bg-white w-fit shadow-xs rounded-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/shop">Shop</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Wishlist</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

const WishlistItems = () => {
  const [wishlistProducts, setWishlistProducts] = useState(TopSelling); // Initialize with your data
  const router = useRouter();

  const handleWishlistToggle = async (productId, isWishlist) => {
    try {
      if (isWishlist) {
        // Add to wishlist
        // await addToWishlist(productId);
        setWishlistProducts((prev) => [...prev, productId]);
      } else {
        // Remove from wishlist
        // await removeFromWishlist(productId);
        setWishlistProducts((prev) =>
          prev.filter((product) => product.id !== productId)
        );
      }
      // Optional: Show success toast
      alert(isWishlist ? "Added to wishlist" : "Removed from wishlist");
    } catch (error) {
      // Optional: Show error toast
      alert("Failed to update wishlist");
    }
  };

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      {wishlistProducts.length == 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Your Wishlist is Empty
          </h3>
          <p className="text-gray-500 text-center mb-6">
            Add items that you like to your wishlist. Review them anytime and
            easily move them to the cart.
          </p>
          <Button variant="secondary" onClick={() => router.push("/shop")}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {wishlistProducts.map((product) => (
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
                isWishlist={true}
                onWishlistToggle={handleWishlistToggle}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <SectionHeader
        className="gap-[24px]"
        title="Products You Might Like"
        subtitle="Explore our most popular items, trusted by customers for quality and results"
        viewMore="View all products"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
        {TopSelling.map((product) => (
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
    </div>
  );
};

export default Wishlist;
