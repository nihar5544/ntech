import ScrollAnimation from "@/components/Animation";
import LeadershipCards from "@/components/cards/LeadershipCards";
import React, { useState } from "react";

export default function LeadershipTeam({ data }) {
  const [triggered, setTriggered] = useState(false);
  return (
    <>
      <h2 className="text-[35px] text-[#333333] font-semibold text-center">
        {data?.title}
      </h2>
      <p className="text-center py-4">{data?.description}</p>
      <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
      <div
        className={`grid lg:grid-cols-3 grid-cols-1 gap-[80px] py-10  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}
      >
        {data?.LeadershipCard?.length &&
          data?.LeadershipCard.map((item) => (
            <div key={item?.id}>
              <LeadershipCards data={item} />
            </div>
          ))}
      </div>
    </>
  );
}
