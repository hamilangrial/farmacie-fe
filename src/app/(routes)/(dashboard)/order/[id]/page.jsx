'use client'

import { IMAGES } from "@/_lib/constant/assets/images";
import OrderDetail from "@/components/core/layout/dashboard/order/orderdetail";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  console.log("params", params);

  const id = typeof params?.id === "string"
    ? params.id
    : Array.isArray(params?.id)
    ? params.id[0]
    : "";

  return <OrderDetail 
  paths={id} 
  imageUrl={IMAGES.orderproduct.path}
  items="3"
  price="32" 
  description="Somatoline Skin Expert Starter Kit Bende Drenanti Acione Riducent Urto" />;
};

export default Page;
