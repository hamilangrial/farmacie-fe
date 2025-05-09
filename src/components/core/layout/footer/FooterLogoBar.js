import { ICONS } from "@/_lib/constant/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLogoBar = () => {
  return (
    <div className="w-full bg-[#01C9A7] py-4">
      <div className="px-4 md:px-20 flex flex-col md:flex-row gap-x-8 justify-between items-center h-full">
        <div className="mb-4 md:mb-0">
          <Link href={"/"}>
            <Image
              src={ICONS.logoFooter.path}
              alt={ICONS.logoFooter.alt}
              height={2000}
              width={2000}
              className="w-44 md:w-[444px] h-auto"
            />
          </Link>
        </div>
        <div className="w-fit md:w-[486px] bg-white rounded-[12px] flex items-center justify-center gap-4 md:gap-6 p-2 md:p-4">
          <Image
            src={ICONS.applestore.path}
            alt={ICONS.applestore.alt}
            height={2000}
            width={2000}
            className="w-32 md:w-[207px] h-auto"
          />
          <Image
            src={ICONS.playstore.path}
            alt={ICONS.playstore.alt}
            height={2000}
            width={2000}
            className="w-32 md:w-[207px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterLogoBar;
