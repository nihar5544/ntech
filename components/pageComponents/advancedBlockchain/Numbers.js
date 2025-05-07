import { Button } from "@/components/ui/button";
import React from "react";

export default function Numbers({ data }) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, #4e2bb1, #17157b 43%, #0f0e40)",
      }}
      className="flex flex-col container-padding-x justify-between rounded-[10px] py-4"
    >
        <div className='flex md:flex-row flex-col justify-between'>

      {data?.numbers?.length &&
        data?.numbers &&
        data?.numbers.map((item) => (
          <div key={item?.id}>
            <div className="flex flex-col items-center">
              <div className="flex">
                <span className="text-white text-4xl font-bold">{item?.number}</span>
                <span className="text-white text-4xl font-bold">{item?.sign}</span>
              </div>
              <p className="text-white text-xl py-2">{item?.title}</p>
            </div>
           
          </div>
        ))}
        </div>
         <Button className='mx-auto mt-4'>{data?.button?.title}</Button>
    </div>
  );
}
