import React from "react";
import Images from "@/components/ui/image";

export default function MediaBanner({ mediaPageData }) {
  console.log("mediaPageData", mediaPageData);
  return (
    <section
      style={{
        backgroundImage: `url(/images/mediaBnr.webp)`,
        backgroundRepeate: "no-repeate",
        backgroundSize: "cover",
      }}
      className="banner-padding-x flex justify-center items-center"
    >
      <div className="">
        <h1 className="font-bold text-5xl text-white">
          {mediaPageData?.banner?.title}
        </h1>
        <p className="md:text-[20px] text-[15px] text-white my-[20px] font-thin">
          {mediaPageData?.banner?.description}
        </p>
      </div>
      <Images
        Path={mediaPageData?.banner?.image}
        width={600}
        className="lg:block hidden"
      />
    </section>
  );
}
