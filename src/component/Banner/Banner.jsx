import React, { useEffect } from 'react';
import fo from '../../assets/o.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  
  // تهيئة مكتبة AOS
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="h-auto p-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div 
          data-aos="slide-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
        >
          {/* قسم الصورة */}
          <div className="flex justify-center">
            <img
              src={fo}
              alt="وجبات شهية"
              className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)] rounded-3xl"
            />
          </div>

          {/* قسم النص */}
          <div className="flex flex-col justify-center gap-6 text-right">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              منتجاتنا المميزة
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 tracking-wide leading-6">
              في مطعمنا نحرص على تقديم طعام لذيذ بجودة عالية، 
              مع خدمة رائعة وتعامل ودود. 
              ندعوكم لاستكشاف موقعنا وتجربة أشهى وجباتنا.
            </p>

            {/* الأيقونات */}
            <div className="flex gap-6 justify-end">
              <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
              <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
              <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
            </div>

            {/* زر الطلب */}
            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
                اطلب الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
