import ScrollAnimation from "@/components/Animation";
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
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {card?.list &&
              card?.list.length &&
              card?.list.map((item) => (
                <article
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl cursor-pointer h-[200px] group"
                >
                  <img
                    src={item?.image}
                    alt={item?.alt || item?.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-[15px] font-bold leading-tight">{item?.title}</p>
                    <span className="text-[12px] font-normal text-white/70">{item?.tag}</span>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
