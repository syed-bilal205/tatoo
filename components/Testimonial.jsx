import Image from 'next/image'
import React from 'react'
import quote from '../public/assets/quote.svg'

const Testimonial = () => {
  return (
    <>
      <div className='h-full w-full px-6 flex flex-col  items-center justify-center py-6 md:flex-row md:px-8'>
        <div className='h-full w-full flex justify-center   items-center md:pb-24 md:pr-10'>
            <Image src={quote} className='bg-fixed bg-no-repeat'
            />
        </div>
        <div className='flex flex-col gap-4 w-full h-full pt-2 items-start justify-start md:items-start md:pt-16'>
            <p className='text-left text-[20px] leading-8 font-light md:w-[90%] '>The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.</p>
            <div className='flex gap-2 '>
            <h6 className='font-bold'>Jack Geoffrey |</h6>
            <span>Tattoo Artist</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
