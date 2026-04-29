import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

function Patners({ data }) {
  const [triggered, setTriggered] = useState(false);
  const row1 = data?.row1 || [];
  const row2 = data?.row2 || [];

  return (
    <div>
      <div className="flex container-padding-x max-sm:flex-col items-center">
        <Images
          Path={data?.image}
          width={100}
          height={100}
          className="mr-5 shadow-[0_2px_5px_1px_rgba(136,47,159,.38)] rounded-xl p-4 py-5"
        />
        <div className="py-[50px] grid grid-cols-1 gap-4">
          <h2 className="lg:!text-[40px] text-[25px] text-[#2F3241] heading1 font-bold">
            {data?.title}
          </h2>
          <p className="lg:text-[16px] text-[14px] text-[#000]">
            {data?.subtitle}
          </p>
        </div>
      </div>

      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />

      <div className={`${triggered ? "animate fadeInUp three" : "hidden"}`}>
        <div className="slider">
          <div className="slide-track">
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className={`tech-tile${item?.whiteBg ? " tech-tile--white-bg" : ""}`}
              >
                <img
                  src={item?.image}
                  alt={item?.alt || item?.name}
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <span>{item?.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="slider">
          <div className="slide-track-rev">
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className={`tech-tile${item?.whiteBg ? " tech-tile--white-bg" : ""}`}
              >
                <img
                  src={item?.image}
                  alt={item?.alt || item?.name}
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <span>{item?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patners;
