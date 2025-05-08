import React from "react";

const badges = [
  "PARAFARMACI",
  "DISPOSITIVI MEDICI",
  "FITOTERAPICI",
  "OMEOPATICI",
  "FARMACI DA BANCO",
  "VETERINARI",
];

const CategoryBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 py-4 md:py-8">
      {badges.map((badge, index) => (
        <span
          key={index}
          className="bg-[#e6f2ea] text-[#1a3c34] font-semibold text-sm px-4 py-2 rounded-full shadow-sm hover:bg-[#d3ebdc] transition-all cursor-pointer"
        >
          {badge}
        </span>
      ))}
    </div>
  );
};

export default CategoryBadges;
