import React from 'react'
import Image from 'next/image'
import { BsList } from "react-icons/bs"
import Search from './Search'
import Link from 'next/link'
import { GoGift } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='shadow-lg bg-gray-300'>

<div className=' flex justify-between  px-20 py-4'>
       <a href='#' > <Image alt="Logo" src="/Esty.png" width={100} height={350} /> </a>

    <div className='flex justify-between px-2 gap-5 align-middle items-center '>
            <h2 className=' flex gap-2 justify-evenly items-center hover:bg-gray-500 hover:text-white rounded-2xl p-2'> <BsList /><p> category</p> </h2>
            <div><Search/></div>
            <div className=' flex justify-between px-20 items-center gap-10'>
            <Link href="/signin" className='border-b p-2 rounded-lg justify-center items-center hover:text-white hover:bg-gray-400' >Sign In</Link>
            
            <Link href="/favourite" className='' ><FaRegHeart /></Link>
            <Link href="/gift" className='hover:bg-gray-400 align-middle items-center justify-center w-8 h-8 transition-all duration-300 hover:rounded-lg' ><GoGift /></Link>
            <Link href="/cart" className='border-gray-500 rounded-lg ' > <IoCartOutline /></Link>
            </div>
    </div>
   
    </div>
    <div>
      <div className=' flex justify-between px-60 items-center gap-4 hover:border-transparent'>
            <Link href="/signin" className=' flex gap-2 justify-evenly items-center hover:bg-gray-500 hover:text-white rounded-2xl px-3'> <GoGift />Gift Mode</Link>
            <Link href="/favourite" className='hover:bg-gray-500 hover:text-white rounded-2xl px-3 ' >Shop Birthday Gifts</Link>
            <Link href="/signin" className='hover:bg-gray-500 hover:text-white rounded-2xl px-3'>Favourite</Link>
            <Link href="/signin" className='hover:bg-gray-500 hover:text-white rounded-2xl px-3'>Fashion Finds</Link>
            <Link href="/signin" className='hover:bg-gray-500 hover:text-white rounded-2xl px-3'>Registry</Link>
            </div>
    </div>
    </div>
    
     
    
    
  )
}

export default Navbar
