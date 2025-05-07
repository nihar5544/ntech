import { Button } from "@/components/ui/button";
import Images from "@/components/ui/image";
import React from "react";

export default function BlockchainWhyChoose({ data }) {
  return (
    <div className="container-padding-x">
      <h2 className="my-4 font-bold heading text-center">{data?.title}</h2>
      <p className="text-center">{data?.description}</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
        {data?.card &&
          data?.card?.length &&
          data?.card?.map((item) => (
            <div
              className="p-4 rounded-[10px] border-b-4 border-[#6e47ff] flex flex-col "
              key={item?.id}
              style={{ boxShadow: "1px -1px 20px 1px rgba(175,134,228,.25)" }}
            >
              <Images Path={item?.image} width={70} />
              <h3 className="text-xl mt-2">{item?.subDesciption}</h3>
              <p className="mt-2">{item?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
