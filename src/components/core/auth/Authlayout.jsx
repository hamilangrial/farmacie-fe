import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="w-full h-[100%] min-h-[100vh] pt-[29px] pb-[23px] pl-[25px] pr-[27px] flex items-center justify-center">
      <div
        className="min-h-[100vh] w-full rounded-2xl flex items-center justify-center py-[59px]  bg-[url('/assets/background/login.png')] bg-cover bg-center shadow-lg"
      >
        <div className="bg-white w-[818px] max-w-[818px] h-[844.85px] max-h-[844.85px] rounded-xl">
          <div className="px-[37px] py-[50px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
