import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className='px-8 flex flex-col gap-3 text-white w-full h-full bg-black py-16 md:flex-row md:px-28'>
        <div className='flex-1'>
            <ul className='flex flex-col gap-3 text-gray-300'>
                <li className='text-white font-bold tracking-wide'>ABOUT VOID TATTOO</li>
                <li><p>Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus</p></li>
                <li className='flex items-center gap-1'><HiLocationMarker size={20}/>1630 New York City</li>
                <li className='flex items-center gap-1'><BsFillTelephoneFill size={20}/>+49 325 215 632</li>
                <li className='flex items-center gap-1'><HiMail size={20}/>example@example.com</li>
            </ul>
        </div>
        <div className='flex-1'>
            <h6 className='font-bold tracking-wider pb-1'>USEFUL LINKS</h6>
            <ul className='text-gray-300 flex flex-col gap-4'>
                <li>About me</li>
                <li>My gallery</li>
                <li>My services</li>
                <li>Contact me</li>
            </ul>
        </div>
        <div className='flex-1'>
            <h6 className='font-bold tracking-wider pb-1'>WORKING TIME</h6>
            <ul className='text-gray-300 flex flex-col gap-4'>
                <li>Mon - Tue / Appointment</li>
                <li>Wed - Fri / 10:00 - 9:00pm</li>
                <li>Sat / 10:00 - 6:00pm</li>
                <li>Sun / no work on this day</li>
            </ul>
        </div>
        <div className='flex-1'>
            <h6 className='font-bold tracking-wider pb-1'>NEWSLETTER</h6>
            <ul className='text-gray-300 flex flex-col gap-3'>
                <li>Elit duis porttitor massa tellus nun in velit arcu posuere integer.</li>
                <li className='flex items-center'><input className='bg-black outline-none focus:none border-b border-white text-white' type="mail" placeholder='Your Email Address' /><FiSend size={20}/> </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
