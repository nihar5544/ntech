import Icons from "@/components/Icons";
import ServiceHomecard from "@/components/cards/ServiceHomecard";
import Images from "@/components/ui/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ServicesHome({ service, heading }) {
  const [onHover, setOnHover] = useState({
    isShown1: false,
    id: "",
  });
  return (
    <section className="lg:pt-[100px] pt-[48px] ">
      <div className="container-padding-x  flex flex-col py-6 w-full">
        <div className="w-full lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2 justify-between items-center flex">
          <div className="lg:w-[5rem] w-[5%] flex-shrink-0 h-[1px] bg-gradient-to-r from-pink-600 to-purple-800"></div>
          <div className="tracking-wider uppercase font-sans lg:text-[14px] text-[10px] font-semibold">
            {heading?.SERVICES}
          </div>
          <div className="h-[1px] bg-gradient-to-r from-pink-600 to-purple-800 flex-1" />
        </div>
        <div className="py-[50px] grid grid-cols-1 gap-4 ">
          <h2 className="lg:!text-[40px] text-[25px] text-[#2F3241] heading1 font-bold">
            {service?.title}
          </h2>
          <p className="lg:text-[16px] text-[14px] text-[#000]">
            {service?.description}
          </p>
        </div>
      </div>
      <div className="xl:block hidden">
        <div
          className="flex justify-center items-center mt-[14%] flex-col"
          style={{
            backgroundImage: "url(/images/ourServices-bg.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <div
            style={{ boxShadow: "inset 0 2px 10px 2px rgba(162,48,237,.39)" }}
            className="rounded-full bg-white border-2 h-[500px] w-[500px] relative mt-[5%]"
          >
            <div className="flex justify-center mt-[18%]">
              <Image
                src="https://cdn.iconscout.com/icon/free/png-512/free-save-more-taxes-1817355-1538226.png?f=webp&w=512"
                alt="Picture of the author"
                width={150}
                height={150}
              />
            </div>
            <div className="absolute top-[32%] left-[-34%] flex gap-[271%]">
              <div
                onMouseEnter={() =>
                  setOnHover({
                    ...onHover,
                    isShown1: true,
                    id: service?.card[0]?.id,
                  })
                }
                onMouseLeave={() =>
                  setOnHover({ ...onHover, isShown1: false, id: "" })
                }
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <div className="border-r-2 border-[grey] absolute top-[-104px] right-[61px] w-full h-[90px]">
                  <h2 className="lg:text-[22px] text-[20px] flex flex-col font-bold ml-[-147%] ">
                    {service?.card[0]?.title}
                    {onHover.id === service?.card[0]?.id ? (
                      <span className="font-normal text-sm">
                        {service?.card[0]?.description}
                      </span>
                    ) : (
                      <></>
                    )}
                  </h2>
                </div>
                <span
                  className="rounded-full w-[112px] h-[112px] !bg-white flex justify-center items-center boxShadow"
                  style={{
                    border: "2px solid white",
                    padding: "27px",
                    boxShadow: "0 2px 5px rgba(0,0,0,.2)",
                  }}
                >
                  <Images Path={service?.card[0]?.icon} />
                </span>
              </div>
              <div
                onMouseEnter={() =>
                  setOnHover({
                    ...onHover,
                    isShown1: true,
                    id: service?.card[5]?.id,
                  })
                }
                onMouseLeave={() =>
                  setOnHover({ ...onHover, isShown1: false, id: "" })
                }
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <div className="border-l-2 border-[grey] absolute top-[-104px] left-[50%] w-[300px] h-[90px]">
                  <h2 className="ml-[20px] font-bold lg:text-[22px] flex flex-col text-[20px]">
                    {service?.card[5]?.title}
                    {onHover.id === service?.card[5]?.id ? (
                      <span className="font-normal text-sm">
                        {service?.card[5]?.description}
                      </span>
                    ) : (
                      <></>
                    )}
                  </h2>
                </div>
                <span
                  className="rounded-full w-[112px] h-[112px] bg-white flex justify-center items-center boxShadow"
                  style={{
                    border: "2px solid white",
                    padding: "27px",
                    boxShadow: "0 2px 5px rgba(0,0,0,.2)",
                  }}
                >
                  <Images Path={service?.card[5]?.icon} />
                </span>
              </div>
            </div>
            <div className="absolute top-[-27%] left-[20%] flex gap-[25%]">
              <div
                onMouseEnter={() =>
                  setOnHover({
                    ...onHover,
                    isShown1: true,
                    id: service?.card[2]?.id,
                  })
                }
                onMouseLeave={() =>
                  setOnHover({ ...onHover, isShown1: false, id: "" })
                }
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <div className="border-r-2 border-[grey] absolute top-[-110px] right-[60px] w-full h-[90px]">
                  <h2 className="lg:text-[22px] text-[20px] flex flex-col font-bold ml-[-110%]">
                    {service?.card[2]?.title}
                    {onHover.id === service?.card[2]?.id ? (
                      <span className="font-normal text-sm">
                        {service?.card[2]?.description}
                      </span>
                    ) : (
                      <></>
                    )}
                  </h2>
                </div>
                <span
                  className="rounded-full w-[112px] h-[112px] !bg-white flex justify-center items-center boxShadow"
                  style={{
                    border: "2px solid white",
                    padding: "27px",
                    boxShadow: "0 2px 5px rgba(0,0,0,.2)",
                  }}
                >
                  <Images Path={service?.card[2]?.icon} />
                </span>
              </div>
              <div
                onMouseEnter={() =>
                  setOnHover({
                    ...onHover,
                    isShown1: true,
                    id: service?.card[3]?.id,
                  })
                }
                onMouseLeave={() =>
                  setOnHover({ ...onHover, isShown1: false, id: "" })
                }
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <div className="border-l-2 border-[grey] absolute top-[-106px] left-[50%] w-[400px] h-[90px]">
                  <h3 className="ml-[20px] flex flex-col font-bold lg:text-[22px] text-[20px]">
                    {service?.card[3]?.title}
                    {onHover.id === service?.card[3]?.id ? (
                      <span className="font-normal text-sm">
                        {service?.card[3]?.description}
                      </span>
                    ) : (
                      <></>
                    )}
                  </h3>
                </div>
                <span
                  className="rounded-full w-[112px] h-[112px] !bg-white flex justify-center items-center boxShadow"
                  style={{
                    border: "2px solid white",
                    padding: "27px",
                    boxShadow: "0 2px 5px rgba(0,0,0,.2)",
                  }}
                >
                  <Images Path={service?.card[3]?.icon} />
                </span>
              </div>
            </div>
            <div className="absolute top-[-4%] left-[-16%] flex gap-[192%]">
              <div
                onMouseEnter={() =>
                  setOnHover({
                    ...onHover,
                    isShown1: true,
                    id: service?.card[1]?.id,
                  })
                }
                onMouseLeave={() =>
                  setOnHover({ ...onHover, isShown1: false, id: "" })
                }
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <div className="border-r-2 border-[grey] absolute top-[-104px] right-[56px] w-full h-[90px]">
                  <h3 className="lg:text-[22px] text-[20px] flex flex-col font-bold ml-[-204%]">
                    {service?.card[1]?.title}
                    {onHover.id === service?.card[1]?.id ? (
                      <span className="font-normal text-sm">
                        {service?.card[1]?.description}
                      </span>
                    ) : (
                      <></>
                    )}
                  </h3>
                </div>
                <span
                  className="rounded-full w-[112px] h-[112px] !bg-white flex justify-center items-center boxShadow"
                  style={{
                    border: "2px solid white",
                    padding: "27px",
                    boxShadow: "0 2px 5px rgba(0,0,0,.2)",
                  }}
                >
                  <Images Path={service?.card[1]?.icon} />
                </span>
              </div>
              <div
                onMouseEnter={() =>
                  setOnHover({
                    ...onHover,
                    isShown1: true,
                    id: service?.card[4]?.id,
                  })
                }
                onMouseLeave={() =>
                  setOnHover({ ...onHover, isShown1: false, id: "" })
                }
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <div className="border-l-2 border-[grey] absolute top-[-104px] left-[47%] w-[400px] h-[90px]">
                  <h3 className="ml-[20px] font-bold flex flex-col lg:text-[22px] text-[20px]">
                    {service?.card[4]?.title}
                    {onHover.id === service?.card[4]?.id ? (
                      <span className="font-normal text-sm">
                        {service?.card[4]?.description}
                      </span>
                    ) : (
                      <></>
                    )}
                  </h3>
                </div>
                <span
                  className="rounded-full w-[112px] h-[112px] !bg-white flex justify-center items-center boxShadow"
                  style={{
                    border: "2px solid white",
                    padding: "27px",
                    boxShadow: "0 2px 5px rgba(0,0,0,.2)",
                  }}
                >
                  <Images Path={service?.card[4]?.icon} />
                </span>
              </div>
            </div>
          </div>

          <div className="relative bottom-0 bg-white h-[200px] w-[87%] mt-[-200px]  border-t-2 border-[#b457c6]" />
        </div>
      </div>
      <ServiceHomecard service={service?.card} />
    </section>
  );
}

export default ServicesHome;
