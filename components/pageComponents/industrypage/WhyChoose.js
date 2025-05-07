import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

function WhyChoose({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="banner-padding-x">
      <div className=" !pb-0">
        <div className="w-full lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2 justify-between items-center flex ">
          <div className="lg:w-[5rem] w-[5%] flex-shrink-0 h-[1px] bg-gradient-to-r from-pink-600 to-purple-800"></div>
          <div className="tracking-wider uppercase font-sans lg:text-[14px] text-[10px] font-semibold ">
            {data?.title}
          </div>
          <div className="h-[1px] bg-gradient-to-r from-pink-600 to-purple-800 flex-1" />
        </div>

        <h1 className="text-[#333333] font-bold heading  my-[20px]">
          {data?.title}
        </h1>
        <span className="py-6">{data?.description}</span>
      </div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div className=" mt-20">
        <div className=" relative px-8 rounded-2xl shadow-[3px_3px_9.4px_2px_rgba(0,0,0,.25)] w-full text-[#33333]   max-sm:p-5 items-center">
          <div
            className={`flex flex-col justify-evenly h-full lg:w-3/5 pb-32 lg:pb-0 ${
              triggered ? "animate fadeInLeft three" : "hidden"
            }`}
          >
            <span className="pt-6 text-md">{data?.card?.description}</span>
            <span className="py-6 text-md text-[#582fcb] font-bold">
              {data?.card?.subDesciption}
            </span>
          </div>
          <div
            className={`items-end justify-end flex absolute lg:-right-24 lg:-top-10 max-lg:-bottom-20 ${
              triggered ? "animate fadeInUp three" : "hidden"
            }`}
          >
            <Images Path={data?.card?.image} width={500} height={0} className='lg:block hidden' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
