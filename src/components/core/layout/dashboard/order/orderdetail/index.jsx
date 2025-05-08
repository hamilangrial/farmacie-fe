import { ICONS } from "@/_lib/constant/assets/icons";
import Image from "next/image";
import React from "react";

const OrderDetail = ({ paths, imageUrl, description, items, price }) => {
  return (
    <div className="w-full bg-white shadow-[0px_4px_4px_0px_#00000040] p-[33px] justify-end rounded-2xl flex flex-col gap-[65px]">
      <div className="flex flex-col gap-[32px]">
        <h3 className="text-[32px] font-medium">Order ID: #{paths}</h3>
        <div className="flex flex-col gap-[42px]">
          <div className="flex gap-[17px]">
            <div className="flex items-center gap-[8px]">
              <p className="text-[#667085] text-sm">Order date:</p>
              <p className="text-[#1D2939]">Wed, 25 Nov 2024</p>
            </div>
            <div className="border bg-[#D0D5DD]"></div>
            <div className="flex items-center gap-[8px]">
              <Image
                src={ICONS.truck.path}
                alt={ICONS.truck.alt}
                width={20}
                height={20}
              />
              <p className="text-[#1D2939]">Wed, 25 Nov 2024</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between p-[24px] bg-white rounded-lg shadow mb-4">
            <div className="w-[60px] h-[60px] rounded overflow-hidden">
              <Image src={imageUrl} alt="Product" width={108} height={108} />
            </div>
            <div className="flex flex-col md:ml-4 flex-1">
              <p className="font-medium text-2xl text-[#1E1E1E]">
                {description}
              </p>
              <p className="font-medium text-base text-[#676767]">x{items}</p>
            </div>
            <span className="text-2xl font-medium text-[#01C9A7]">
              {price}€
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
