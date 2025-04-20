import { ICONS } from "@/_lib/constant/assets/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DiscountBanner = () => {
  return (
    <div className="group p-[20px] w-full h-[482px] rounded-2xl transition-all duration-1100 ease-in-out bg-[#00FFD4] hover:bg-transparent">
      <div className="bg-white h-[446px] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-1100 ease-in-out">
        <div className="max-w-md pl-[164px] flex flex-col gap-[24px] text-center md:text-left">
          <h2 className="text-6xl font-semibold w-[616px] md:text-4xl text-[#43533D]">
            Unlock 30% Off On <br /> Essential Medicines!
          </h2>
          <p className="text-[#373D45] w-[505px]">
            Embrace wellness without breaking the bank! Enjoy a generous 25%
            discount on a wide range of vital medicines at our online pharmacy.
            Your health matters, and so does your budget.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#01C9A7] w-[243px] hover:bg-white border border-[#01C9A7] text-white hover:text-[#01C9A7]"
          >
            Shop Now
          </Button>
        </div>

        <div className="pr-[340px]">
          <Image
            src={ICONS.discount.path}
            alt={ICONS.discount.alt}
            className="object-contain  transition-transform duration-1100 ease-in-out group-hover:-rotate-180"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
