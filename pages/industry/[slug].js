import fs from "fs";
import path from "path";
import Getintouch from "@/components/forms/GetInTouch";
import Patners from "@/components/pageComponents/homepage/Patners";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import BannerIndustry from "@/components/pageComponents/industrypage/BannerIndustry";
import IndustryCards from "@/components/pageComponents/industrypage/IndustryCards";
import WhyChoose from "@/components/pageComponents/industrypage/WhyChoose";
import UseCases from "@/components/pageComponents/servicepages/UseCases";
import React from "react";

function Post({ industryData, testimonialsData, patnersData }) {
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

export async function getStaticPaths() {
  const dataDir = path.join(process.cwd(), "data", "industry");
  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(".json", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  try {
    const filePath = path.join(process.cwd(), "data", "industry", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const industryData = JSON.parse(fileContents);

    const testimonialsPath = path.join(process.cwd(), "data", "shared", "testimonials.json");
    const testimonialsData = JSON.parse(fs.readFileSync(testimonialsPath, "utf8"));

    const partnersPath = path.join(process.cwd(), "data", "shared", "partners.json");
    const patnersData = JSON.parse(fs.readFileSync(partnersPath, "utf8"));

    return {
      props: {
        industryData,
        testimonialsData,
        patnersData,
      },
    };
  } catch (error) {
    console.error("Error loading industry data:", error);
    return { notFound: true };
  }
}
