import ScrollAnimation from "@/components/Animation";
import React, { useState } from "react";

export default function Extraordinary({ data, heading }) {
  //   console.log("data", data);
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="container-padding-x">
      <h1 className="font-bold text-4xl mt-[50px] text-[#333] text-center">
        {heading}
      </h1>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 mb-[50px]  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        {data?.length &&
          data?.map((item) => (
            <div key={item?.id} className="pt-[50px]">
              <div
                className="py-4 px-2 min-h-[100px]"
                style={{
                  backgroundImage: "url(/images/extraBg.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className=" text-white text-center text-lg font-bold">
                  {item?.heading}
                </h3>
              </div>
              <div
                style={{ boxShadow: "0 7px 27px 1px rgba(162,48,237,.14)" }}
                className="min-h-[200px]"
              >
                {item?.list?.length &&
                  item?.list?.map((list) => (
                    <ul
                      key={list?.id}
                      className="text-black list-disc p-2 pl-6"
                    >
                      <li className="">{list?.title}</li>
                    </ul>
                  ))}
              </div>
              <div
                style={{
                  backgroundImage: "linear-gradient(253deg, #fa7002, #ffbb02)",
                }}
                className="rounded-[40px] w-full h-3"
              ></div>
            </div>
          ))}
        {data?.length &&
          data?.map((item) => (
            <div key={item?.id} className="pt-[50px]">
              <div
                className="py-4 px-2 min-h-[100px]"
                style={{
                  backgroundImage: "url(/images/extraBg.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className=" text-white text-center text-lg font-bold">
                  {item?.heading}
                </h3>
              </div>
              <div
                style={{ boxShadow: "0 7px 27px 1px rgba(162,48,237,.14)" }}
                className="min-h-[200px]"
              >
                {item?.list?.length &&
                  item?.list?.map((list) => (
                    <ul
                      key={list?.id}
                      className="text-black list-disc p-2 pl-6"
                    >
                      <li className="">{list?.title}</li>
                    </ul>
                  ))}
              </div>
              <div
                style={{
                  backgroundImage: "linear-gradient(253deg, #fa7002, #ffbb02)",
                }}
                className="rounded-[40px] w-full h-3"
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
}
