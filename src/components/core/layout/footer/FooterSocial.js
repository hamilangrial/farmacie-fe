import React from 'react';
import Image from 'next/image';
import FooterColumn from './FooterColumn';
import { FOOTER_SECTIONS } from '@/_lib/constant/footer';
import { ICONS } from '@/_lib/constant/assets/icons';
import Link from 'next/link';

const FooterSocial = () => {
  const { social } = FOOTER_SECTIONS;
  
  return (
    <FooterColumn title={social.title}>
      <div className="flex space-x-4">
        {social.platforms.map((platform) => (
          <Link
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label={`Follow us on ${platform.name}`}
          >
            <div className='flex items-center'>
            <Image
              src={ICONS.social[platform.name.toLowerCase()].path}
              alt={platform.name}
              width={1000}
              height={1000}
              className='w-[100%] h-[100%]'
            />
            <span className='ml-3 text-[#4D4D4D] font-lora font-[400] text-[14px] hidden sm:block'>{platform.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </FooterColumn>
  );
};

export default FooterSocial;