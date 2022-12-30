import Image from 'next/image'
import React from 'react'
import Logo from '../public/assets/logo.svg'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsPinterest,BsTwitter,BsYoutube} from 'react-icons/bs'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {

    const [navMobile,setNavMobile] = useState(false)

    const handleClick =() =>{
        setNavMobile(!navMobile)
    }

  return (
    <>
        <header className=' flex justify-between items-center h-full w-full px-10 shadow-lg py-2'>
            <div className='z-50'>
                <Image src={Logo}/>
            </div>
            <ul className='gap-4 items-center justify-center hidden md:flex text-xl'>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">GALLERY</a></li>
                <li><a href="/">INTERVIEW</a></li>
                <li><a href="/">ARTICLES</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>
            <div onClick={handleClick} className='pr-2 block z-50 md:hidden'>
            {
               navMobile ? <AiOutlineClose size={20} className="z-50"/> :   <AiOutlineMenu size={20} className="z-50"/>
            }
            </div>
            <div className={navMobile ? 'fixed top-0 bg-white right-0 w-full h-screen ease-in duration-300 text-3xl flex flex-col items-center justify-center' : 'fixed top-[-100%]'}>
                <ul className='flex flex-col items-center justify-center gap-4 font-semibold'>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">GALLERY</a></li>
                    <li><a href="/">INTERVIEW</a></li>
                    <li><a href="/">ARTICLES</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>


        </header>
       

    </>
  )
}

export default Navbar