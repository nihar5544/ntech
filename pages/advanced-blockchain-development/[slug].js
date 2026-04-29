import fs from "fs";
import path from "path";
import Getintouch from "@/components/forms/GetInTouch";
import BlockchainBanner from "@/components/pageComponents/advancedBlockchain/BlockchainBanner";
import BlockchainBenifits from "@/components/pageComponents/advancedBlockchain/BlockchainBenifits";
import BlockchainHireDeveloper from "@/components/pageComponents/advancedBlockchain/BlockchainHireDeveloper";
import BlockchainWhyChoose from "@/components/pageComponents/advancedBlockchain/BlockchainWhyChoose";
import ClassicFeatures from "@/components/pageComponents/advancedBlockchain/ClassicFeatures";
import DevelopmentSolution from "@/components/pageComponents/advancedBlockchain/DevelopmentSolution";
import Numbers from "@/components/pageComponents/advancedBlockchain/Numbers";
import Patners from "@/components/pageComponents/homepage/Patners";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import React from "react";
import FAQ from "@/components/common-section/FAQ";

function Blockchain({ data, testimonialsData, patnersData }) {
  return (
    <main>
      <section className="banner-padding-x">
        <BlockchainBanner data={data?.banner} />
      </section>
      <section className="container-padding-x my-[50px]">
        <Numbers data={data?.discussProject} />
      </section>
      <section className="container-padding-x my-[50px]">
        <DevelopmentSolution data={data?.developmentSolution} />
      </section>
      <section className="container-padding-x my-[50px]">
        <BlockchainHireDeveloper data={data?.hireDeveloper} />
      </section>
      <section>
        <ClassicFeatures data={data?.classicFeatures} />
      </section>
      <section className="container-padding-x my-[50px]">
        <BlockchainBenifits data={data?.benifits} />
      </section>
      <section className="container-padding-x my-[50px]">
        <BlockchainHireDeveloper data={data?.hireDeveloper2} />
      </section>
      <div style={{backgroundImage:"url(/images/image_13.webp)",backgroundSize:'cover'}} className="absolute h-[400px] w-full mt-[50px]"></div>

      <section className="w-full">
        <Patners data={patnersData?.patner} />
      </section>
      <section className="w-full my-[50px]">
        <BlockchainWhyChoose data={data?.whyChooseUs} />
      </section>
      <section className="flex items-start justify-center mb-10">
        <Testimonials
          testimonial={testimonialsData?.testimonial}
          heading={"Testimonials"}
        />
      </section>
      <section className='container-padding-x mb-[50px]'>
        <FAQ data={data?.FAQ} />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </main>
  );
}

export default Blockchain;

export async function getStaticPaths() {
  const dataDir = path.join(process.cwd(), "data", "advanced-blockchain-development");
  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(".json", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "advanced-blockchain-development",
      `${slug}.json`
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    const testimonialsPath = path.join(process.cwd(), "data", "shared", "testimonials.json");
    const testimonialsData = JSON.parse(fs.readFileSync(testimonialsPath, "utf8"));

    const partnersPath = path.join(process.cwd(), "data", "shared", "partners.json");
    const patnersData = JSON.parse(fs.readFileSync(partnersPath, "utf8"));

    return {
      props: {
        data,
        testimonialsData,
        patnersData,
      },
    };
  } catch (error) {
    console.error("Error loading blockchain data:", error);
    return { notFound: true };
  }
}
