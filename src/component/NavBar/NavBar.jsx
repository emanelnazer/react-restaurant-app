import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"  // أيقونات الشمس والقمر
import resimg from "../../assets/res.jpg"

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false)

  // لما يغير المستخدم الوضع
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // في أول تحميل يتأكد من الوضع
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

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
            {/* زر الوضع الداكن */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 duration-300 shadow-md"
            >
              {darkMode ? (
                <BsSunFill className="text-yellow-400 text-xl" />  // أيقونة الشمس
              ) : (
                <BsMoonStarsFill className="text-gray-700 text-xl" /> // أيقونة القمر
              )}
            </button>

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
