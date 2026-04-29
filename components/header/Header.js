import React, { useState } from "react";
import MobileHeader from "./MobileHeader";
import ButtonMenu from "./ButtonMenu";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import headerData from "@/data/header.json";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [flyer, setFlyer] = useState(false);
  const [flyertwo, setFlyertwo] = useState(false);

  const navLinkClass = (path) =>
    `text-base font-medium underline-offset-8 hover:underline transition-colors duration-150 ${
      router.pathname === path
        ? "text-brand"
        : "text-muted-foreground hover:text-brand"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between w-full md:space-x-10 header-padding">
        <Link href={headerData?.home?.link ?? "/"}>
          <Image
            src="/images/logo.png"
            alt="ntech"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Mobile hamburger */}
        <div className="-mr-2 -my-2 lg:hidden">
          <button
            type="button"
            className="rounded-md p-2 inline-flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex justify-between xl:space-x-10 lg:space-x-4 md:space-x-1">
          <Link href={headerData?.home?.link ?? "/"} className={navLinkClass(headerData?.home?.link)}>
            {headerData?.home?.title}
          </Link>
          <Link href={headerData?.about?.link ?? "/"} className={navLinkClass(headerData?.about?.link)}>
            {headerData?.about?.title}
          </Link>
          <ButtonMenu
            title={headerData?.Services}
            submenu={headerData?.servicesDropdown}
            flyer={flyer}
            istitle={false}
            handleOpen={() => { setFlyer(true); setFlyertwo(false); }}
            handleClose={() => { setFlyer(false); setFlyertwo(false); }}
          />
          <ButtonMenu
            title={headerData?.industryDropdown?.title}
            submenu={headerData?.industryDropdown?.list}
            flyer={flyertwo}
            istitle={true}
            handleOpen={() => { setFlyer(false); setFlyertwo(true); }}
            handleClose={() => { setFlyer(false); setFlyertwo(false); }}
          />
          <Link href={headerData?.hiredeveloper?.link ?? "/"} className={navLinkClass(headerData?.hiredeveloper?.link)}>
            {headerData?.hiredeveloper?.title}
          </Link>
          <Link href={headerData?.clients?.link ?? "/"} className={navLinkClass(headerData?.clients?.link)}>
            {headerData?.clients?.title}
          </Link>
          <Link href={headerData?.media?.link ?? "/"} className={navLinkClass(headerData?.media?.link)}>
            {headerData?.media?.title}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button onClick={() => router.push(headerData?.Button?.link)} size="lg">
            {headerData?.Button?.title}
          </Button>
        </div>
      </div>

      <MobileHeader headerData={headerData} setOpen={setOpen} open={open} />
    </header>
  );
}

export default Header;
