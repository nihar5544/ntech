import OurCEO from '@/components/pageComponents/aboutpage/OurCEO';
import Project from '@/components/pageComponents/homepage/Project';
import ExploreShorts from '@/components/pageComponents/media/ExploreShorts';
import MediaBanner from '@/components/pageComponents/media/MediaBanner';
import Images from '@/components/ui/image';
import React from 'react';

import mediaData from '@/data/media.json';

export default function Media() {
  return (
    <>
      <section className=''>
        <MediaBanner mediaPageData={mediaData} />
      </section>
      <section className='container-padding-x my-[80px]'>
        <h2 className="font-bold text-[#333] heading">
          {mediaData?.LatestEpisode?.title}
        </h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[50px]'>
          {mediaData?.LatestEpisode?.card && mediaData?.LatestEpisode?.card.length && mediaData?.LatestEpisode?.card.map((item) => (
            <div key={item?.id}>
              <Images Path={item?.video} width={400} height={250} className="rounded-lg w-full object-cover" />
              <h3 className="font-bold text-xl text-[#333] mt-2">
                {item?.title}
              </h3>
              <p className="md:text-[20px] text-[15px] text-[#333] my-[20px] font-thin">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="">
        <Project data={mediaData?.projectIdea} />
      </section>
      <section>
        <OurCEO data={mediaData?.Insights} />
      </section>
      <section>
        <ExploreShorts mediaPageData={mediaData} />
      </section>
    </>
  );
}
