import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import { BsCartPlus ,BsFillBagCheckFill} from "react-icons/Bs";
import { AiFillCloseCircle,AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";
import { useRef } from 'react';
export const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
    const ref = useRef();
    const toggleCart = () => {
        debugger
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
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
                <button onClick={toggleCart}><BsCartPlus className=' text-xl md:text-3xl' /></button>
            </div>
            <div ref={ref} className=" w-72 sidecart absolute right-0 top-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full my-2 " style={{ borderRadius: "10px" }}>
                <h2 className='text-xl font-bold text-center'>shopping cart</h2>
                <span className=' absolute top-5 right-2 cursor-pointer text-2xl text-pink-500 ' onClick={toggleCart}><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold '>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
                            <div className=' flex w-1/3  font-semibold item-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
                        </div>
                    </li>
                    {
                        Object.keys(cart).length===0 && <div className='my-4 text-base font-normal'>
                           Your cart is Empty!
                        </div>
                    }
                    {
                        Object.keys(cart).map((k,index)=>{
                            return <li key={index}>
                            <div className="item flex my-5">
                                <div className='w-2/3 font-semibold '>{cart[k].name}</div>
                                <div className=' flex w-1/3  font-semibold item-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>{cart[k].qty}</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
                            </div>
                        </li>
                        })
                    }
                </ol>
                <div className="flex">
                <button class="flex text-sm mx-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded "><BsFillBagCheckFill className='m-1'/>Checkout</button>
                <button class="flex text-sm  mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded "> Clear Cart</button>
                
            </div>
                </div>

        </div>
    )
}
