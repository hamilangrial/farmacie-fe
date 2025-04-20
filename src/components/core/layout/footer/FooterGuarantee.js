import React from 'react';
import Image from 'next/image';
import FooterColumn from './FooterColumn';
import { FOOTER_SECTIONS } from '@/_lib/constant/footer';
import { ICONS } from '@/_lib/constant/assets/icons';

const FooterGuarantee = () => {
  const { guarantee } = FOOTER_SECTIONS;
  
  return (
    <FooterColumn title={guarantee.title}>
      <div className="flex flex-col ml-[20px]">
        <div className="mt-[11px] w-[141px] h-[117px]">
          <Image
            src={ICONS.guarantee.badge.path}
            alt={ICONS.guarantee.badge.alt}
            width={1000}
            height={1000}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <div className='mt-3 max-w-[244px]'>
        <p className="text-sm font-lora text-[#4D4D4D] font[400] ">{guarantee.text}</p>
        </div>
      </div>
    </FooterColumn>
  );
};

export default FooterGuarantee;