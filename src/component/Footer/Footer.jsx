import React from 'react'
import resimg from "../../assets/res.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <div className='max-w-[1200px] mx-auto'> 
          <div className='grid md:grid-cols-3 py-5'>
            
            {/* القسم الأول (اللوجو + وصف + بيانات تواصل) */}
            <div className='py-8 px-4'>
              <h1 className='flex items-center gap-3
              text-xl sm:text-3xl font-bold 
              text-justify sm:text-left'>
                <img src={resimg} className='max-w-[50px]' alt="شعار المطعم"/>
                مطعم فود
              </h1>
            
              <p className='text-sm text-gray-600 dark:text-gray-300 mt-3 leading-6'>
                مطعمنا يقدم أشهى الوجبات الطازجة مع أفضل خدمة وأسرع دليفري.
                هدفنا هو راحتك وإرضاء جميع أذواق عملائنا الكرام.
              </p>

              <div className='flex items-center gap-3 mt-4 text-gray-700 dark:text-gray-300'>
                <FaLocationArrow/>
                <p>القاهرة، مصر</p>
              </div>
              <div className='flex items-center gap-3 mt-3 text-gray-700 dark:text-gray-300'>
                <FaMobile/>
                <p>+20 128 0019 154</p>
              </div>

              {/* أيقونات السوشيال ميديا */}
              <div className='flex items-center gap-4 mt-6'>
                <a href='#'>
                  <FaInstagram className='text-2xl hover:text-pink-600 duration-200'/>
                </a>
                <a href='#'>
                  <FaFacebook className='text-2xl hover:text-blue-600 duration-200'/>
                </a>
                <a href='#'>
                  <FaLinkedin className='text-2xl hover:text-blue-500 duration-200'/>
                </a>
              </div>
            </div>

            {/* القسم الثاني (روابط مهمة) */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='text-xl sm:text-2xl font-bold mb-3 text-gray-800 dark:text-white'>
                    روابط مهمة
                  </h1>
                  <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
                    <li className='hover:text-primary cursor-pointer'>الرئيسية</li>
                    <li className='hover:text-primary cursor-pointer'>من نحن</li>
                    <li className='hover:text-primary cursor-pointer'>خدماتنا</li>
                    <li className='hover:text-primary cursor-pointer'>تسجيل الدخول</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
   © 2025 جميع الحقوق محفوظة لمطعم فود
</div>

        </div>
      </div>
    </>
  )
}

export default Footer
