import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ScrollAnimation from "../Animation";

import footerData from "@/data/footer.json";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [triggered, setTriggered] = useState(false);

  return (
    <footer>
      <div className="">
        <footer
          className="border-b-2 container-padding-x pb-[30px] pt-[60px] mt-[0px] z-[2] relative reveal bg-[#02001c]"
          style={{ borderColor: "#ffffff91" }}
        >
          <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
          <div
            className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:space-x-10 md:space-y-10 space-x-5 space-y-5 md:auto-rows-fr ${
              triggered ? "animate fadeInUp three" : "hidden"
            }`}
          >
            {/* Logo & Description */}
            <span className="flex flex-col mt-6 justify-center">
              <Image src="/images/logo.png" alt="ntech" width={120} height={40} className="h-10 w-auto object-contain p-1" />
              <p className=" text-[16px] font-normal mt-[25px] text-[white]">
                {footerData?.title}
              </p>
              <p className="text-[16px] font-normal mt-[26px] text-[white]">
                {footerData?.description}
              </p>
              <span className="flex justify-center items-center mt-[22px] gap-x-6">
                {footerData?.socialMedia?.map((item) => (
                  <a
                    key={item?.id}
                    href={item?.link}
                    target="_blank"
                    className="cursor-pointer text-[#979797] hover:text-[#ffbb02] text-sm"
                    rel="noreferrer"
                    aria-label={item?.title}
                  >
                    {item?.title}
                  </a>
                ))}
              </span>
            </span>

            {/* Supported Networks Col 1 */}
            <span className="flex flex-col text-white lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                Supported Networks
              </h3>
              {footerData?.supportedNetworks1?.map((item) => (
                <span key={item?.title} className="flex py-2 nav_bar_font">
                  <Link href={item?.link} className="hover:text-[#ffbb02] text-[#979797]">
                    {item?.title}
                  </Link>
                </span>
              ))}
            </span>

            {/* Supported Networks Col 2 */}
            <span className="flex flex-col text-white lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                Supported Networks
              </h3>
              {footerData?.supportedNetworks2?.map((item) => (
                <span key={item?.title} className="flex py-2 nav_bar_font">
                  <Link href={item?.link} className="hover:text-[#ffbb02] text-[#979797]">
                    {item?.title}
                  </Link>
                </span>
              ))}
            </span>

            {/* Company Links */}
            <span className="flex flex-col lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                Company
              </h3>
              {footerData?.companyLinks?.map((item) => (
                <span key={item?.title} className="nav_bar_font pb-2">
                  <Link href={item?.link} className="hover:text-[#ffbb02] text-[#979797]">
                    {item?.title}
                  </Link>
                </span>
              ))}
            </span>

            {/* Useful Links */}
            <span className="flex flex-col text-white lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                USEFUL LINKS
              </h3>
              {footerData?.usefulLinks?.map((item) => (
                <span key={item?.title} className="flex py-2 nav_bar_font">
                  <Link href={item?.link} className="hover:text-[#ffbb02] text-[#979797]">
                    {item?.title}
                  </Link>
                </span>
              ))}
            </span>

            {/* Connect */}
            <span className="flex flex-col text-white lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                CONNECT
              </h3>
              {footerData?.connectLinks?.map((item) => (
                <span key={item?.title} className="flex py-2 nav_bar_font">
                  <Link href={item?.link} className="hover:text-[#ffbb02] text-[#979797]">
                    {item?.title}
                  </Link>
                </span>
              ))}
            </span>

            {/* Locations */}
            <span className="flex flex-col text-white lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                LOCATIONS
              </h3>
              {footerData?.locations?.map((item) => (
                <span key={item?.title} className="flex py-2 nav_bar_font">
                  <Link href={item?.link} className="hover:text-[#ffbb02] text-[#979797]">
                    {item?.title}
                  </Link>
                </span>
              ))}
            </span>
          </div>
        </footer>
        <div className="w-full flex md:flex-row lg:flex-row xl:flex-row flex-col justify-between items-start container-padding-x py-2 bg-[#02001c]">
          <span className="text-[white] text-[16px] nav_bar_font">
            Copyright &copy; {currentYear} ntech. All rights reserved.
          </span>
          <div className="flex">
            <Link href={"/privacy-policy"}>
              <span className="text-[white] hover:text-[#ffbb02] text-[16px] nav_bar_font">
                Privacy Policy
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
