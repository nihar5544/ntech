import ApiService from '@/Services/ApiService';
import OurCEO from '@/components/pageComponents/aboutpage/OurCEO';
import Project from '@/components/pageComponents/homepage/Project';
import ExploreShorts from '@/components/pageComponents/media/ExploreShorts';
import MediaBanner from '@/components/pageComponents/media/MediaBanner';
import Images from '@/components/ui/image';
import React from 'react'

export default function Media({mediaPageData}) {
    // console.log("mediaPageData",mediaPageData)

  return (
    <>
    <section className=''> 
        <MediaBanner mediaPageData={mediaPageData}/>
    </section>
      <section className='container-padding-x my-[80px]'>
        <h2 className="font-bold text-[#333] heading">
          {mediaPageData?.LatestEpisode?.title}
        </h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[50px]'>

       {mediaPageData?.LatestEpisode?.card && mediaPageData?.LatestEpisode?.card.length && mediaPageData?.LatestEpisode?.card.map((item)=>(
        <div key={item?.id}>
            <Images Path={item?.video} width={400}/>
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
        <Project data={mediaPageData?.projectIdea} />
      </section>
      <section>
        <OurCEO data={mediaPageData?.Insights} />
      </section>
      <section >
    <ExploreShorts mediaPageData={mediaPageData}/>
      </section>
    </>
  )
}

export async function getServerSideProps() {
    try {
      const response = await ApiService.get("api/media");
      const mediaPageData = response.data.data.attributes;
      return {
        props: {
          mediaPageData,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
  
      return {
        props: {
            mediaPageData: null, // or some default value
        },
      };
    }
  }
