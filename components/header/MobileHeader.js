import Link from "next/link";
import React, { useEffect } from "react";
import ButtonMenu from "./ButtonMenu";
import { Button } from "../ui/button";
import Images from "../ui/image";
import MobileSubMenu from "./MobileSubMenu";
import { useRouter } from "next/router";

function MobileHeader({ headerData, open, setOpen }) {
  const router = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [router]);
  return (
    <div
      className={
        open
          ? "opacity-100 scale-100 transition ease-out duration-200 fixed top-0 inset-x-0 p-2 transform origin-top-right lg:hidden"
          : "opacity-0 scale-95 fixed top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
      }
    >
      {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}
      <div
        className={
          open
            ? "rounded-lg over shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
            : "hidden"
        }
      >
        <div className="pt-5 pb-6  ">
          <div className="flex items-center px-5 justify-between">
            <div>
              <Images
                Path={headerData?.logo}
                width={200}
                height={30}
                className="p-2 "
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6  max-h-[80vh] px-5 overflow-y-scroll overflow-x-hidden">
            <nav className="grid gap-y-8">
              <Link
                href="/"
                className="-m-3 p-3 flex items-center rounded-md hover:bg-violet-50"
              >
                {headerData?.home?.title}
              </Link>
              <Link
                href={headerData?.about?.link ? headerData?.about?.link : "/"}
                className="-m-3 p-3 pb-0 flex items-center rounded-md hover:bg-violet-50"
              >
                {headerData?.about?.title}
              </Link>
              <MobileSubMenu headerData={headerData} />

              <Link
                href="#"
                className="-m-3 p-3 pt-0 flex items-center rounded-md hover:bg-violet-50"
              >
                {headerData?.hiredeveloper?.title}
              </Link>
              <Link
                href="#"
                className="-m-3 p-3 flex items-center rounded-md hover:bg-violet-50"
              >
                {headerData?.clients?.title}
              </Link>
              <Link
                href="#"
                className="-m-3 p-3 flex items-center rounded-md hover:bg-violet-50"
              >
                {headerData?.media?.title}
              </Link>
            </nav>
            <Button
              className={"mt-5 w-full"}
              onClick={() => router.push(headerData?.Button?.link)}
            >
              {headerData?.Button?.title}
            </Button>
          </div>
        </div>
        {/* <div className="py-6 px-5 space-y-6">
          <div className="">
          
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MobileHeader;
