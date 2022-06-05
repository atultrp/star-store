import React from 'react'
import Link from 'next/link'
import {FaOpencart} from 'react-icons/fa';

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font shadow-xl">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <a class="flex title-font font-medium items-center text-pink-600 mb-4 md:mb-0">
            <span className='text-3xl custom-font uppercase font-bold'>Star Store</span>
          </a>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/tshirts"}><a class="mr-5 hover:text-pink-600">Tshirts</a></Link>
          <Link href={"/hoodies"}><a class="mr-5 hover:text-pink-600">Hoodies</a></Link>
          <Link href={"/stickers"}><a class="mr-5 hover:text-pink-600">Stickers</a></Link>
          <Link href={"/mugs"}><a class="mr-5 hover:text-pink-600">Mugs</a></Link>
        </nav>
        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 hover:text-white rounded text-base mt-4 md:mt-0">
          <FaOpencart className='text-xl md:text-3xl'/>
        </button>
      </div>
    </header>
  )
}

export default Navbar