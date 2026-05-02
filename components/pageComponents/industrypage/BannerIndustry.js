import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import React from "react";

function BannerIndustry({ data }) {
  const router = useRouter();
  function handleClick() {
    router.push(data?.button?.link);
  }
  return (
    <div
      style={{
        backgroundImage: `url(${typeof data?.bgImage === "string" ? data.bgImage : `${process.env.NEXT_PUBLIC_BASE_URL}${data?.bgImage?.data?.attributes?.url?.split("/")?.splice(1)?.join("/")}`})`,
      }}
    >
      <div className="banner-padding-x py-0 ">
        <h1 className="text-[#333333] font-bold text-5xl  bg-clip-text my-[20px] md:w-1/2 ">
          {data?.title}
        </h1>
        <p className="md:text-[20px] md:w-2/3 text-[18px] text-[#5c5c5c] my-[20px]  font-thin">
          {data?.description}
        </p>

        <Button
          size="lg"
          variant="default"
          // className="text-black bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-md flex-shrink-0 px-[2rem] py-[1rem]  text-base font-semibold transition-all duration-200"
          onClick={handleClick}
        >
          {data?.button?.title}
        </Button>
      </div>
    </div>
  );
}

export default BannerIndustry;
