import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchBarNav = () => {
    return (
        <div className='w-full flex-1 flex justify-center px-4 sm:px-6 lg:px-0'>
            <div className='mt-1 h-[40px] w-full max-w-[1143px] relative flex items-center'>
                <button className="absolute left-0 top-0 h-full px-3 text-[#676767]">
                    <IoSearchOutline className='text-2xl' />
                </button>
                <input
                    type="text"
                    placeholder="Search for name product"
                    className="w-full py-2 pl-10 pr-4 border-[1px] text-[#676767] font-[400] text-[14px] leading-[22px] font-lora border-[#F5F5F5] rounded-md focus:outline-none"
                />
            </div>
        </div>
    );
};