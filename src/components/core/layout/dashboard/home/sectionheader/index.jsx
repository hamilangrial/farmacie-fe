import { ICONS } from "@/_lib/constant/assets/icons";
import Image from "next/image";
import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  viewMore = "",
  subtitleClassName = "",
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <h2 className={`text-3xl lg:text-5xl font-bold ${titleClassName}`}>
        {title}
      </h2>
      <div className="flex justify-between items-center">
        <div>
          {subtitle && (
            <p
              className={`text-lg lg:text-2xl font-normal text-gray-600 ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex gap-[10px]">
          <span className={`text-sm font-medium text-[#4FAFFF]`}>
            {viewMore}
          </span>
          {viewMore && (
            <Image
              src={ICONS.arrow.path}
              alt={ICONS.arrow.alt}
              width={10}
              height={8}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
