import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

function OurCEO({data}) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="banner-padding-x">
         <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div className={`container-padding-x flex max-sm:flex-col justify-evenly  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}>
       <Images Path={data?.image} width={500} className="lg:block hidden"/>
        <div className="flex flex-col lg:m-10 mt-10 justify-around text-[#333]">
          <span className="text-4xl font-bold  ">
            {data?.title}
          </span>
          <span className="text-3xl font-bold flex flex-col" >{data?.name}
          <span className="text-sm font-normal">
           {data?.position}
          </span>
          </span>
          <p className=" lg:text-center">
           {data?.discription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurCEO;
