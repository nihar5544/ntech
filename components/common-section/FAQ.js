import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import ScrollAnimation from "../Animation";

function FAQ({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
      <div className="flex flex-col">
        <span className="text-2xl font-bold ">{data?.title}</span>
        <span className=" text-lg">{data?.description}</span>
        <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
        <div
          className={`grid lg:grid-cols-2 grid-cols-1  mt-10 gap-10 ${
            triggered ? "animate fadeInUp three" : "hidden"
          }`}
        >
          {data?.FAQcard &&
            data?.FAQcard.length &&
            data?.FAQcard.map((item) => (
              <Accordion key={item} type="single" collapsible>
                <AccordionItem
                  className="rounded-xl shadow-md border-l-8  border-b-0 border-[#072547]"
                  value={item?.title}
                >
                  <AccordionTrigger className="mx-5 font-semibold text-lg">
                    {item?.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#072547] rounded-br-xl p-5 text-white">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
        </div>
      </div>
  );
}

export default FAQ;
