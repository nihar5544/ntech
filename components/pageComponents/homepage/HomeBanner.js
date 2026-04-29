import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function HomeBanner({ homePageData }) {
  const router = useRouter();

  return (
    <div className="relative banner-padding-x border-b-2">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-[-7%] -z-10 pointer-events-none">
        <Image
          src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65ba3577e6bcd882058fd2db_pink-gradient.png"
          alt=""
          height={0}
          width={0}
          className="w-fit lg:opacity-40 opacity-30"
        />
      </div>
      <div className="absolute bottom-0 right-0 -z-10 pointer-events-none">
        <Image
          src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65ba37cb765fea86adcf85fa_rapid-bg-purple.png"
          alt=""
          height={0}
          width={0}
          className="w-fit lg:opacity-40 opacity-30"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left — headline + CTA */}
        <div className="flex-1 max-w-xl z-10">
          <h1 className="gradient-clipping font-bold text-5xl leading-tight text-transparent bg-clip-text mb-5">
            {homePageData?.Banner?.title}
          </h1>
          <p className="md:text-[20px] text-[17px] text-[#5c5c5c] mb-8 font-light leading-relaxed">
            {homePageData?.Banner?.description}
          </p>
          <Button
            size="lg"
            variant="default"
            onClick={() => router.push(homePageData?.Banner?.Button?.link)}
          >
            {homePageData?.Banner?.Button?.title}
          </Button>
        </div>

        {/* Right — hero visual with floating cards */}
        <div className="hero-visual md:flex hidden flex-shrink-0">
          <div className="visual-shell">
            <img
              src={homePageData?.Banner?.image}
              alt="Digital solutions — ntech"
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="floating-card insight-card">
            <strong>What We Deliver</strong>
            <ul>
              <li>Web apps &amp; ecommerce stores</li>
              <li>Games, design &amp; branding</li>
              <li>SEO &amp; IT support</li>
            </ul>
          </div>

          <div className="floating-card metric-card">
            <strong>150+ Projects</strong>
            <p>Delivered across web, gaming, design and IT — on time, every time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
