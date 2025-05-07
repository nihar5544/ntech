import Images from "@/components/ui/image";
import Image from "next/image";
import React from "react";

function ClientBanner({ data }) {
  return (
    <div className="relative">
      <div className="bg-blue-900 w-full lg:h-[600px] h-96 drop-shadow-xl top-0 absolute -z-10" />
      <div className="flex justify-center items-center py-10">
        <h1 className="text-white lg:text-6xl text-3xl font-semibold text-center">
          {data?.title.split("Into")[0]}
          <br />
          {data?.title.split("Peek")[1]}
        </h1>
      </div>

      <Images Path={data?.image} className={"w-full"} />
    </div>
  );
}

export default ClientBanner;
