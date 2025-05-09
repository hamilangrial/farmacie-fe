import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import style from "./style.module.css";

export function Tab({
  tabs = [],
  defaultValue,
  Icon,
  order,
  className = "",
  children,
}) {
  return (
    <Tabs defaultValue={defaultValue || tabs[0]?.value} className={className}>
      <div className="px-[10px] h-[92px] py-[20px] rounded-[12px] overflow-x-auto flex w-full items-center justify-between flex-row bg-white [box-shadow:0px_4px_4px_0px_#00000026]">
        <TabsList
          className={`flex gap-[60px] ${
            order === "order" ? style.order : style.default
          }`}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="relative pb-2 h-[72px] text-2xl font-medium text-gray-600 data-[state=active]:text-[#01C9A7]"
            >
              {tab.label}
              <span className="absolute left-0 h-[2px] w-full scale-x-0 transform transition-transform duration-300 data-[state=active]:scale-x-100" />
            </TabsTrigger>
          ))}
        </TabsList>
        {Icon ? <div className="w-[40px] h-[20px]">{Icon}</div> : <div />}
      </div>

      {children}
    </Tabs>
  );
}
