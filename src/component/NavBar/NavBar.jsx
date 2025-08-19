import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import DarkMode from '../DarkMode/DarkMode'
import resimg from "../../assets/res.jpg"

const NavBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center flex-row-reverse" dir="rtl">
          {/* اللوجو */}
          <div>
            <a href='#' className='flex items-center gap-2 text-2xl sm:text-xl font-bold'>
              <img src={resimg} className='w-10' alt="شعار المطعم"/>
              مطعمنا
            </a>
          </div>

          {/* النافبار */}
          <div className='flex items-center gap-4'>
            <DarkMode />
            <ul className='hidden sm:flex gap-4'>
              <li className='inline-block py-4 px-4 hover:text-primary cursor-pointer'>الرئيسية</li>
              <li className='inline-block py-4 px-4 hover:text-primary cursor-pointer'>من نحن</li>
              <li className='inline-block py-4 px-4 hover:text-primary cursor-pointer'>تواصل معنا</li>
            </ul>
            
            {/* زر الطلب */}
            <button className='bg-gradient-to-r from-primary to-secondary 
              text-white px-4 py-1 rounded-full hover:scale-105 duration-300
              flex items-center gap-2
            '>
              اطلب الآن
              <FaShoppingCart
                className="text-xl text-white drop-shadow-sm cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
