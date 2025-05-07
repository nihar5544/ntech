import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

export default function TechStackCard({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div className={` ${triggered ? "animate fadeInUp three" : "hidden"}`}>
        {data &&
          data?.length &&
          data.map((item) => (
            <div key={item?.id}>
              <h2 className=" font-bold  text-[#333] text-[22px] mt-8">
                {item?.title}
              </h2>
              <div className="flex justify-around gap-4 my-4 flex-wrap">
                {item?.image &&
                  item?.image?.length &&
                  item?.image?.map((img) => (
                    <span
                      key={img?.id}
                      className="flex justify-center items-center rounded-xl drop-shadow-md bg-white p-3 max-h-28 max-w-28"
                    >
                      <Images Path={img?.image} />
                    </span>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
