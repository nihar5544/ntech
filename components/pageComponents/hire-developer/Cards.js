import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

export default function Cards({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        {data?.length &&
          data?.map((item) => (
            <div
              className="bg-white p-4 my-8"
              style={{ boxShadow: "-1px 7px 24px rgba(162,48,237,.05)" }}
              key={item?.id}
            >
              <Images Path={item?.icon} className="rounded-full" />
              <h4 className="text-[#333] text-[20px] font-bold my-2">
                {item?.title}
              </h4>
              <p>{item?.description}</p>
            </div>
          ))}
        {data?.length &&
          data?.map((item) => (
            <div
              className="bg-white p-4 my-8"
              style={{ boxShadow: "-1px 7px 24px rgba(162,48,237,.05)" }}
              key={item?.id}
            >
              <Images Path={item?.icon} className="rounded-full" />
              <h4 className="text-[#333] text-[20px] font-bold my-2">
                {item?.title}
              </h4>
              <p>{item?.description}</p>
            </div>
          ))}
        {data?.length &&
          data?.map((item) => (
            <div
              className="bg-white p-4 my-8"
              style={{ boxShadow: "-1px 7px 24px rgba(162,48,237,.05)" }}
              key={item?.id}
            >
              <Images Path={item?.icon} className="rounded-full" />
              <h4 className="text-[#333] text-[20px] font-bold my-2">
                {item?.title}
              </h4>
              <p>{item?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
