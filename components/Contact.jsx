import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'

const Contact = () => {
  return (
    <>
        <div className='px-6 md:px-16'>    
        <h2 className='text-6xl font-semibold py-8'>GET IN TOUCH <br />WITH ME:</h2>
      <div className='flex flex-col items-center justify-evenly w-full  gap-6 px-6 md:flex-row md:pl-24'>
        <div className='w-full'>
            <h6 className='font-bold'>LA OFFICE</h6>
            <p className='text-gray-500 py-3 w-[80%]'>In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus</p>
            <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-1'><IoLocationSharp size={20}/>784 Norman Street, Los Angeles</li>
                <li className='flex items-center gap-1'><BsFillTelephoneFill size={20}/>+49 93 30493943</li>
                <li className='flex items-center gap-1'><IoIosMail size={20}/>example@example.com</li>
            </ul>
            </div>
            <div className='w-full '>
            <h6 className='font-bold'>NYC OFFICE</h6>
            <p className='text-gray-500 py-3 w-[80%]'>Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus</p>
            <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-1'><IoLocationSharp size={20}/>784 Norman Street, New York City</li>
                <li className='flex items-center gap-1'><BsFillTelephoneFill size={20}/>+49 93 30493943</li>
                <li className='flex items-center gap-1'><IoIosMail size={20}/>example@example.com</li>
            </ul>
            </div>
            
      </div>
      <form className='flex flex-col justify-center gap-2 px-6 pt-6 md:px-20'>
        <input placeholder='Write your name here' className='border-b py-2 border-black outline-none focus:none' type="text" />
        <input placeholder='Write your email address' className='border-b py-2 border-black outline-none focus:none' type="text" />
        <input placeholder='Write your message here' className='border-b py-2 border-black outline-none focus:none' type="text" />
      </form>
      <div className='flex items-center justify-center py-6 md:justify-start md:pl-20'>
      <button className='border bg-black text-white border-white px-4 py-2 flex items-center gap-1'>SEND IT</button>
      </div>
      </div>
    </>
  )
}

export default Contact
