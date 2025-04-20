import { ICONS } from '@/_lib/constant/assets/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterLogoBar = () => {
  return (
    <div className='h-[153px] w-full bg-[#01C9A7]'>
        <div className='pl-[84px] pr-[80px] flex justify-between items-center h-full'>
            <div>
            <Link href={"/"}>
                <Image src={ICONS.logoFooter.path} alt={ICONS.logoFooter.alt} height={2000} width={2000} className='w-[444px] h-[113px]'/>
                </Link>
            </div>
            <div className='h-[113px] w-[486px] bg-white rounded-[12px] flex items-center justify-center gap-6'>
            
            <Image src={ICONS.applestore.path} alt={ICONS.applestore.alt} height={2000} width={2000} className='w-[207px] h-[70px]'/>
            <Image src={ICONS.playstore.path} alt={ICONS.playstore.alt} height={2000} width={2000} className='w-[207px] h-[70px]'/>
          
            </div>

        </div>

    </div>
  )
}

export default FooterLogoBar