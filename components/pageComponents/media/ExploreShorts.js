import ScrollAnimation from '@/components/Animation';
import Images from '@/components/ui/image'
import React, { useState } from "react";
export default function ExploreShorts({mediaPageData}) {
    const [triggered, setTriggered] = useState(false);

  return (
    <section className='container-padding-x my-[50px]'>
          <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
    <h2 className="font-bold heading text-[#333]">
      {mediaPageData?.exploreShorts?.title}
    </h2>
    <div className= {`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-[50px]  ${
          triggered ? "animate fadeInUp three" : "hidden"
        }`}>

   {mediaPageData?.exploreShorts?.card && mediaPageData?.exploreShorts?.card.length && mediaPageData?.exploreShorts?.card.map((item)=>(
    <div key={item?.id}>
        <Images Path={item?.video} width={300} height={400}/>
       <h3 className="font-bold text-2xl text-[#333] my-4">
      {item?.title}
    </h3>
    </div>
   ))}
   </div>
  </section>
  )
}
