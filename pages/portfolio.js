import ApiService from "@/Services/ApiService";
import TrustUs from "@/components/pageComponents/aboutpage/TrustUs";
import ClientBanner from "@/components/pageComponents/clientpage/ClientBanner";
// import ClientCaseStudies from "@/components/pageComponents/clientpage/ClientCaseStudies";
import Patners from "@/components/pageComponents/homepage/Patners";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import WhyChoose from "@/components/pageComponents/industrypage/WhyChoose";
import React from "react";

function Clients({ clientsData, testimonialsData, patnersData }) {
  return (
    <div>
      <section>
        <ClientBanner data={clientsData?.banner} />
      </section>
      <div style={{backgroundImage:"url(/images/image_13.webp)",backgroundSize:'cover'}} className="absolute h-[400px] w-full mt-[30px]"></div>

      <section className="relative">
        <Patners data={patnersData?.patner} />
      </section>
      {/* <section>
        <ClientCaseStudies />
      </section> */}
      <section>
        <TrustUs data={clientsData?.ClientsTrustUs} />
      </section>
      <section>
        <WhyChoose data={clientsData?.whyChooseUs} />
      </section>
      <section className="flex items-start justify-center mb-10 ">
        <Testimonials
          testimonial={testimonialsData?.testimonial}
          heading={clientsData?.headings?.Testimonials}
        />
      </section>
    </div>
  );
}

export default Clients;
export async function getServerSideProps() {
  try {
    const response = await ApiService.get("api/portfolio");
    const clientsData = response.data.data.attributes;
    const testimonials = await ApiService.get("api/testimonials/testimonial");
    const testimonialsData = testimonials.data.data.attributes;
    const patners = await ApiService.get("api/patners/patner");
    const patnersData = patners.data.data.attributes;
    return {
      props: {
        clientsData,
        testimonialsData,
        patnersData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        clientsData: null, // or some default value
        testimonialsData: null,
        patnersData: null,
      },
    };
  }
}
