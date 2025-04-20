import React from "react";
import Image from "next/image";
import { ICONS } from "@/_lib/constant/assets/icons";
import { usePathname } from "next/navigation";
import { FaRegUser, FaUser } from "react-icons/fa";
import { NavLink } from "@/_lib/constant/assets/NavLinks";
import { UserAction } from "@/_lib/constant/assets/userActions";
import { BiCart, BiSolidCart } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Link from "next/link";

const MainHeader = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-[83px] px-4 sm:px-6 lg:px-[88px]">
      <div className="flex justify-between h-full">
        {/* Logo - always visible but smaller on mobile */}
        <div className="flex flex-1 items-center">
          <Link href={"/home"}>
            <Image
              src={ICONS.mainlogo.path}
              width={1000}
              height={1000}
              className="h-[40px] sm:h-[50px] md:h-[55px] lg:h-[60px] w-auto sm:w-auto md:w-[245px] lg:w-[277px] md:hidden lg:block"
              alt={ICONS.mainlogo.alt}
            />
            <Image
              src={ICONS.mdMainlogo.path}
              width={1000}
              height={1000}
              className="h-[60px] w-[60px] md:block lg:hidden hidden"
              alt={ICONS.mdMainlogo.alt}
            />
          </Link>
        </div>

        {/* Navigation - hidden on mobile */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6">
          <NavLink href="/shop" active={pathname === "/shop"}>
            Shop
          </NavLink>
          <NavLink href="/order" active={pathname === "/order"}>
            Orders
          </NavLink>
          <NavLink href="/booking" active={pathname === "/booking"}>
            Booking
          </NavLink>
        </div>

        {/* User actions - hidden on mobile (shown in mobile menu) */}
        <div className="hidden md:flex flex-1 items-center space-x-[19px] justify-end">
          <UserAction
            icon={<FaRegUser />}
            activeIcon={<FaUser />}
            active={pathname === "account"}
            text="My Account"
            href="account"
          />
          <UserAction
            icon={<BiCart />}
            activeIcon={<BiSolidCart />}
            active={pathname === "/cart"}
            text="My Cart"
            href="/cart"
            badge="0"
          />
          <UserAction
            icon={<BsHeart />}
            activeIcon={<BsHeartFill />}
            active={pathname === "/wishlist"}
            text="Wishlist"
            href="/wishlist"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
