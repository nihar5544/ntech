import React, { useState } from "react";
import MobileHeader from "./MobileHeader";
import ButtonMenu from "./ButtonMenu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import headerData from "@/data/header.json";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [flyer, setFlyer] = useState(false);
  const [flyertwo, setFlyertwo] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between w-full  md:space-x-10 border-b-2 border-gray-100 header-padding">
        <Link href={headerData?.home?.link ?? "/"}>
          <Image src="/images/logo.png" alt="ntech" width={120} height={40} className="h-10 w-auto object-contain" />
        </Link>
        <div className="-mr-2 -my-2 lg:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex justify-between xl:space-x-10 lg:space-x-4 md:space-x-1">
          <Link
            href={headerData?.home?.link ?? "/"}
            className={`text-base font-medium text-gray-500 hover:text-[#6b00d7] hover:underline underline-offset-8 ${router.pathname === headerData?.home?.link ? "text-[#6b00d7]" : ""}`}
          >
            {headerData?.home?.title}
          </Link>
          <Link
            href={headerData?.about?.link ?? "/"}
            className={`text-base font-medium text-gray-500 hover:text-[#6b00d7] hover:underline underline-offset-8 ${router.pathname === headerData?.about?.link ? "text-[#6b00d7]" : ""}`}
          >
            {headerData?.about?.title}
          </Link>
          <ButtonMenu
            title={headerData?.Services}
            submenu={headerData?.servicesDropdown}
            flyer={flyer}
            istitle={false}
            handleOpen={() => {
              setFlyer(true);
              setFlyertwo(false);
            }}
            handleClose={() => {
              setFlyer(false);
              setFlyertwo(false);
            }}
          />
          <ButtonMenu
            title={headerData?.industryDropdown?.title}
            submenu={headerData?.industryDropdown?.list}
            flyer={flyertwo}
            istitle={true}
            handleOpen={() => {
              setFlyer(false);
              setFlyertwo(true);
            }}
            handleClose={() => {
              setFlyer(false);
              setFlyertwo(false);
            }}
          />
          <Link
            href={headerData?.hiredeveloper?.link ?? "/"}
            className={`text-base font-medium text-gray-500 hover:text-[#6b00d7] hover:underline underline-offset-8 ${router.pathname === headerData?.hiredeveloper?.link ? "text-[#6b00d7]" : ""}`}
          >
            {headerData?.hiredeveloper?.title}
          </Link>
          <Link
            href={headerData?.clients?.link ?? "/"}
            className={`text-base font-medium text-gray-500 hover:text-[#6b00d7] hover:underline underline-offset-8 ${router.pathname === headerData?.clients?.link ? "text-[#6b00d7]" : ""}`}
          >
            {headerData?.clients?.title}
          </Link>
          <Link
            href={headerData?.media?.link ?? "/"}
            className={`text-base font-medium text-gray-500 hover:text-[#6b00d7] hover:underline underline-offset-8 ${router.pathname === headerData?.media?.link ? "text-[#6b00d7]" : ""}`}
          >
            {headerData?.media?.title}
          </Link>
        </nav>
        <div className="hidden lg:flex items-center justify-end lg:w-fit">
          <Button
            onClick={() => router.push(headerData?.Button?.link)}
            size="lg"
          >
            {headerData?.Button?.title}
          </Button>
        </div>
      </div>
      <MobileHeader headerData={headerData} setOpen={setOpen} open={open} />
    </header>
  );
}

export default Header;
