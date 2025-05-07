import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import Image from "next/image";
import React, { useState } from "react";

function TrustUs({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="banner-padding-x">
      <div className="flex flex-col justify-center">
        <span className="heading">
          {data?.title?.split("Clients")[0]}
          <span className="text-[#6e48ff]">{data?.title?.split("Our")[1]}</span>
        </span>
        <span className="my-10">{data?.subtitle}</span>
      </div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div className={`flex justify-around max-sm:items-center flex-wrap  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}>
        {data?.list?.length &&
          data?.list?.map((item) => (
            <div
              key={item?.id}
              className="rounded-xl shadow-[0_7px_27px_1px_rgba(162,48,237,.14)] relative m-5 w-fit max-w-60"
            >
              <div className="p-10 pl-6 flex flex-col items-start">
                <Images Path={item?.image} height={50} width={50} />
                <span className="mt-4 ">{item?.title}</span>
              </div>
              <div className="w-full h-24 max-w-[1.2rem] bg-[#132162] rounded-[4px] flex-col justify-end items-center pb-4 flex absolute -top-2 bottom-auto left-auto right-[1.125rem]">
                <div className="w-full h-full max-w-4 max-h-4 bg-[#fff] rounded-[50%]"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TrustUs;
