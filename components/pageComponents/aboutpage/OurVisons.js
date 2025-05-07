import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

function OurVisons({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="bg-[#02001c] banner-padding-x">
        <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div className="flex max-sm:flex-col gap-[100px]">
        <Images
          Path={data?.image}
          width={450}
          style={{ transform: "scaleX(-1)" }}
          className={` ${
            triggered ? "animate fadeInLeft three" : "hidden"
          }`}
        />
        <div
          className={`flex flex-col justify-around w-fit text-white  ${
            triggered ? "animate fadeInUp three" : "hidden"
          }`}
        >
          <div className="flex flex-col ">
            <span className="text-[35px] font-bold max-sm:my-4">
              {data?.ourVisionTitle}
            </span>
            <span>{data?.visionDescription}</span>
          </div>
          <div className="flex flex-col ">
            <span className="text-[35px] font-bold max-sm:my-4">
              {data?.ourMissionTitle}
            </span>
            <span>{data?.ourMissionDescription}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVisons;
