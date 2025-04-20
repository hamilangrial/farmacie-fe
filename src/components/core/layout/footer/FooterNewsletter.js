import { FOOTER_SECTIONS } from '@/_lib/constant/footer';
import React from 'react';

const FooterNewsletter = () => {
  const { newsletter } = FOOTER_SECTIONS;
  
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">{newsletter.title}</h3>
      <p className="text-sm">{newsletter.description}</p>
      <div className="flex">
        <input
          type="email"
          placeholder={newsletter.placeholder}
          className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="button"
          className="bg-teal-500 text-white rounded-r-md px-4 py-2 hover:bg-teal-600 transition-colors"
        >
          {newsletter.buttonText}
        </button>
      </div>
    </div>
  );
};

export default FooterNewsletter;