import React from "react";
import Image from "next/image";

const PaymentIcons = ({ icons }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="h-[20px] sm:h-[25px] w-[32px] sm:w-[40px] relative"
        >
          <Image
            src={icon.path}
            alt={icon.alt}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentIcons;
