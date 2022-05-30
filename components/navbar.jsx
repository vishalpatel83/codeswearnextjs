import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import { BsCartPlus } from "react-icons/Bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from 'react';
export const Navbar = () => {
    const ref=useRef();
    const toggleCart=()=>{
        debugger
       if(ref.current.classList.contains('translate-x-full')){
           ref.current.classList.remove("translate-x-full")
           ref.current.classList.add("translate-x-0")
       }
       else if(!ref.current.classList.contains('translate-x-full'))
       {
        ref.current.classList.remove("translate-x-0")
        ref.current.classList.add("translate-x-full")
       }
    }
  return (
    <div className='flex flex-col justify-center  items-center md:flex-row md:justify-start py-2 shadow-xl' >
        <div className="logo">
            <Link href={"/"}>
         <Image src="/logo.webp" width={200} height={40}></Image>
            </Link>
        </div>
        <div className='nav'>
            <ul className='flex items-center space-x-6 md:text-md'>
                <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
                <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
                <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
                <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
      
            </ul>

        </div>
        <div className="cart absolute right-0  top-4 mx-5">
            <button onClick={toggleCart}><BsCartPlus className=' text-xl md:text-3xl'/></button>
        </div>
        <div  ref={ref} className=" w-72 sidecart absolute right-0 top-0 bg-pink-100 px-4 py-10 transform transition-transform translate-x-full ">
            <h2 className='text-xl font-bold'>shopping cart</h2>
            <span className=' absolute top-5 right-2 cursor-pointer text-2xl text-pink-500 ' onClick={toggleCart}><AiFillCloseCircle/></span>
            <ol className='list-decimal'>
                <li>
                    <span className='w-2/3 bg-red-500'>Tshirt-Wear the code</span>
                    <span className='w-1/3 bg-green-50'>1</span>
                </li>
            </ol>
        </div>
    </div>
  )
}
