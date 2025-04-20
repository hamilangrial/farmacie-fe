'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { MdPhone } from 'react-icons/md';
import { IoMailSharp } from "react-icons/io5";
import { GoGlobe } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";


const FollowUs = () => {
  return (
    <div className="w-full bg-[#01C9A7] font-[600] font-roboto text-white text-xs py-[6px] px-4 sm:px-6 lg:px-[88px]">
      <div className="flex flex-wrap justify-between">
        {/* Social media */}
        <div className="flex items-center gap-3 w-full sm:w-auto mb-2 sm:mb-0 justify-center sm:justify-start">
          <div className="font-lora">Follow us at</div>
          <div className="flex gap-3">
            <Link href="#" className="text-[13px]"><FaTwitter /></Link>
            <Link href="#" className="text-[13px]"><FaFacebook /></Link>
            <Link href="#" className="text-[13px]"><RiInstagramFill /></Link>
          </div>
        </div>

        {/* Free shipping notice */}
        <div className="hidden md:flex items-center justify-center">
          <span>Free Shipping from € 25</span>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center sm:justify-end w-full sm:w-auto gap-2 sm:gap-0 sm:space-x-[19px]">
          <div className="flex items-center gap-[12px]">
            <IoMailSharp className="text-[14px]" />
            <span className="text-[10px] sm:text-xs">new-stilo@email.com</span>
          </div>
          <div className="flex flex-wrap items-center gap-[12px]">
            <MdPhone className="text-[14px]" />
            <span className="text-[10px] sm:text-xs">+92-304-1234567</span>
            <span className="text-[10px] sm:text-xs hidden xs:inline">+92-304-1234567</span>
          </div>
          <div className="flex items-center pl-[5px]">
            <div className='bg-white font-extrabold text-[#01C9A7] w-[19px] h-[14px] rounded-[1px] flex items-center justify-center'>
              <GoGlobe/>
            </div>
            <IoMdArrowDropdown />
            <span className="text-[10px] sm:text-xs">English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
