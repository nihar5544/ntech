import { Button } from "@/components/ui/button";
import Images from "@/components/ui/image";
import React from "react";

export default function BlockchainBanner({ data }) {
  return (
    <div className="flex w-full justify-between">
      <div className="lg:w-1/2">
        <Images Path={data?.dotImage} />
        <h1 className="my-4">
          <span className="gradient-clipping font-bold text-5xl text-transparent bg-clip-text my-[20px] md:w-1/2 ">{data?.title}</span>
        </h1>
        <p className="py-4">{data?.description}</p>
        <span className="flex md:flex-row flex-col max-sm:justify-between">
          <Button>{data?.button?.title}</Button>
          <Button className='md:ml-4 max-md:mt-4'>{data?.button2?.title}</Button>
        </span>
      </div>
      <Images Path={data?.sideImage} className="min-h-[200px] min-w-[400px] rounded-[30px] lg:block hidden" />
    </div>
  );
}
