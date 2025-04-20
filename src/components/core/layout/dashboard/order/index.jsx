'use client';
import { IMAGES } from "@/_lib/constant/assets/images";
import { OrdertabsLable } from "@/_lib/dumyData";
import OrderCard from "@/components/ui/ordercard";
import { TabsContent } from "@/components/ui/tabs";
import { Tab } from "@/components/ui/tabs/index";
import { useRouter } from "next/navigation";
import React from "react";

const Order = () => {
  const router = useRouter();

  const handleOrderClick = (orderId) => {
    router.push(`/order/${orderId}`);
  };

  return (
    <div className="w-[1759px] bg-white shadow-[0px_4px_4px_0px_#00000040] p-[33px] justify-end flex flex-col gap-[65px]">
      <div className="flex flex-col gap-[32px]">
        <h3 className="text-[32px] font-medium">My Orders</h3>

        <Tab
          order="order"
          defaultValue="running"
          tabs={OrdertabsLable}
          className="gap-[50px]"
        >
          <TabsContent value="running">
            <OrderCard
              orderId="100044"
              date="Nov 25, 2024"
              time="12:08 PM"
              imageUrl={IMAGES.orderproduct.path}
              status="Pending"
              price={254}
              onclick={() => handleOrderClick("100044")}
            />
          </TabsContent>
          <TabsContent value="history">
            <OrderCard
              orderId="100044"
              date="Nov 25, 2024"
              time="12:08 PM"
              imageUrl={IMAGES.orderproduct.path}
              status="Completed"
              price={254}
              onclick={() => handleOrderClick("100044")}
            />
            <OrderCard
              orderId="100045"
              date="Nov 25, 2024"
              time="12:08 PM"
              imageUrl={IMAGES.orderproduct.path}
              status="Cancelled"
              price={254}
              onclick={() => handleOrderClick("100045")}
            />
          </TabsContent>
        </Tab>
      </div>
    </div>
  );
};

export default Order;
