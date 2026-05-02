import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/router";
import Extraordinary from "@/components/pageComponents/hire-developer/Extraordinary";
import Getintouch from "@/components/forms/GetInTouch";
import Cards from "@/components/pageComponents/hire-developer/Cards";
import TechStackCard from "@/components/pageComponents/hire-developer/TechStackCard";
import FAQ from "@/components/common-section/FAQ";

import hireDeveloperData from "@/data/hire-developer.json";

export default function HireDeveloper() {
  const router = useRouter();

  function handleClick() {
    router.push(hireDeveloperData?.banner?.button?.link);
  }

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${hireDeveloperData?.banner?.bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-[150px] banner-padding-x flex flex-col items-center"
      >
        <h1 className=" font-bold text-5xl text-white text-center">
          {hireDeveloperData?.banner?.title}
        </h1>
        <p className="md:text-[20px] w-2/3 text-[15px] text-white my-[20px] font-thin text-center">
          {hireDeveloperData?.banner?.description}
        </p>
        <Button size="lg" variant="default" onClick={handleClick}>
          {hireDeveloperData?.banner?.button?.title}
        </Button>
      </section>
      <section className=" my-[80px]">
        <Extraordinary
          data={hireDeveloperData?.ExtraordinaryCard}
          heading={hireDeveloperData?.ExtraordinaryTitle}
        />
      </section>
      <section className="container-padding-x my-[30px]">
        <h2 className=" font-bold text-3xl text-[#333]">
          {hireDeveloperData?.services?.title}
        </h2>
        <p className="text-[#6a7888] py-2">{hireDeveloperData?.services?.description}</p>
        <Cards data={hireDeveloperData?.services?.card} />
      </section>
      <section className="container-padding-x my-[20px]">
        <h2 className=" font-bold text-3xl text-[#333]">
          {hireDeveloperData?.techStackTitle}
        </h2>
        <TechStackCard data={hireDeveloperData?.techStackCards} />
      </section>
      <section>
        <FAQ data={hireDeveloperData?.FAQ} />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </>
  );
}
