import ApiService from "@/Services/ApiService";
import Getintouch from "@/components/forms/GetInTouch";
import Motivations from "@/components/pageComponents/aboutpage/Motivations";
import LeadershipTeam from "@/components/pageComponents/aboutpage/LeadershipTeam";
import OurCEO from "@/components/pageComponents/aboutpage/OurCEO";
import OurVisons from "@/components/pageComponents/aboutpage/OurVisons";
import TrustUs from "@/components/pageComponents/aboutpage/TrustUs";
import WhoWeAre from "@/components/pageComponents/aboutpage/WhoWeAre";
import Patners from "@/components/pageComponents/homepage/Patners";
import Project from "@/components/pageComponents/homepage/Project";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import React from "react";
import AlliancesANdPatners from "@/components/pageComponents/homepage/AlliancesANdPatners";

function AboutUs({ aboutUsPageData, testimonialsData, patnersData }) {
  // console.log("aboutUsPageData",aboutUsPageData)
  return (
    <main className="">
      {/* Who we are Banner */}
      <section className="">
        <WhoWeAre data={aboutUsPageData?.Banner} />
      </section>
      {/* Insights from our CEO */}
      <section>
        <OurCEO data={aboutUsPageData?.Insights} />
      </section>
      {/* Powered by Partners */}
      <section className="">
        <Patners data={patnersData?.patner} />
      </section>
      <section>
        <Motivations data={aboutUsPageData?.KeepsUsMotivated} />
      </section>
      <section>
        <AlliancesANdPatners data={aboutUsPageData?.alliancesAndPatners} />
      </section>
      <section>
        <TrustUs data={aboutUsPageData?.ClientsTrustUs} />
      </section>
      <section className="mb-[100px]">
        <OurVisons data={aboutUsPageData?.ourVision} />
      </section>
      <section className="container-padding-x my-9">
        <LeadershipTeam data={aboutUsPageData?.LeadershipTeam} />
      </section>
      <section className="mt-[100px]">
        <Project data={aboutUsPageData?.AIandBlockchainEvolution} />
      </section>
      <section className="flex items-start justify-center mb-10">
        <Testimonials
          testimonial={testimonialsData?.testimonial}
          heading={aboutUsPageData?.headings?.Testimonials}
        />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </main>
  );
}

export default AboutUs;

export async function getServerSideProps() {
  try {
    const response = await ApiService.get("api/about-us");
    const aboutUsPageData = response.data.data.attributes;
    const testimonials = await ApiService.get("api/testimonials/testimonial");
    const testimonialsData = testimonials.data.data.attributes;
    const patners = await ApiService.get("api/patners/patner");
    const patnersData = patners.data.data.attributes;
    return {
      props: {
        aboutUsPageData,
        testimonialsData,
        patnersData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        aboutUsPageData: null, // or some default value
        testimonialsData: null,
        patnersData: null,
      },
    };
  }
}
