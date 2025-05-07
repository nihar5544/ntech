import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

function MobileSubMenu({ headerData }) {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem className={"border-b-0"} value={headerData?.Services}>
          <AccordionTrigger className={"font-normal"}>
            {headerData?.Services}
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible>
              {headerData?.servicesDropdown?.map((item) => (
                <AccordionItem key={item} value={item.title}>
                  <AccordionTrigger className={"p-3"}>
                    {item?.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.list.map((items) => (
                      <Link
                        key={items}
                        href={items.link ? items.link : '/'}
                        className=" p-3 px-4 flex items-center rounded-md hover:bg-violet-50 cursor-pointer"
                      >
                        {items?.title}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className={"border-b-0 "}
          value={headerData?.industryDropdown?.title}
        >
          <AccordionTrigger className={"font-normal "}>
            {headerData?.industryDropdown?.title}
          </AccordionTrigger>
          <AccordionContent>
            {headerData?.industryDropdown.list?.map((item) => (
              <Link
                key={item}
                href="#"
                className="p-3 flex items-center rounded-md hover:bg-violet-50"
              >
                {item?.title}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MobileSubMenu;
