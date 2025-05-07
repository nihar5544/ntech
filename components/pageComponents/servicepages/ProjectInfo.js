import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import Link from "next/link";
import React, { useState } from "react";

function ProjectInfo({ servicesData }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <>
      {servicesData ? (
        <div className="banner-padding-x">
          <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
          <div
            className="px-8 rounded-2xl bg-no-repeat w-full bg-cover text-white lg:bg-right  grid md:grid-cols-2 grid-cols-1 max-sm:p-5 items-center  "
            style={{
              backgroundImage: `url(${
                process.env.NEXT_PUBLIC_BASE_URL
              }${servicesData?.image?.data?.attributes?.url
                ?.split("/")
                ?.splice(1)
                ?.join("/")})`,
            }}
          >
            <div
              className={`flex flex-col justify-evenly h-full  ${
                triggered ? "animate fadeInUp three" : "hidden"
              }`}
            >
              <span className="text-3xl font-bold">{servicesData?.title}</span>
              <span className="py-6">{servicesData?.description}</span>
              <Link
                href={
                  servicesData?.Button?.link ? servicesData?.Button?.link : "#"
                }
                className="font-semibold flex items-center"
              >
                {servicesData?.Button?.title}
                <Images
                  Path={servicesData?.Button?.icon}
                  height={20}
                  width={20}
                  className="ml-2"
                />
              </Link>
            </div>
            <div className="items-end justify-end flex max-sm:hidden">
              <Images Path={servicesData?.sideImage} width={300} height={0} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProjectInfo;
