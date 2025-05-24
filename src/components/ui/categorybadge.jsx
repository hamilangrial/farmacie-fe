"use client";
import React, { useState, useEffect, useRef } from "react";
import useLoading from "@/components/hooks/useLoading";
import { apiRequest } from "@/lib/api/handlers";
import { constants } from "@/lib/config";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const CategoryBadges = () => {
  const [categories, setCategories] = useState([]);
  const { loading, startLoading, stopLoading } = useLoading();
  const dataFetchRef = useRef(true);
  const router = useRouter();

  const fetchCategories = async () => {
    try {
      startLoading();
      const response = await apiRequest("get", constants.categories);
      if (response.status === 200) {
        setCategories(response.data);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    if (dataFetchRef.current) {
      fetchCategories();
      dataFetchRef.current = false;
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <Loader className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 py-4 md:py-8 min-w-max">
          {categories.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                router.push(
                  `/shop?category=${encodeURIComponent(JSON.stringify(item))}`
                );
              }}
              className="bg-[#e6f2ea] text-[#1a3c34] font-semibold text-sm px-4 py-2 rounded-full shadow-sm hover:bg-[#d3ebdc] transition-all cursor-pointer"
            >
              {item?.name}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryBadges;
