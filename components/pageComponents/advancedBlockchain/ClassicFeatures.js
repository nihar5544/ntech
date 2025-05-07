import Images from "@/components/ui/image";
import React from "react";

export default function ClassicFeatures({ data }) {
  return (
    <div
      className="container-padding-x py-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #4d2bb1 -1%, #161473 40%, #060624)",
      }}
    >
      <h2 className="my-4 font-bold heading text-center text-white">{data?.title}</h2>

      <p className="text-white my-4 text-center">{data?.description}</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
        {data?.cards &&
          data?.cards?.length &&
          data?.cards?.map((item) => (
            <div
              className="p-4 rounded-[10px] flex bg-white items-center"
              key={item?.id}
            >
              <Images Path={item?.image} width={70} />
              <div className="flex flex-col ml-2">
                <h3 className="text-xl text-[#7c4fff]">
                  {item?.subDesciption}
                </h3>
                <p className="mt-2">{item?.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
