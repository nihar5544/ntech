import ScrollAnimation from "@/components/Animation";
import { Button } from "@/components/ui/button";
import Images from "@/components/ui/image";
import React, { useState } from "react";

export default function SampleClientWork({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className=" flex max-lg:flex-col justify-between container-padding-x my-[80px]">
      <div>
        <Images Path={data?.image} height={300} width={600} />
      </div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`lg:w-[50%] flex flex-col justify-start  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        <h3 className="heading font-bold text-[#333333]">{data?.title}</h3>
        <p className="text-[18px] py-4 text-[#6A7888]">{data?.description}</p>
        <span>
          <Button>{data?.Button?.title}</Button>
        </span>
      </div>
    </div>
  );
}
