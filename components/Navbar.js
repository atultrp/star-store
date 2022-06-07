import React from 'react'
import Link from 'next/link'
import { FaOpencart } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useRef } from 'react';

const Navbar = () => {

  const refVar = useRef();
  const toggleCart = () => {
    if (refVar.current.classList.contains("hidden")) {
      refVar.current.classList.remove("hidden");
    }
    else {
      refVar.current.classList.add("hidden");
    }
  }

  return (
    <header className="text-gray-600 body-font shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <a className="flex title-font font-medium items-center text-pink-600 mb-4 md:mb-0">
            <span className='text-3xl custom-font uppercase font-bold'>Star Store</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/tshirts"}><a className="mr-5 hover:text-pink-600">Tshirts</a></Link>
          <Link href={"/hoodies"}><a className="mr-5 hover:text-pink-600">Hoodies</a></Link>
          <Link href={"/stickers"}><a className="mr-5 hover:text-pink-600">Stickers</a></Link>
          <Link href={"/mugs"}><a className="mr-5 hover:text-pink-600">Mugs</a></Link>
        </nav>
        <button className=" absolute top-0 right-0 md:static md:inline-flex md:items-end bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 hover:text-white rounded text-base mt-5 mr-4 md:mt-0 md:mr-0" onClick={toggleCart}>
          <FaOpencart className='text-xl md:text-3xl' />
        </button>

        <div ref={refVar} className='w-72 absolute right-0 top-0 bg-gray-200 p-5 mt-12 mr-2 md:mt-14 md:mr-5 rounded-md transform transition-transform hidden'>
          <h2 className='text-lg md:text-xl font-medium'>Shopping Cart</h2>
          <span className='text-lg md:text-xl absolute top-3 right-3 cursor-pointer' onClick={toggleCart}>
            <IoMdClose />
          </span>
          <ul className='mt-5'>
            <li className='flex item my-3'>
              <div className="w-2/3">T-Shirts : Wear what you think!</div>
              <div className='w-1/3 flex items-center justify-center space-x-2'>
                <AiOutlineMinusCircle className='text-lg md:text-xl cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='text-lg md:text-xl cursor-pointer' />
              </div>
            </li>
            <li className='flex item my-3'>
              <div className="w-2/3">T-Shirts : Wear what you think!</div>
              <div className='w-1/3 flex items-center justify-center space-x-2'>
                <AiOutlineMinusCircle className='text-lg md:text-xl cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='text-lg md:text-xl cursor-pointer' />
              </div>
            </li>
            <li className='flex item my-3'>
              <div className="w-2/3">T-Shirts : Wear what you think!</div>
              <div className='w-1/3 flex items-center justify-center space-x-2'>
                <AiOutlineMinusCircle className='text-lg md:text-xl cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='text-lg md:text-xl cursor-pointer' />
              </div>
            </li>
            <li className='flex item my-3'>
              <div className="w-2/3">T-Shirts : Wear what you think!</div>
              <div className='w-1/3 flex items-center justify-center space-x-2'>
                <AiOutlineMinusCircle className='text-lg md:text-xl cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='text-lg md:text-xl cursor-pointer' />
              </div>
            </li>
          </ul>
          <div className="flex mt-8">
            <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsBagCheck className='m-1' /> Checkout</button>
            <button className="flex mx-auto  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg">Clear Cart</button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar