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

import aboutUsData from "@/data/about-us.json";
import testimonialsData from "@/data/shared/testimonials.json";
import partnersData from "@/data/shared/partners.json";

function AboutUs() {
  return (
    <main className="">
      {/* Who we are Banner */}
      <section className="">
        <WhoWeAre data={aboutUsData?.Banner} />
      </section>
      {/* Insights from our CEO */}
      <section>
        <OurCEO data={aboutUsData?.Insights} />
      </section>
      {/* Powered by Partners */}
      <section className="">
        <Patners data={partnersData?.patner} />
      </section>
      <section>
        <Motivations data={aboutUsData?.KeepsUsMotivated} />
      </section>
      <section>
        <AlliancesANdPatners data={aboutUsData?.alliancesAndPatners} />
      </section>
      <section>
        <TrustUs data={aboutUsData?.ClientsTrustUs} />
      </section>
      <section className="mb-[100px]">
        <OurVisons data={aboutUsData?.ourVision} />
      </section>
      <section className="container-padding-x my-9">
        <LeadershipTeam data={aboutUsData?.LeadershipTeam} />
      </section>
      <section className="mt-[100px]">
        <Project data={aboutUsData?.AIandBlockchainEvolution} />
      </section>
      <section className="flex items-start justify-center mb-10">
        <Testimonials
          testimonial={testimonialsData?.testimonial}
          heading={aboutUsData?.headings?.Testimonials}
        />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </main>
  );
}

export default AboutUs;
