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

const dummyData = {
  homePageData: {
    Services: {
        title: "Comprehensive Financial Solutions",
        description: "We offer a wide range of financial services to help you achieve your goals",
        card: [
          {
            id: 1,
            title: "Tax Planning",
            description: "Strategic tax planning to minimize your tax liability",
            icon: "/icons/tax-planning.svg"
          },
          {
            id: 2, 
            title: "Investment Advisory",
            description: "Expert guidance for your investment portfolio",
            icon: "/icons/investment.svg"
          },
          {
            id: 3,
            title: "Wealth Management",
            description: "Comprehensive wealth management solutions",
            icon: "/icons/wealth.svg"
          },
          {
            id: 4,
            title: "Risk Management",
            description: "Protecting your assets through risk assessment",
            icon: "/icons/risk.svg"
          },
          {
            id: 5,
            title: "Estate Planning",
            description: "Secure your family's financial future",
            icon: "/icons/estate.svg"
          },
          {
            id: 6,
            title: "Retirement Planning",
            description: "Plan for a comfortable retirement",
            icon: "/icons/retirement.svg"
          }
        ]}
    ,
    headings: {
      Services: "Our Services",
      Expertise: "Our Expertise",
      Projects: "Our Projects",
      Blockchain: "Blockchain Services",
      Testimonials: "What Clients Say"
    },
    ourProject:  {
      title: "Our Projects",
      subtitle: "Building the Future",
      description: "We create innovative blockchain solutions that transform industries."
    },
    ourProjectList: [
      {
        title: "Premium Plan",
        list: [
          { id: 1, title: "Advanced Trading Tools" },
          { id: 2, title: "24/7 Support" },
          { id: 3, title: "Custom Analytics" },
          { id: 4, title: "Priority Access" }
        ]
      },
      {
        title: "Standard Plan",
        list: [
          { id: 1, title: "Basic Trading Tools" },
          { id: 2, title: "Email Support" },
          { id: 3, title: "Market Analysis" },
          { id: 4, title: "Regular Access" }
        ]
      },
      {
        title: "Basic Plan",
        list: [
          { id: 1, title: "Essential Tools" },
          { id: 2, title: "Community Support" },
          { id: 3, title: "Basic Reports" },
          { id: 4, title: "Standard Access" }
        ]
      },
      {
        title: "Free Plan",
        list: [
          { id: 1, title: "Limited Tools" },
          { id: 2, title: "Forum Support" },
          { id: 3, title: "Basic Stats" },
          { id: 4, title: "Basic Access" }
        ]
      }
    ],
    OurExpertiseCard: [
      {
        icon: "/images/expertise/blockchain.svg",
        title: "Blockchain Development",
        list: [
          { id: 1, title: "Smart Contract Development" },
          { id: 2, title: "DApp Development" },
          { id: 3, title: "Token Development" }
        ]
      },
      {
        icon: "/images/expertise/web3.svg", 
        title: "Web3 Solutions",
        list: [
          { id: 1, title: "Wallet Integration" },
          { id: 2, title: "NFT Marketplaces" },
          { id: 3, title: "DeFi Platforms" }
        ]
      },
      {
        icon: "/images/expertise/consulting.svg",
        title: "Blockchain Consulting",
        list: [
          { id: 1, title: "Technical Architecture" },
          { id: 2, title: "Security Audits" },
          { id: 3, title: "Strategy Planning" }
        ]
      }
    ],
    ourExpertise:  {
      title: "Our Expertise",
      description: "We specialize in blockchain technology and Web3 development solutions"
    },
    projectIdea:  {
      image: "/images/partners/partner1.png",
      title: "Our Trusted Partners",
      subtitle: "We collaborate with industry leaders to provide the best solutions",
      patnersImage: [
        {
          id: 1,
          image: "/images/partners/logo1.png"
        },
        {
          id: 2, 
          image: "/images/partners/logo2.png"
        },
        {
          id: 3,
          image: "/images/partners/logo3.png"
        },
        {
          id: 4,
          image: "/images/partners/logo4.png"
        },
        {
          id: 5,
          image: "/images/partners/logo5.png"
        }
      ]
    },
    AiandBlockchainServices: {
      title: "AI & Blockchain",
      description: "Next-gen technology solutions"
    },
    AiandBlockchainCard: [
      { title: "AI Integration", description: "Smart automation" },
      { title: "Blockchain Security", description: "Robust protection" }
    ],
    alliancesAndPartners: {
      title: "Our Partners",
      partners: ["Partner 1", "Partner 2", "Partner 3"]
    },
    sampleClientWork: {
      title: "Client Projects",
      projects: ["Project A", "Project B", "Project C"]
    },
    techStackArray: [
      "React", "Node.js", "Solidity", "Python", "AWS"
    ]
  },
  testimonialsData: {
    heading: "What Our Clients Say About Us",
    card: [
      {
        image: "/images/testimonial1.jpg",
        icon: "/images/avatar1.jpg", 
        name: "John Smith",
        position: "CEO, Tech Solutions",
        rating: 5,
        description: "Working with this team has been an absolute pleasure. Their expertise and dedication have helped us achieve remarkable results.",
        Button: "Read More",
        buttonIcon: "/images/arrow-right.svg"
      },
      {
        image: "/images/testimonial2.jpg",
        icon: "/images/avatar2.jpg",
        name: "Sarah Johnson",
        position: "Marketing Director, Growth Co",
        rating: 5,
        description: "The level of professionalism and innovation they bring to the table is outstanding. Highly recommended!",
        Button: "Read More",
        buttonIcon: "/images/arrow-right.svg"
      },
      {
        image: "/images/testimonial3.jpg", 
        icon: "/images/avatar3.jpg",
        name: "Michael Chen",
        position: "Founder, StartUp Inc",
        rating: 5,
        description: "Their strategic approach and attention to detail have been instrumental in our success. A truly exceptional team.",
        Button: "Read More",
        buttonIcon: "/images/arrow-right.svg"
      }
    ]
  
  },
  patnersData: {
    patner: [
      { name: "Microsoft", logo: "/images/microsoft.png" },
      { name: "Amazon", logo: "/images/amazon.png" },
      { name: "Google", logo: "/images/google.png" }
    ]
  }
};

export default function Home() {
  const { homePageData, testimonialsData, patnersData } = dummyData;

  return (
    <main className="h-full">
      {/* --------Banner------------ */}
      <section className=" mb-2 relative">
        <HomeBanner homePageData={homePageData} />
      </section>
      {/* --------Our Services------ */}
      <section>
        <ServicesHome
          service={homePageData?.Services}
          heading={homePageData?.headings}
        />
      </section>
      {/* Powered by Partners */}
      <div style={{backgroundImage:"url(/images/image_13.webp)",backgroundSize:'cover'}} className="absolute h-[400px] w-full mt-[100px]"></div>
      <section className="w-full relative">
        <Patners data={patnersData?.patner} />
      </section>
      <section className="my-[100px] max-sm:mb-0 relative">
        <OurProjects
          data={homePageData?.ourProject}
          card={homePageData?.ourProjectList}
        />
      </section>
      <section className="container-padding-x relative">
        <Experties
          cardData={homePageData?.OurExpertiseCard}
          ourExpertise={homePageData?.ourExpertise}
          heading={homePageData?.headings}
        />
      </section>
      <section className="">
        <Project data={homePageData?.projectIdea} />
      </section>
      <section className="container-padding-x my-10">
        <BlockchainServices
          data={homePageData?.AiandBlockchainServices}
          card={homePageData?.AiandBlockchainCard}
          heading={homePageData?.headings}
        />
      </section>
      <section>
        <AlliancesANdPatners data={homePageData?.alliancesAndPartners} />
      </section>
      <section>
        <SampleClientWork data={homePageData?.sampleClientWork} />
      </section>
      <section className="flex items-start justify-center">
        <Testimonials
          testimonial={testimonialsData}
          heading={homePageData?.headings?.Testimonials}
        />
      </section>
      <section className="my-[50px]">
        <TechStack
          data={homePageData?.techStackArray}
          heading={homePageData?.headings}
        />
      </section>
      <section className="">
        <Getintouch />
      </section>
    </main>
  );
}

// Removed getServerSideProps since we're using dummy data
