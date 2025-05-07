import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

function CardSection({ servicesData }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <>
      {servicesData ? (
        <div className="">
          <div className="container-padding-x py-[50px] grid grid-cols-1 gap-4 text-[#333] ">
            <h2 className="lg:!text-[40px] text-[25px]  heading1 font-bold">
              {servicesData?.title}
            </h2>
            <p className="lg:text-[16px] text-[14px] ">
              {servicesData?.description}
            </p>
          </div>
          <div className="w-full lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2 justify-between items-center flex ">
            <div className="lg:w-[5rem] w-[5%] flex-shrink-0 h-[1px] bg-gradient-to-r from-pink-600 to-purple-800"></div>
            <div className="tracking-wider uppercase font-sans lg:text-[14px] text-[10px] font-semibold ">
              {servicesData?.subtitle}
            </div>
            <div className="h-[1px] bg-gradient-to-r from-pink-600 to-purple-800 flex-1" />
          </div>
          <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
          <div >
            <div
              className="bg-no-repeat bg-cover w-full container-padding-x bg-center mt-20"
              style={{
                backgroundImage:
                  "url(https://assets-global.website-files.com/64bf9f837519806dd618348c/65435a4bb7ee72030ccff0b4_dark%20blue%20section%202.webp)",
              }}
            >
              <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 px-10 auto-rows-fr ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}>
                {servicesData?.cards &&
                  servicesData?.cards.length &&
                  servicesData?.cards.map((item) => (
                    <div
                      key={item?.id}
                      className="w-fit h-full bg-white  drop-shadow-lg rounded-2xl"
                    >
                      <div>
                        {" "}
                        <Images
                          Path={item?.image}
                          alt="section card"
                          width={0}
                          className="rounded-t-2xl w-full"
                          height={0}
                        />
                      </div>
                      <div className=" rounded-b-2xl p-4 flex flex-col">
                        <span className="font-bold text-lg mb-4">
                          {item?.title}
                        </span>
                        <span className="text-sm">{item?.description}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default CardSection;
