import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState } from "react";

export default function TechStack({ data, heading }) {
  const [title, setTitle] = useState("LANGUAGES");
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="container-padding-x">
      <h3 className="heading font-bold text-black text-center">
        {heading?.TechStack}
      </h3>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`flex flex-wrap w-full gap-4 container-padding-x my-[50px]  ${
          triggered ? "animate fadeInLeft three" : "hidden"
        }`}
      >
        {data &&
          data?.length &&
          data?.map((item, i) => (
            <div
              onClick={() => setTitle(item?.title)}
              key={i}
              className={`border-2 border-[#000] rounded-[10px] p-2 cursor-pointer ${
                title === item.title ? "text-white bg-[#000]" : ""
              }`}
            >
              <h3>{item?.title}</h3>
            </div>
          ))}
      </div>
      <div
        className={`grid xl:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-4 container-padding-x mb-[100px]  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        {data &&
          data?.length &&
          data?.map((item) => (
            <>
              {item?.image?.map((items, i) =>
                item.title === title ? (
                  <div
                    key={items.id}
                    className="flex justify-center items-center rounded-xl drop-shadow-md bg-white p-3 max-h-28 max-w-28"
                  >
                    <Images
                      Path={items?.image}
                      alt={items?.image}
                      height={100}
                      width={110}
                    />
                  </div>
                ) : (
                  <></>
                )
              )}
            </>
          ))}
      </div>
    </div>
  );
}
