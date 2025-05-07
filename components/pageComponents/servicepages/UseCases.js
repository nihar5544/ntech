import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

function UseCases({ data }) {
  const [title, setTitle] = useState( data[0]?.title ? data[0]?.title : "");
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="my-10">
      <div className="container-padding-x">
        <div className="w-full lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2 justify-between items-center flex container-padding-x">
          <div className="lg:w-[5rem] w-[5%] flex-shrink-0 h-[1px] bg-gradient-to-r from-pink-600 to-purple-800"></div>
          <div className="tracking-wider uppercase font-sans lg:text-[14px] text-[10px] font-semibold ">
            EXPLORE MORE USE CASES
          </div>
          <div className="h-[1px] bg-gradient-to-r from-pink-600 to-purple-800 flex-1" />
        </div>
        <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
        <div
          className={`flex flex-wrap w-full gap-4 container-padding-x my-[50px]  ${
            triggered ? "animate fadeInLeft three" : "hidden"
          }`}
        >
          {data &&
            data.length &&
            data?.map((item, i) => (
              <div
                onClick={() => setTitle(item?.title)}
                key={i}
                className={`border-2 border-[#000] rounded-[10px] p-2 cursor-pointer ${
                  title === item?.title ? "text-white bg-[#000]" : ""
                }`}
              >
                <h3>{item?.title}</h3>
              </div>
            ))}
        </div>
        <div
          className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container-padding-x mb-[100px]  ${
            triggered ? "animate fadeInUp three" : "hidden"
          }`}
        >
          {data &&
            data.length &&
            data?.map((item) => (
              <>
                {item?.cards?.map((items, i) =>
                  item.title === title ? (
                    <div
                      key={items?.id}
                      className="w-fit h-full bg-white  drop-shadow-lg rounded-2xl"
                    >
                      <div>
                        {" "}
                        <Images
                          Path={items?.image}
                          alt="section card"
                          width={0}
                          className="rounded-t-2xl w-full"
                          height={0}
                        />
                      </div>
                      <div className=" rounded-b-2xl p-4 flex flex-col">
                        <span className="font-bold text-lg mb-4">
                          {items?.title}
                        </span>
                        <span className="text-sm">{items?.description}</span>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UseCases;
