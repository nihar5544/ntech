import React from "react";
import Images from "../ui/image";

export default function ServiceHomecard({ service }) {
  return (
    <div className="xl:hidden block container-padding-x mb-[50px]">
      <div className="grid grid-cols-1 gap-4">
        {service &&
          service?.length &&
          service?.map((item) => (
            <div key={item?.id} className="">
              <div
                className="bg-white h-20 w-20 rounded-[10px] p-2 flex justify-center my-2"
                style={{ boxShadow: "2px 2px 6px 1px rgba(162,48,237,.2)" }}
              >
                <Images Path={item.icon} height={40} width={40} />
              </div>
              <h3 className="py-2 font-bold text-[18px]">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
