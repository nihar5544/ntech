import { Button } from "@/components/ui/button";
import Images from "@/components/ui/image";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function HomeBanner({homePageData}) {
    const router = useRouter()
    function handleClick() {
      router.push(homePageData?.Banner?.Button?.link)
    }
  return (
    <>
      <div className="flex items-start xl:justify-between drop-shadow-2xl border border-b-2 relative">
        <div className="banner-padding-x py-0 ">
          <h1 className="gradient-clipping font-bold text-5xl text-transparent bg-clip-text my-[20px] md:w-1/2 ">
            {homePageData?.Banner?.title}
          </h1>
          <p className="md:text-[20px] w-2/3 text-[18px] text-[#5c5c5c] my-[20px]  font-thin">
            {homePageData?.Banner?.description}
          </p>

          <Button
            size="lg"
            variant="default"
            // className="text-black bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-md flex-shrink-0 px-[2rem] py-[1rem]  text-base font-semibold transition-all duration-200"
            onClick={handleClick}
          >
            {homePageData?.Banner?.Button?.title}
          </Button>
          <div className="absolute lg:bottom-0 lg:left-0 lg:right-auto w-full top-auto bottom-[0%] -z-10 left-[-7%] right-auto">
            <Image
              // src={`${process.env.imageBasePath}/images/web3Image.webp`}
              src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65ba3577e6bcd882058fd2db_pink-gradient.png"
              alt="banner-side-image"
              height={0}
              width={0}
              className="w-fit  lg:opacity-40 opacity-30"
            />
          </div>
          <div className="absolute lg:bottom-0 lg:left-auto lg:right-0 bottom-[0%] right-[0%] -z-10">
            <Image
              // src={`${process.env.imageBasePath}/images/web3Image.webp`}
              src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65ba37cb765fea86adcf85fa_rapid-bg-purple.png"
              alt="banner-side-image"
              height={0}
              width={0}
              className="w-fit  lg:opacity-40 opacity-30"
            />
          </div>
        </div>
      </div>

      <Images
        Path={homePageData?.Banner?.image}
        className="absolute md:right-[3%] lg:right-[5%] top-0 bottom-0 xl:right-[14%] 2xl:right-[15%] rounded-[10px] md:block hidden"
        height={100}
        width={210}
      />
    </>
  );
}

export default HomeBanner;
