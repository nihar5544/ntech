import ScrollAnimation from "@/components/Animation";
import React, { useState } from "react";

function Motivations({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="banner-padding-x">
      <div className=" flex justify-center">
        <span className="heading font-bold  ">
          <span className="text-[#a230ed] mr-2">
            {data?.title.split("Keep")[0]}
          </span>
          {data?.title.split("NUMBERS")[1]}
        </span>
      </div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`flex justify-around max-sm:flex-col mt-10 flex-wrap  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        {data?.numbers?.length &&
          data?.numbers.map((item) => (
            <div
              key={item?.id}
              className="rounded-xl shadow-[0_7px_27px_1px_rgba(162,48,237,.14)] flex flex-col min-w-56 mb-8"
            >
              <div className=" flex flex-col items-center justify-evenly min-h-32">
                <span className="text-4xl font-bold">
                  {item.number}{" "}
                  <span className="text-[#a230ed]">{item?.sign}</span>
                </span>
                <span className="mt-2">{item?.title}</span>
              </div>
              <div className="h-5 rounded-xl from-yellow-500 to-orange-500 bg-gradient-to-r -mb-2 w-full" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Motivations;
