import React from 'react'
import aboutImg from '../styles/Hero.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

const About = () => {
  return (
    <>
      <div className=' flex items-center flex-col justify-center bg-white px-3 md:px-12 md:justify-evenly md:flex-row'>
        <div className={aboutImg.about}>
        <div className='px-2 text-[14rem] md:text-[30rem]'>
        01
        </div>
        </div>
        <div className='flex flex-col gap-4 h-full items-start px-4 md:pt-6 '>
            <h2 className='text-6xl md:text-7xl font-semibold'>MY <br /> STORY:</h2>
            <p className=' text-[#918e8ecc]'>In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.</p>
            <p className=' text-[#918e8ecc]'>Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.</p>
            <div className=' flex items-center justify-center '>
            <button className=' flex items-center gap-1'>Read More <AiOutlineArrowRight size={20}/> </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default About
