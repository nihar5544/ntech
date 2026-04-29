import fs from "fs";
import path from "path";
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
        <TrustUs data={servicesData?.ClientsTrustUs} />
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
        <Getintouch />
      </section>
    </main>
  );
}

export default Post;

export async function getStaticPaths() {
  const dataDir = path.join(process.cwd(), "data", "services");
  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(".json", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  try {
    const filePath = path.join(process.cwd(), "data", "services", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const servicesData = JSON.parse(fileContents);

    const testimonialsPath = path.join(process.cwd(), "data", "shared", "testimonials.json");
    const testimonialsData = JSON.parse(fs.readFileSync(testimonialsPath, "utf8"));

    return {
      props: {
        servicesData,
        testimonialsData,
      },
    };
  } catch (error) {
    console.error("Error loading service data:", error);
    return { notFound: true };
  }
}
