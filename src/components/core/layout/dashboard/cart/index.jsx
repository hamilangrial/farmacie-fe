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
import Image from "next/image";
import { HeartIcon, TrashIcon, PlusIcon } from "lucide-react";
import { IMAGES } from "@/_lib/constant/assets/images";
import SectionHeader from "../home/sectionheader";
import { TopSelling } from "@/_lib/dumyData";
import { ProductCard } from "@/components/ui/productcard";
import { useRouter } from "next/navigation";
import PaymentIcons from "@/components/ui/paymenticons";
import { paymentIconsData } from "@/_lib/dumyData";

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CartHeader />
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        <CartItems />
        <OrderSummary />
      </div>
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
            <BreadcrumbPage>My Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

// CartItems Component
const CartItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items] = useState(Array(8).fill(null)); // Simulate 8 items

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(items.map((_, index) => index));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (index) => {
    setSelectedItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="flex-1 bg-white shadow-md rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 accent-[#01C9A7]"
          checked={selectedItems.length === items.length}
          onChange={handleSelectAll}
        />
        <span className="text-gray-700">Select All</span>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        {items.map((_, index) => (
          <CartItem
            key={index}
            isSelected={selectedItems.includes(index)}
            onSelect={() => handleSelectItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

// CartItem Component
const CartItem = ({ isSelected, onSelect }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-100 rounded-xl bg-white">
      <input
        type="checkbox"
        className="mt-2 w-4 h-4 rounded border-gray-300 accent-[#01C9A7]"
        checked={isSelected}
        onChange={onSelect}
      />
      <Image
        src={IMAGES.cream.path}
        alt="Product"
        width={80}
        height={80}
        className="object-cover rounded-lg w-16 sm:w-20 h-16 sm:h-20"
      />
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 mb-1 text-[14px] sm:text-[15px] truncate">
              Aspirin Skin Face Pharmaceutical drug Acne
            </h3>
            <p className="text-sm text-[#00A5EF]">Medicinal</p>
          </div>
          <div className="flex items-center gap-2 sm:mt-1">
            <span className="text-[#01C9A7] font-bold text-base sm:text-lg whitespace-nowrap">
              45.50 €
            </span>
            <span className="text-gray-400 line-through text-sm whitespace-nowrap">
              58.50 €
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3 sm:mt-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="group flex items-center gap-1.5 px-2 sm:px-3 py-1 border border-gray-200 hover:bg-gray-100 rounded-full text-gray-700 text-xs sm:text-sm">
              <TrashIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Remove</span>
            </button>
            <button className="group flex items-center gap-1.5 px-2 sm:px-3 py-1 border border-[#15A9E3] hover:bg-gray-100 rounded-full text-[#15A9E3] text-xs sm:text-sm">
              <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Move To Wishlist</span>
            </button>
          </div>
          <div className="flex items-center rounded-lg overflow-hidden h-8">
            <button className="w-7 h-7 flex items-center justify-center text-gray-600 rounded-full bg-[#01C9A7] cursor-pointer text-lg font-medium border-l border-gray-200 transition-colors">
              -
            </button>
            <span className="w-10 text-center text-gray-800 text-sm">1</span>
            <button className="w-7 h-7 flex items-center justify-center text-gray-600 rounded-full bg-[#01C9A7] cursor-pointer text-lg font-medium border-r border-gray-200 transition-colors">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// OrderSummary Component
const OrderSummary = () => {
  const router = useRouter();
  return (
    <div className="w-full lg:w-[400px] shadow-md h-fit rounded-2xl">
      <div className="bg-white rounded-2xl p-4 sm:p-6">
        <span className="flex items-center justify-center bg-[#26C0AB] py-2 md:py-4 mb-6 rounded-md">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Order Summary
          </h2>
        </span>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex justify-between text-gray-700 bg-gray-50 rounded-full px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[15px]">Total Products</span>
            <span className="text-[14px] sm:text-[15px]">13</span>
          </div>
          <div className="flex justify-between text-gray-700 bg-gray-50 rounded-full px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[15px]">Products Cost</span>
            <span className="text-[14px] sm:text-[15px]">480.53 €</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-between bg-gray-50 rounded-full px-3 sm:px-4 py-2 gap-2">
              <span className="text-gray-700 text-[14px] sm:text-[15px] min-w-[70px]">
                Discount
              </span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] min-w-[40px]">
                0 €
              </span>
            </span>
            <div className="flex-1">
              <div className="relative bg-gray-50 rounded-full p-1.5">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="w-full rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#26C0AB] placeholder:text-gray-400 pr-12"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#26C0AB] rounded-full text-white hover:bg-opacity-90 transition-colors flex items-center p-1 justify-center w-6 h-6">
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-gray-700 bg-gray-50 rounded-full px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[15px]">Shipping charges</span>
            <span className="text-[14px] sm:text-[15px]">5 €</span>
          </div>
          <div className="flex justify-between text-lg sm:text-xl font-semibold text-gray-900 pt-4 pb-2">
            <span>Subtotal</span>
            <span>485.53 €</span>
          </div>
          <button
            className="w-full bg-[#26C0AB] text-white py-2.5 sm:py-3 rounded-full hover:bg-opacity-90 transition-colors font-medium text-[14px] sm:text-[15px]"
            onClick={() => router.push("/checkout")}
          >
            Proceed To Checkout
          </button>
          <div className="mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
              Accepted Secure Payment Methods
            </p>
            <PaymentIcons icons={paymentIconsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 min-h-screen">
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

export default Cart;
