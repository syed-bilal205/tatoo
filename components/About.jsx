import React from 'react'
import aboutImg from '../styles/Hero.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

const About = () => {
  return (
    <>
      <div className='px-6 flex items-center flex-col justify-center md:px-12 md:flex-row'>
        <div className={aboutImg.about}>
        01
            {/* <h1 className='text-9xl font-black bg-clip-text text-transparent'>01</h1> */}
        </div>
        <div className='flex flex-col gap-4 h-full items-start md:pt-10 '>
            <h2 className='text-6xl font-semibold'>MY <br /> STORY:</h2>
            <p className='pl-10 text-[#918e8ecc] max-w-[500px]'>'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',</p>
            <p className='pl-10 text-[#918e8ecc] max-w-[500px]'>'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',</p>
            <div className='pl-10 flex items-center justify-center '>
            <button className=' flex items-center gap-1'>Read More <AiOutlineArrowRight size={20}/> </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default About
