import TrustUs from "@/components/pageComponents/aboutpage/TrustUs";
import ClientBanner from "@/components/pageComponents/clientpage/ClientBanner";
import Patners from "@/components/pageComponents/homepage/Patners";
import Testimonials from "@/components/pageComponents/homepage/Testimonials";
import WhyChoose from "@/components/pageComponents/industrypage/WhyChoose";
import React from "react";

import portfolioData from "@/data/portfolio.json";
import testimonialsData from "@/data/shared/testimonials.json";
import partnersData from "@/data/shared/partners.json";

function Clients() {
  return (
    <div>
      <section>
        <ClientBanner data={portfolioData?.banner} />
      </section>
      <div style={{backgroundImage:"url(/images/image_13.webp)",backgroundSize:'cover'}} className="absolute h-[400px] w-full mt-[30px]"></div>

      <section className="relative">
        <Patners data={partnersData?.patner} />
      </section>
      <section>
        <TrustUs data={portfolioData?.ClientsTrustUs} />
      </section>
      <section>
        <WhyChoose data={portfolioData?.whyChooseUs} />
      </section>
      <section className="flex items-start justify-center mb-10 ">
        <Testimonials
          testimonial={testimonialsData?.testimonial}
          heading={portfolioData?.headings?.Testimonials}
        />
      </section>
    </div>
  );
}

export default Clients;
