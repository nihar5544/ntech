import ApiService from "@/Services/ApiService";
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
import WhyChoose from "@/components/pageComponents/industrypage/WhyChoose";

import React from "react";
import FAQ from './../../components/common-section/FAQ';

function Blockchain({ data, testimonialsData, patnersData }) {
  console.log("data", data);
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

export async function getServerSideProps(context) {
  const { slug } = context.params;
  try {
    const response = await ApiService.get(
      `api/blockchain-developments/${slug}`
    );
    console.log("response", response);
    const testimonials = await ApiService.get("api/testimonials/testimonial");
    const testimonialsData = testimonials.data.data.attributes;
    const patners = await ApiService.get("api/patners/patner");
    const patnersData = patners.data.data.attributes;
    // Transform keys to camelCase
    const data = transformKeysToCamelCase(response.data.data.attributes);

    return {
      props: {
        data,
        testimonialsData,
        patnersData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: null, // or some default value
        testimonialsData: null,
        patnersData: null,
      },
    };
  }
}

// Utility function to transform keys to camelCase
function transformKeysToCamelCase(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformKeysToCamelCase);
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/-([a-z])/g, (match) => match[1].toUpperCase()),
      transformKeysToCamelCase(value),
    ])
  );
}
