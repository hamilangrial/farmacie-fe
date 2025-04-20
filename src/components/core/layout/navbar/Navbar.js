"use client";
import React, { useState } from "react";
import FollowUs from "./FollowUs";
import MainHeader from "./MainHeader";
import { SearchBarNav } from "./SearchBarNav";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:h-[182px] flex flex-col w-full shadow-md relative">
      <FollowUs />

      <div className="relative">
        {/* Mobile Menu Button - positioned in MainHeader area */}
        <div className="md:hidden absolute top-1/2 right-4 -translate-y-1/2 z-20">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#01C9A7]"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <MainHeader />
      </div>

      {/* Mobile Menu - only visible when toggled */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-10 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out pt-16`}
      >
        <div className="flex flex-col p-4 space-y-6">
          <SearchBarNav />
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="px-4 py-2 text-[#1E1E1E] font-medium text-[16px]"
            >
              Shop
            </Link>
            <Link
              href="/orders"
              className="px-4 py-2 text-[#1E1E1E] font-medium text-[16px]"
            >
              Orders
            </Link>
            <Link
              href="/booking"
              className="px-4 py-2 text-[#1E1E1E] font-medium text-[16px]"
            >
              Booking
            </Link>
            <Link
              href="account"
              className="px-4 py-2 text-[#1E1E1E] font-medium text-[16px]"
            >
              My Account
            </Link>
            <Link
              href="/cart"
              className="px-4 py-2 text-[#1E1E1E] font-medium text-[16px]"
            >
              My Cart
            </Link>
            <Link
              href="/wishlist"
              className="px-4 py-2 text-[#1E1E1E] font-medium text-[16px]"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <SearchBarNav />
      </div>
    </div>
  );
};

export default Navbar;
