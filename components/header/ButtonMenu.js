import Link from "next/link";
import React, { useState } from "react";

function ButtonMenu({
  title,
  submenu,
  flyer,
  handleOpen,
  handleClose,
  istitle,
}) {
  // const [flyer, setFlyer] = useState(false);
  return (
    <div className="relative">
      {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
      <button
        type="button"
        className="
     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 cursor-pointer pb-8'
    "
        onClick={() => handleOpen()}
      >
        <span>{title}</span>
        <svg
          className={
            flyer === true
              ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
              : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/*
'Solutions' flyout menu, show/hide based on flyout menu state.

Entering: "transition ease-out duration-200"
From: "opacity-0 translate-y-1"
To: "opacity-100 translate-y-0"
Leaving: "transition ease-in duration-150"
From: "opacity-100 translate-y-0"
To: "opacity-0 translate-y-1"
*/}

      <div
        onMouseLeave={() => handleClose()}
        className={
          flyer
            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen   max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden"
        }
      >
        {istitle ? (
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative  bg-white grid  grid-cols-2 px-5 py-6">
              {submenu &&
                submenu?.length &&
                submenu?.map((item, i) => (
                  <div key={i} className="flex items-center justify-center p-2">
                    <Link href={item.link ? item.link : "#"} className="leading-7 font-semibold hover:text-[#6b00d7]">
                      {item.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative flex bg-white px-5 py-6">
              {submenu &&
                submenu?.length &&
                submenu?.map((item, i) => (
                  <div key={i} className="flex flex-col p-2">
                    <span className="font-bold pb-3">{item.title}</span>
                    {item?.list &&
                      item?.list?.length &&
                      item.list.map((items, index) => (
                        <Link
                          href={items.link ? items.link : "#"}
                          className="leading-7 text-sm hover:font-semibold hover:text-[#6b00d7] cursor-pointer"
                          key={index}
                        >
                          {items.title}
                        </Link>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ButtonMenu;
