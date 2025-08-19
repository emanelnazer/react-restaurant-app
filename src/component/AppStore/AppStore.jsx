import React from 'react'
import store from "../../assets/store.png"
import ggo from "../../assets/ggo.png"
import mob from "../../assets/mob.png"

const AppStore = () => {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800 py-14'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
            
            {/* النصوص */}
            <div className='space-y-6 max-w-xl mx-auto text-right'>
              <h1 className='text-2xl text-center sm:text-4xl sm:text-right font-semibold
                dark:text-gray-200 text-gray-700
              '>
                تطبيق مطعمنا متاح الآن على أندرويد و iOS
              </h1>

              {/* الأزرار */}
              <div className='flex flex-wrap justify-center sm:justify-start items-center gap-4'>
                <a href='#'>
                  <img 
                    src={store}
                    alt="تحميل من متجر آبل"
                    className='max-w-[150px] sm:max-w-[150px] md:max-w-[200px]'
                  />
                </a>
                <a href='#'>
                  <img 
                    src={ggo}
                    alt="تحميل من متجر جوجل"
                    className='max-w-[150px] sm:max-w-[150px] md:max-w-[200px]'
                  />
                </a>
              </div>
            </div>

            {/* صورة الموبايل */}
            <div className='flex justify-center'>
              <img 
                src={mob}
                alt="تطبيق المطعم على الهاتف"
                className='max-w-[300px] mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppStore
