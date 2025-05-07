import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

function WhoWeAre({ data }) {
  const [triggered, setTriggered] = useState(true);
  return (
    <div className="relative flex justify-center max-sm:flex-col items-center">
      <div
        className="w-full h-screen absolute -z-10 "
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/64bf9f837519806dd618348c/6528d30a40e92ae64ddb8eb3_Bg-min.png)",
        }}
      ></div>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`shadow-[0_0_40px_rgba(162,48,237,.19)] bg-white w-fit h-fit lg:p-10 p-4 max-sm:m-2 rounded-2xl z-20 lg:-mr-10  ${
          triggered ? "animate fadeInLeft three" : "hidden"
        }`}
      >
        <h1 className="text-7xl text-[#333] font-bold">
          {data?.title.split("WE")[0]}
          <br />
          {data?.title.split("WHO")[1]}
        </h1>
        <div className="h-2 rounded-xl from-yellow-500 to-orange-500 bg-gradient-to-r my-10 w-full" />
        <span className="w-fit">
          {data?.subtitle.split("Blockchain")[0]}
          <br />
          {data?.subtitle.split("Intelligence,")[1]}
        </span>
      </div>
      <div className={` ${triggered ? "animate fadeInUp three" : "hidden"}`}>
        <Images
          className="rounded-2xl"
          width={600}
          height={100}
          Path={data?.image}
        />
      </div>
    </div>
  );
}

export default WhoWeAre;
