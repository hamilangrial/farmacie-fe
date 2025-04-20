import React from 'react';
import Image from 'next/image';
import FooterColumn from './FooterColumn';
import { ICONS } from '@/_lib/constant/assets/icons';

const FooterPaymentMethods = () => {
  return (
    <FooterColumn title="Secure Payments">
      <div className="flex space-x-2">
        {Object.values(ICONS.payments).map((payment) => (
          <div key={payment.alt} className="w-10 h-6">
            <Image
              src={payment.path}
              alt={payment.alt}
              width={40}
              height={24}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </FooterColumn>
  );
};

export default FooterPaymentMethods;