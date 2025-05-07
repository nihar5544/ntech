import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import Image from "next/image";
import React, { useState } from "react";

function IndustryCards({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="banner-padding-x">
      <div className="my-16 mb-16">
        <h1 className="text-[#333333] font-bold heading my-[20px]  ">
          {data?.title}
        </h1>
        <span className="py-6">{data?.description}</span>
      </div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-16 mb-[100px]  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        {data?.card &&
          data?.card?.length &&
          data?.card?.map((items, i) => (
            <div
              key={items?.id}
              className="w-fit h-full bg-white  border border-[#a230ed] rounded-2xl p-4 relative"
            >
              <div>
                {" "}
                <Images
                  Path={items?.icon}
                  alt="section card"
                  width={60}
                  className="rounded-full "
                  height={0}
                />
              </div>
              <div className=" rounded-b-2xl p-3 flex flex-col">
                <span className="font-bold text-xl mb-4">{items?.title}</span>
                <span className="text-sm">{items?.description}</span>
              </div>
              <Image src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65b0e0f456a2428d52c44c09_Vector%202.svg"
               alt="card"
               width={60}
               height={0}
               className="absolute right-0 top-0 rounded-tr-2xl"
               />
            </div>
          ))}
      </div>
    </div>
  );
}

export default IndustryCards;
