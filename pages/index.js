import Getintouch from "@/components/forms/GetInTouch";
import Experties from "@/components/pageComponents/homepage/Experties";
import Patners from "@/components/pageComponents/homepage/Patners";
import ServicesHome from "@/components/pageComponents/homepage/ServicesHome";
import OurProjects from "@/components/pageComponents/homepage/OurProjects";
import Project from "@/components/pageComponents/homepage/Project";
import BlockchainServices from "@/components/pageComponents/homepage/BlockchainServices";
import AlliancesANdPatners from "@/components/pageComponents/homepage/AlliancesANdPatners";
import SampleClientWork from "@/components/pageComponents/homepage/SampleClientWork";
import TechStack from "@/components/pageComponents/homepage/TechStack";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import HomeBanner from "@/components/pageComponents/homepage/HomeBanner";

import homepageData from "@/data/homepage.json";
import testimonialsData from "@/data/shared/testimonials.json";
import partnersData from "@/data/shared/partners.json";

export default function Home() {
  return (
    <main className="h-full">
      {/* --------Banner------------ */}
      <section className=" mb-2 relative">
        <HomeBanner homePageData={homepageData} />
      </section>
      {/* --------Our Services------ */}
      <section>
        <ServicesHome
          service={homepageData?.Services}
          heading={homepageData?.headings}
        />
      </section>
      {/* Powered by Partners */}
      <div style={{backgroundImage:"url(/images/image_13.webp)",backgroundSize:'cover'}} className="absolute h-[400px] w-full mt-[100px]"></div>
      <section className="w-full relative">
        <Patners data={partnersData?.patner} />
      </section>
      <section className="my-[100px] max-sm:mb-0 relative">
        <OurProjects
          data={homepageData?.ourProject}
          card={homepageData?.ourProjectList}
        />
      </section>
      <section className="container-padding-x relative">
        <Experties
          cardData={homepageData?.OurExpertiseCard}
          ourExpertise={homepageData?.ourExpertise}
          heading={homepageData?.headings}
        />
      </section>
      <section className="">
        <Project data={homepageData?.projectIdea} />
      </section>
      <section className="container-padding-x my-10">
        <BlockchainServices
          data={homepageData?.AiandBlockchainServices}
          card={homepageData?.AiandBlockchainCard}
          heading={homepageData?.headings}
        />
      </section>
      <section>
        <AlliancesANdPatners data={homepageData?.alliancesAndPartners} />
      </section>
      <section>
        <SampleClientWork data={homepageData?.sampleClientWork} />
      </section>
      <section className="flex items-start justify-center">
        <Testimonials
          testimonial={testimonialsData?.testimonial}
          heading={homepageData?.headings?.Testimonials}
        />
      </section>
      <section className="my-[50px]">
        <TechStack
          data={homepageData?.techStackArray}
          heading={homepageData?.headings}
        />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </main>
  );
}
