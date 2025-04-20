import { ICONS } from '@/_lib/constant/assets/icons'
import Image from 'next/image'
import React from 'react'

export default function LoginBanner() {
  return (
    <div className="flex flex-col items-center ">
      <div className="grid grid-flow-col gap-[17px] items-center ">
        <Image src={ICONS.logo.path} alt={ICONS.logo.alt} height={57} width={57} />
        <Image src={ICONS.company_name.path} alt={ICONS.company_name.alt} height={22.68} width={239.93} />
      </div>
    </div>
  )
}
