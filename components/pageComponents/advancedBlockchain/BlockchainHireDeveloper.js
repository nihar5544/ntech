import { Button } from '@/components/ui/button'
import Images from '@/components/ui/image'
import React from 'react'

export default function BlockchainHireDeveloper({data}) {
  return (
    <div className='max-md:p-4 rounded-lg flex justify-between' style={{backgroundImage:'linear-gradient(90deg, #24305b, #195382)'}}>
      <div className='px-4 flex flex-col justify-center items-start'>
        <h2 className='text-white text-3xl font-bold'>
            {data?.title}
        </h2>
        <p className='text-[rgba(255,255,255,.5)] my-4'>
        {data?.description}
        </p>
        <Button>{data?.Button?.title}
        </Button>
      </div>
      <Images Path={data?.sideImage} className='min-w-[400px] rounded-r-lg lg:block hidden'/>
        </div>
  )
}
