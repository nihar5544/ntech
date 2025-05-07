import ScrollAnimation from "@/components/Animation";
import React, { useState } from "react";



export default function OurProjects({ card = dummyCards, data = dummyData }) {
  const [triggered, setTriggered] = useState(false);
  // console.log("card",card)
  return (
    <div className="homepage-ourProjectBg lg:h-[50rem] container-padding-x max-[700px]:py-[100px]">
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`bg-white py-[2rem] px-[3rem] rounded-[40px] lg:w-[40%] lg:absolute lg:mt-[-50px] border-2 border-[rgba(162, 48, 237, .2)] ${
          triggered ? "animate fadeInLeft three" : "hidden"
        } `}
      >
        <h2 className="text-4xl font-bold text-[#303030]">{data?.title}</h2>
        <h3 className="text-[#6f47ff] text-4xl font-bold my-2">
          {data?.subtitle}
        </h3>
        <p className="text-[15px]">{data?.description}</p>
      </div>
      <div
        className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:absolute xl:mt-[300px] lg:mt-[350px] md:mt-[100px] mt-[50px] md:pr-[4%]  auto-rows-fr ${
          triggered ? "animate fadeInUp three" : "hidden"
        } `}
      >
        {card &&
          card?.length &&
          card.map((item, i) => (
            <div key={i} className="!rounded-[40px] ">
              <h3
                className="text-[24px] p-8 text-center !rounded-t-[40px]"
                style={
                  i === 0
                    ? {
                        backgroundImage:
                          "linear-gradient(85deg, #a034c5 20%, #7b44d6)",
                        color: "#fff",
                      }
                    : {
                        backgroundImage:
                          "linear-gradient(157deg, #b6d0ff, #149afb)",
                        color: "#000",
                      }
                }
              >
                {item?.title}
              </h3>
              <div
                className={`flex flex-col bg-[#f6e6ff] px-4 rounded-b-[40px] pb-[50px] min-h-[450px]  ${
                  i === 0 ? "font-bold" : ""
                }`}
              >
                {item?.list &&
                  item?.list?.length &&
                  item?.list?.map((item1, i) => (
                    <div
                      key={item1?.id}
                      className={`p-5 text-center ${
                        i < item?.list.length - 1
                          ? "border-b-[1px] border-[#BBB3BF]"
                          : ""
                      }`}
                    >
                      <h3 className="">{item1?.title} </h3>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
