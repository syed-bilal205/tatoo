import React from 'react'
import hero from '../styles/Hero.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Hero = () => {
  return (
    <>
      <div className= {hero.bg}>
        <div className='w-full text-white gap-4 flex flex-col items-center  justify-center h-screen'>
        <h2 className='text-6xl text-center font-bold md:text-7xl '>I'm Void Sir.</h2>
        <p className='text-center text-xl '>Tattoos have their own unique power and magic.Ther not only beautify the body but also the psyche</p>
        <div className='flex items-center justify-center '>
        <button className='border border-white px-3 py-3 flex items-center gap-1'>Read More <AiOutlineArrowRight size={20}/> </button>
        </div>
        </div>
      </div>    

    </>
  )
}

export default Hero
