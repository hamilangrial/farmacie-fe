const { default: Link } = require("next/link");

export const NavLink = ({ href, active, children }) => {
    return (
      <Link
        href={href} 
        className={`px-[12px] py-[10px] font-medium  ${
          active 
            ? 'bg-[#01C9A7] font-[700] text-[16px] leading-4 text-white rounded-full' 
            : 'text-[#1E1E1E] font-medium text-[16px] leading-4 '
        }`}
      >
        {children}
      </Link>
    );
  };