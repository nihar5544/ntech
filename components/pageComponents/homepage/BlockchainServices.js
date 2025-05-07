import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

export default function BlockchainServices({ data, card, heading }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <>
      <div className="mb-4">
        <h2 className="heading">{data?.title}</h2>
        <p className="text-[17px] text-[#000] my-2">{data?.description}</p>
      </div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`w-full lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2 justify-between items-center flex  ${
          triggered ? "animate fadeInLeft three" : "hidden"
        }`}
      >
        <div className="lg:w-[5rem] w-[5%] flex-shrink-0 h-[1px] bg-gradient-to-r from-pink-600 to-purple-800"></div>
        <div className="tracking-wider lg:text-[14px] text-[10px] font-semibold text-[#000]">
          {heading?.INDUSTRIES}
        </div>
        <div className="h-[1px] bg-gradient-to-r from-pink-600 to-purple-800 flex-1" />
      </div>
      <div
        className={`grid lg:grid-cols-4 grid-cols-1 gap-8 mt-[30px] mb-[100px]  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        <div className="blockchain-servicesbgImage lg:flex hidden flex-col justify-center px-[7%]">
          <h3 className="text-[35px] py-4 font-bold text-white leading-[40px]">
            {card?.title}
          </h3>
          <h3 className="text-[16px] py-4 text-white">{card?.description}</h3>
        </div>
        <div className="col-span-3">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {card?.list &&
              card?.list.length &&
              card?.list.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[20px] w-fit cursor-pointer transform hover:scale-110 hover:shadow-lg bg-[#d8e3ff] hover:bg-[#fff] transition-transform duration-300 ease-in-out"
                  style={{ transition: "all 0.2s ease 0s" }}
                >
                  <Images
                    Path={item?.image}
                    height={100}
                    width={350}
                    className="md:max-h-[140px] md:min-h-[140px] rounded-t-[20px]"
                  />
                  <h3 className="text-[16px] text-center py-4 font-semibold">
                    {item?.title}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
