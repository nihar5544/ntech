import React from "react";
import Images from "../ui/image";

export default function LeadershipCards({ data }) {
  return (
    <div className="lg:mb-[250px] xl:mb-10 relative">
      <div className=" ">
        <Images Path={data?.image} width={400} />
      </div>
      <div className="bg-white p-4 rounded-xl md:absolute md:-mt-[200px] lg:-mt-[100px] xl:-mt-[180px] -mt-[20px]" style={{boxShadow:'0 2px 15px rgba(111,71,255,.38)'}}>
        <div className="flex justify-between items-center">
          <h3 className="text-[30px] font-semibold text-[#333333]">{data.title}</h3>
          <span className="bg-[#6f47ff] p-2 rounded-full">
            <Images Path={data?.socialIcon} width={20} />
          </span>
        </div>
        <span className="text-[#a230ed] text-[18px]">{data?.position}</span>
        <p className="py-[10px]">
            {data?.description}
        </p>
      </div>
    </div>
  );
}
