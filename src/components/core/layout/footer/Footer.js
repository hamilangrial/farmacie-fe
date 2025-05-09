import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/_lib/constant/assets/icons";
import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";
import FooterNewsletter from "./FooterNewsletter";
import FooterPaymentMethods from "./FooterPaymentMethods";
import FooterContact from "./FooterContact";
import FooterGuarantee from "./FooterGuarantee";
import { FOOTER_SECTIONS } from "@/_lib/constant/footer";
import FooterLogoBar from "./FooterLogoBar";

const Footer = () => {
  const { about, services, quickLinks, policies, delivery } = FOOTER_SECTIONS;

  return (
    <>
      <FooterLogoBar />
      <footer className="bg-white border-t border-gray-200">
        <div className="md:px-[84px] p-5 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About & Social */}
            <div className="space-y-[60px] max-w-[469px]">
              <FooterColumn title={about.title}>
                <p className="text-sm text-[#4D4D4D] font-[400]">
                  {about.content}
                </p>
              </FooterColumn>
              <FooterSocial />
              <FooterGuarantee />
            </div>

            {/* Column 2: Services & Links */}
            <div className="space-y-[60px] sm:ml-[70px]">
              <FooterColumn title={services.title}>
                <ul className="space-y-2">
                  {services.items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Image
                        src={ICONS.serivces[item.name].path}
                        alt={ICONS.serivces[item.name].alt}
                        height={1000}
                        width={1000}
                        className="w-[21px]"
                      />
                      <span className="ml-3 text-[#4D4D4D] font-[400] font-lora text-sm">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title={quickLinks.title}>
                <ul className="space-y-3">
                  {quickLinks.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-[400] font-lora text-[#4D4D4D]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title={policies.title}>
                <ul className="space-y-3">
                  {policies.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-[400] font-lora text-[#4D4D4D]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            {/* Column 3: Payments & Delivery */}
            <div className="space-y-[60px]">
              <FooterPaymentMethods />

              <FooterColumn title={delivery.title}>
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div className="w-24">
                      <Image
                        src={ICONS.shipping.gls.path}
                        alt={ICONS.shipping.gls.alt}
                        width={96}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm">{delivery.base}</span>
                      <span className="text-teal-500 font-bold">
                        {delivery.free}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs text-center rounded-sm">
                    {delivery.dimensions}
                  </div>
                  <p className="mt-2 text-xs">
                    {delivery.info
                      .split("click here")
                      .map((text, index, array) => {
                        if (index === array.length - 1) return text;
                        return (
                          <React.Fragment key={index}>
                            {text}
                            <a
                              href="#"
                              className="text-teal-500 hover:underline"
                            >
                              click here
                            </a>
                          </React.Fragment>
                        );
                      })}
                  </p>
                </div>
              </FooterColumn>
            </div>

            {/* Column 4: Newsletter & Contact */}
            <div className="space-y-[60px]">
              <FooterNewsletter />
              <FooterContact />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
