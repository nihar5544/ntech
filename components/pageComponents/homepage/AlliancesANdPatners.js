import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

export default function AlliancesANdPatners({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />

      <div
        className={`homepage-ourProjectBg container-padding-x py-[50px]  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        <h3 className="heading font-bold text-white text-center">
          {data?.title}
        </h3>
        <p className="text-[16px] py-4 text-white text-center">
          {data?.description}
        </p>
        <div className="flex md:flex-row flex-col gap-4 justify-between items-center mt-[30px]">
          {data?.images?.map((item) => (
            <div key={item?.id}>
              <Images
                Path={item?.image}
                alt={item?.image}
                height={200}
                width={100}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
