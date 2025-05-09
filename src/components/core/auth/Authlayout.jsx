import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="w-full md:h-[100%] md:min-h-[100vh] pt-[29px] pb-[23px] pl-[25px] pr-[27px] flex items-center justify-center">
      <div className="md:min-h-[100vh] w-full rounded-2xl flex items-center justify-center py-5 md:py-[59px] px-5 lg:px-0  bg-[url('/assets/background/login.png')] bg-cover bg-center shadow-lg">
        <div className="bg-white w-[818px] max-w-[818px] md:h-[844.85px] md:max-h-[844.85px] rounded-xl">
          <div className="px-5 md:px-[37px] py-5 md:py-[50px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
