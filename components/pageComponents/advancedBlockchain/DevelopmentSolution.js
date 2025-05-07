import Images from "@/components/ui/image";
import React from "react";

export default function DevelopmentSolution({ data }) {
  return (
    <div>
      <h1 className="my-4 font-bold heading text-center">{data?.title}</h1>
      <p className="text-center">{data?.description}</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
        {data?.cards &&
          data?.cards?.length &&
          data?.cards?.map((item) => (
            <div
              className="p-4 rounded-[10px] border-b-4 border-[#6e47ff] flex flex-col justify-evenly"
              key={item?.id}
              style={{ boxShadow: "1px -1px 20px 1px rgba(175,134,228,.25)" }}
            >
              <div className="flex items-center">
                <Images Path={item?.image} width={50} />
                <h3 className="text-xl ml-4">{item?.title}</h3>
              </div>
              <p className="mt-4">{item?.description}</p>
              <div
                style={{
                  backgroundImage: "linear-gradient(90deg, #feb302, #fb8231)",
                }}
                className="rounded-[10px] flex justify-end items-center p-2 w-[30px] "
              >
                <Images Path={item?.buttonIcon} height={10} width={10} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
