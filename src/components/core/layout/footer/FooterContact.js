import React from 'react';
import FooterColumn from './FooterColumn';
import { FOOTER_SECTIONS } from '@/_lib/constant/footer';

const FooterContact = () => {
  const { contact } = FOOTER_SECTIONS;
  
  return (
    <FooterColumn title={contact.title}>
      <div className="flex flex-col space-y-2">
        <a href={`tel:${contact.phone1}`} className="flex items-center text-teal-500 hover:text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {contact.phone1}
        </a>
        <a href={`tel:${contact.phone2}`} className="flex items-center text-teal-500 hover:text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {contact.phone2}
        </a>
        <a href={`mailto:${contact.email}`} className="flex items-center text-teal-500 hover:text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {contact.email}
        </a>
      </div>
      <div className="mt-4 rounded-md overflow-hidden h-44 bg-gray-200">
        {/* We'd typically use a map component here, but for this example we'll just show a placeholder */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gray-200">
            {/* Placeholder for map */}
          </div>
          <div className="absolute top-4 left-4 bg-white p-3 rounded-md shadow-md max-w-xs">
            <p className="text-xs">
              {contact.address}
            </p>
          </div>
        </div>
      </div>
    </FooterColumn>
  );
};

export default FooterContact;