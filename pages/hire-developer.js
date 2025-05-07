import ApiService from "@/Services/ApiService";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/router";
import Extraordinary from "@/components/pageComponents/hire-developer/Extraordinary";
import Getintouch from "@/components/forms/GetInTouch";
import Cards from "@/components/pageComponents/hire-developer/Cards";
import TechStackCard from "@/components/pageComponents/hire-developer/TechStackCard";
import FAQ from "@/components/common-section/FAQ";

export default function HireDeveloper({ data }) {
  const imageURL = ` ${
    process.env.NEXT_PUBLIC_BASE_URL
  }${data?.banner?.bgImage?.data?.attributes?.url
    ?.split("/")
    ?.splice(1)
    ?.join("/")}`;
  console.log("hireDeveloper", data);

  const router = useRouter();
  function handleClick() {
    router.push(data?.banner?.button?.link);
  }
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundRepeate: "no-repeate",
        }}
        className="py-[150px] banner-padding-x flex flex-col items-center"
      >
        <h1 className=" font-bold text-5xl text-white text-center">
          {data?.banner?.title}
        </h1>
        <p className="md:text-[20px] w-2/3 text-[15px] text-white my-[20px] font-thin text-center">
          {data?.banner?.description}
        </p>
        <Button size="lg" variant="default" onClick={handleClick}>
          {data?.banner?.button?.title}
        </Button>
      </section>
      <section className=" my-[80px]">
        <Extraordinary
          data={data?.ExtraordinaryCard}
          heading={data?.ExtraordinaryTitle}
        />
      </section>
      <section className="container-padding-x my-[30px]">
        <h2 className=" font-bold text-3xl text-[#333]">
          {data?.services?.title}
        </h2>
        <p className="text-[#6a7888] py-2">{data?.services?.description}</p>
        <Cards data={data?.services?.card} />
      </section>
      <section className="container-padding-x my-[20px]">
        <h2 className=" font-bold text-3xl text-[#333]">
          {data?.techStackTitle}
        </h2>
        <TechStackCard data={data?.techStackCards} />
      </section>
      <section>
        <FAQ data={data?.FAQ} />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await ApiService.get("api/hire-developer");
    const data = response.data.data.attributes;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        homePageData: null,
      },
    };
  }
}
