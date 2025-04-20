import Image from "next/image";
import React from "react";

const statusColorMap = {
  Pending: "bg-[#FF9D00]",
  Active: "bg-[#00BD35]",
  Completed: "bg-[#00BD35]",
  Cancelled: "bg-[#FF0000]",
};

const OrderCard = ({ orderId, date, time, imageUrl, status, price,onclick }) => {
  return (
    <div onClick={onclick} className="cursor-pointer w-full flex items-center justify-between p-[24px] bg-white rounded-lg shadow mb-4">
      <div className="w-[60px] h-[60px] rounded overflow-hidden">
        <Image src={imageUrl} alt="Product" width={108} height={108} />
      </div>
      <div className="flex flex-col ml-4 flex-1">
        <p className="font-medium text-2xl text-[#1E1E1E]">
          Order ID: #{orderId}
        </p>
        <p className="font-medium text-base text-[#676767]">
          {date} &nbsp; {time}
        </p>
      </div>
      <div className="flex flex-col items-end gap-[12px]">
        <div
          className={`w-[144px] rounded-[50px] flex items-center justify-center p-[5px] text-center  ${
            statusColorMap[status] || "bg-gray-400"
          }`}
        >
          <h3 className=" text-white text-center text-base font-medium">
            {status}
          </h3>
        </div>
        <span className="text-2xl font-medium">{price}€</span>
      </div>
    </div>
  );
};

export default OrderCard;
