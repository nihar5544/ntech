import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Project({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div
      className="banner-padding-x bg-no-repeat bg-cover text-white bg-right max-sm:bg-left"
      style={{
        backgroundImage: `url(${
          process.env.NEXT_PUBLIC_BASE_URL
        }${data?.image?.data?.attributes?.url
          ?.split("/")
          ?.splice(1)
          ?.join("/")})`,
      }}
    >
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`flex flex-col lg:w-1/2  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        <span className="text-4xl font-bold">{data?.title}</span>
        <span className="py-3">{data?.description}</span>
        <Link
          href={data?.Button?.link ? data?.Button?.link : "#"}
          className="font-semibold flex items-center"
        >
          {data?.Button?.title}
          <Images
            Path={data?.Button?.icon}
            height={20}
            width={20}
            className="ml-2"
          />
        </Link>
      </div>
    </div>
  );
}

export default Project;
