import ApiService from "@/Services/ApiService";
import FAQ from "@/components/common-section/FAQ";
import Getintouch from "@/components/forms/GetInTouch";
import TrustUs from "@/components/pageComponents/aboutpage/TrustUs";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import Banner from "@/components/pageComponents/servicepages/Banner";
import CardSection from "@/components/pageComponents/servicepages/CardSection";
import ProjectInfo from "@/components/pageComponents/servicepages/ProjectInfo";
import UseCases from "@/components/pageComponents/servicepages/UseCases";
import React from "react";

function Post({ servicesData, testimonialsData }) {
  console.log("servicesData", servicesData);
  return (
    <main className="">
      <Banner servicesData={servicesData?.banner} />
      <section>
        <CardSection servicesData={servicesData?.developmentServices} />
      </section>
      <section className="">
        <ProjectInfo servicesData={servicesData?.automateTasks} />
      </section>
      <section>
        <TrustUs data={servicesData?.ClientsTrustUs}/>
      </section>
      <section>
        <UseCases data={servicesData?.moreUseCases} />
      </section>
      <section>
        <FAQ data={servicesData?.FAQ} />
      </section>
      <section className="flex items-start justify-center mb-10">
        <Testimonials
           testimonial={testimonialsData?.testimonial}
          heading={"Testimonials"}
        />
      </section>
      <section className="">
        <Getintouch/>
      </section>
    </main>
  );
}

export default Post;
export async function getServerSideProps(context) {
  const { slug } = context.params;
  try {
    const response = await ApiService.get(`api/services/${slug}`);
    console.log("response", response);
    const testimonials = await ApiService.get("api/testimonials/testimonial");
    const testimonialsData = testimonials.data.data.attributes;
    // Transform keys to camelCase
    const servicesData = transformKeysToCamelCase(
      response.data.data.attributes
    );

    return {
      props: {
        servicesData,
        testimonialsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        servicesData: null, // or some default value
        testimonialsData:null,
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
