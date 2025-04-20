import Link from "next/link";

export const UserAction = ({ icon, activeIcon, text, href, badge, active }) => {
    return (
        <Link href={href} className={`px-[12px] py-[10px] font-medium  ${active
                ? 'bg-[#01C9A7] font-[700] text-[22px] leading-4 text-white rounded-full'
                : 'text-[#1E1E1E] font-medium text-[22px] leading-4 '
            }`}>
            <div className="flex items-center gap-[14px] ">
                <div className="relative">
                    {active ? activeIcon : icon}
                    {badge && (
                        <span className="absolute -top-[2px] -right-2 bg-red-500 text-white text-xs font-normal rounded-full w-[14px] h-[14px] flex items-center justify-center">
                            {badge}
                        </span>
                    )}
                </div>
                <div className="text-[16px] ">{text}</div>
            </div>
        </Link>
    );
};