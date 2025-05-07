import ApiService from "@/Services/ApiService";
import Getintouch from "@/components/forms/GetInTouch";
import Patners from "@/components/pageComponents/homepage/Patners";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import BannerIndustry from "@/components/pageComponents/industrypage/BannerIndustry";
import IndustryCards from "@/components/pageComponents/industrypage/IndustryCards";
import WhyChoose from "@/components/pageComponents/industrypage/WhyChoose";
import UseCases from "@/components/pageComponents/servicepages/UseCases";

import React from "react";

function Post({ industryData, testimonialsData, patnersData }) {
  console.log("industryData", industryData);
  return (
    <main className="">
      <section>
        <BannerIndustry data={industryData?.banner} />
      </section>
      <section className="w-full">
        <Patners data={patnersData?.patner} />
      </section>
      <section>
      <IndustryCards data={industryData?.services} />
      </section>
      <section>
        <UseCases data={[industryData?.moreUseCases]} />
      </section>
      <section>
        <WhyChoose data={industryData?.whyChoose} />
      </section>
      <section className="flex items-start justify-center mb-10">
        <Testimonials
          testimonial={testimonialsData?.testimonial}
          heading={"Testimonials"}
        />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </main>
  );
}

export default Post;
export async function getServerSideProps(context) {
  const { slug } = context.params;
  try {
    const response = await ApiService.get(`api/industries/${slug}`);
    console.log("response", response);
    const testimonials = await ApiService.get("api/testimonials/testimonial");
    const testimonialsData = testimonials.data.data.attributes;
    const patners = await ApiService.get("api/patners/patner");
    const patnersData = patners.data.data.attributes;
    // Transform keys to camelCase
    const industryData = transformKeysToCamelCase(
      response.data.data.attributes
    );

    return {
      props: {
        industryData,
        testimonialsData,
        patnersData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        industryData: null, // or some default value
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
