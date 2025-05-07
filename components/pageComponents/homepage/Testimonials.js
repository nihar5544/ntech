import ScrollAnimation from "@/components/Animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Images from "@/components/ui/image";
import StarRating from "@/components/ui/star";
import Link from "next/link";
import React, { useState } from "react";

 

function Testimonials({ testimonial , heading  }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <div className="my-20 max-sm:my-5">
      <h3 className="font-bold text-center heading">{heading}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl max-sm:max-w-sm "
      >
        <CarouselContent>
          {testimonial?.card &&
            testimonial?.card?.length &&
            testimonial?.card?.map((item, index) => (
              <CarouselItem key={index}>
                <ScrollAnimation
                  setTriggered={setTriggered}
                  triggered={triggered}
                />
                <div
                  className={`my-10 px-5 mb-20 w-full  ${
                    triggered ? "animate fadeInLeft three" : "hidden"
                  }`}
                >
                  <div className="">
                    <div className="flex max-md:flex-col items-center shadow-lg rounded-2xl">
                      <Images
                        Path={item.image}
                        width={350}
                        height={0}
                        className={"max-sm:hidden"}
                      />
                      <div className="flex flex-col justify-between p-5">
                        <div className="flex max-lg:flex-col justify-between">
                          <div className="flex   items-center">
                            <Images
                              Path={item.icon}
                              height={0}
                              width={0}
                              className={"rounded-full mr-5 h-12 w-12"}
                            />
                            <div className="flex flex-col ">
                              <span className="text-2xl font-bold">
                                {item.name}
                              </span>
                              <span className="text-[#5c5c5c]">
                                {item.position}
                              </span>
                            </div>
                          </div>
                          <StarRating stars={item.rating} />
                        </div>
                        <span className="my-6">
                          <span className="text-[#6f47ff] font-medium mr-1">
                            {item.name}:
                          </span>{" "}
                          {item.description}
                        </span>
                        <Link href={"/"} className="flex font-semibold">
                          {item.Button}{" "}
                          <Images
                            Path={item.buttonIcon}
                            width={25}
                            height={25}
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="lg:left-[85%] left-1/3 top-full h-12 w-12" />
        <CarouselNext className="lg:left-[90%] left-1/2 top-full h-12 w-12" />
      </Carousel>
    </div>
  );
}

export default Testimonials;
