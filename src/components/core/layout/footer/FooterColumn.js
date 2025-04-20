import React from 'react';

const FooterColumn = ({ title, children, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-[24px] ${className}`}>
      <h3 className="text-[20px] font-[600]">{title}</h3>
      {children}
    </div>
  );
};

export default FooterColumn;
