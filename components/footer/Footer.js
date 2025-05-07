import ApiService from "@/Services/ApiService";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Images from "../ui/image";
import ScrollAnimation from "../Animation";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [footerData, setFooterData] = useState();
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    ApiService.get("api/footers")
      .then((value) => {
        setFooterData(value?.data?.data[0]?.attributes);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log("Footer Data", footerData);

  return (
    <footer>
      <div className="">
        <footer
          className="border-b-2 container-padding-x pb-[30px] pt-[60px] mt-[0px] z-[2] relative reveal bg-[#02001c]"
          style={{ borderColor: "#ffffff91" }}
        >
          <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
          <div
            className={`grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:space-x-10 md:space-y-10  space-x-5 space-y-5 md:auto-rows-fr  ${
              triggered ? "animate fadeInUp three" : "hidden"
            }`}
          >
            <span className="flex flex-col mt-6 justify-center">
              <Images
                Path={footerData?.logo}
                width={200}
                height={30}
                className="p-2 "
              />
              <p className=" text-[16px] font-normal mt-[25px] text-[white]">
                {footerData?.title}
              </p>
              <p className="text-[16px] font-normal mt-[26px] text-[white]">
                {footerData?.description}
              </p>
              <span className="flex justify-center items-center mt-[22px] gap-x-6">
                <a
                  onMouseEnter={() => setIsMouseIn("LinkedIn")}
                  onMouseLeave={() => setIsMouseIn("")}
                  href="https://www.linkedin.com/company/coindeltaio/"
                  target="_blank"
                  className="cursor-pointer"
                  rel="noreferrer"
                  aria-label="Linkedin"
                ></a>
                <a
                  onMouseEnter={() => setIsMouseIn("Twitter")}
                  onMouseLeave={() => setIsMouseIn("")}
                  href="https://twitter.com/CoinDeltaio"
                  target="_blank"
                  className="cursor-pointer"
                  rel="noreferrer"
                  aria-label="Twitter"
                ></a>
                <a
                  onMouseEnter={() => setIsMouseIn("facebook")}
                  onMouseLeave={() => setIsMouseIn("")}
                  href="https://www.facebook.com/people/Coindelta/61550862007144/?mibextid=ZbWKwL"
                  target="_blank"
                  className="cursor-pointer"
                  rel="noreferrer"
                  aria-label="facebook"
                ></a>
                <a
                  onMouseEnter={() => setIsMouseIn("youtube")}
                  onMouseLeave={() => setIsMouseIn("")}
                  href="https://www.youtube.com/@kcoindelta"
                  target="_blank"
                  className="cursor-pointer"
                  rel="noreferrer"
                  aria-label="Youtube"
                ></a>
              </span>
            </span>
            <span className="flex flex-col text-white  lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                Supported Networks
              </h3>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/avalanche"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Avalanche (AVAX)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/ethereum"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Ethereum 2.0 (ETH)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/polkadot"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Polkadot (DOT)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/chainlink"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Chainlink (Link)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/ssv-network"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake SSV (SSV)
                </Link>
              </span>
            </span>
            <span className="flex flex-col text-white  lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                Supported Networks
              </h3>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/thegraph"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake The Graph (GRT)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/render"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Render (RNDR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/arweave"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Arweave (AR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/cosmos"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Cosmos (ATOM)
                </Link>
              </span>
            </span>
            <span className="flex flex-col lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                Company
              </h3>
              <span className="nav_bar_font pb-2">
                <Link
                  href={"/"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Home
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"services/consulting-services"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Services
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"products/token-craft"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Products
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/about-us"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Company
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"https://docs.coindelta.io/"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Docs
                </Link>
              </span>
            </span>

            <div className="flex flex-col lg:mt-0 mt-6">
              {footerData?.socialMedia &&
                footerData?.socialMedia.length &&
                footerData?.socialMedia?.map((item) => (
                  <div key={item?.id} className="flex items-center mb-3">
                    <span className="p-2.5 bg-white rounded-full ">
                      <Images Path={item?.image} height={20} width={20} />
                    </span>
                    <Link
                      href={"/about-us"}
                      className="hover:text-[#ffbb02] text-[#979797] ml-3"
                    >
                      {item?.title}
                    </Link>
                  </div>
                ))}
            </div>
            <span className="flex flex-col text-white  lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                USEFUL LINKS
              </h3>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/thegraph"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake The Graph (GRT)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/render"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Render (RNDR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/arweave"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Arweave (AR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/cosmos"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Cosmos (ATOM)
                </Link>
              </span>
            </span>
            <span className="flex flex-col text-white  lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                CONNECT
              </h3>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/thegraph"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake The Graph (GRT)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/render"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Render (RNDR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/arweave"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Arweave (AR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/cosmos"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Cosmos (ATOM)
                </Link>
              </span>
            </span>
            <span className="flex flex-col text-white  lg:mt-0 mt-6">
              <h3 className="text-[16px] font-bold pb-[10px] text-[white]">
                LOCATIONS
              </h3>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/thegraph"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake The Graph (GRT)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/render"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Render (RNDR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/arweave"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Arweave (AR)
                </Link>
              </span>
              <span className="flex py-2 nav_bar_font">
                <Link
                  href={"/networks/cosmos"}
                  className="hover:text-[#ffbb02] text-[#979797]"
                >
                  Stake Cosmos (ATOM)
                </Link>
              </span>
            </span>
          </div>
        </footer>
        {/* <div className="w-full flex md:flex-row lg:flex-row xl:flex-row flex-col justify-between items-start container-padding-x py-2 bg-[#02001c] ">
          <span className="text-[white] text-[16px] nav_bar_font">
            Copyright@{currentYear} Coindelta
          </span>
          <div className="flex">
            <Link href={"/privacy-policy"}>
              <span className="text-[white] hover:text-[#ffbb02] text-[16px] nav_bar_font">
                Privacy Policy
              </span>
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
