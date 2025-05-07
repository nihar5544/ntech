import { Button } from "@/components/ui/button";
import Images from "@/components/ui/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner({ servicesData }) {
  return (
    <>
      {servicesData ? (
        <div className="bg-[#010101] banner-padding-x rounded-2xl flex items-center justify-center">
          <div className="flex flex-col text-white ">
            <span className="lg:text-6xl text-4xl  font-bold ">{servicesData?.title}</span>
            <span className="my-10 text-xl">{servicesData?.description}</span>
            <div className="">
              <Button size="xl">
                {" "}
                {servicesData?.schedualCallButton?.title}
              </Button>
              <Button variant="secondary" size="xl" className="lg:ml-10 mt-10">
                {servicesData?.projectCostButton?.title}
              </Button>
            </div>
          </div>
          <Images
            Path={servicesData?.image}
            className="max-sm:hidden"
            height={600}
            width={600}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Banner;
