import React from 'react'
import bgimg from '../../assets/bgimg.jpg'
import Food1 from '../../assets/o4.jpg'
import Food2 from '../../assets/o3.jpg'
import Food3 from '../../assets/o1.jpg'
import { Typewriter } from 'react-simple-typewriter';


const ImageList = [
  { id: 1, image: Food1 },
  { id: 2, image: Food2 },
  { id: 3, image: Food3 }
];

const Hero = () => {
  const [imageid, setImageId] = React.useState(Food2);

  return (
    <div
      className="min-h-[100px] sm:min-h-[100px]
      bg-gray-300 dark:bg-gray-800 dark:text-white
      duration-200 flex justify-center items-center"
    >
      <div className="container pb-0 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* النصوص */}
          <div
            className="flex flex-col justify-center
            gap-4 pt-12 sm:pt-0
            text-center sm:text-right order-2 sm:order-1"
          >
              

     <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold">
  مرحبًا بك في{' '}
  <Typewriter
    words={['مطعم فود', 'أفضل الأكلات', 'أسرع دليفري']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h1>


            <p className="text-sm leading-6">
              استمتعوا بأشهى الأطباق الطازجة والمحضرة بعناية
              خصيصًا لكم. نقدم أفضل المأكولات العربية والعالمية
              مع تجربة مميزة ترضي جميع الأذواق.
            </p>
            <div className='py-6'>
              <button
                className="bg-gradient-to-r 
                from-primary to-secondary
                text-white px-6 py-2 
                rounded-full hover:scale-105
                duration-200"
              >
                اطلب الآن
              </button>
            </div>
          </div>

          {/* الصور */}
          <div
            className="order-1 sm:order-2 min-h-[450px]
            sm:min-h-[450px] flex 
            justify-center items-center relative"
          >
            {/* الصورة الرئيسية */}
            <div
              className="flex justify-center items-center
              h-[300px] sm:h-[450px] overflow-hidden"
            >
              <img
                src={imageid}
                alt="وجبة"
                className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] 
                rounded-full object-cover block mx-auto 
                overflow-hidden spin"
              />
            </div>

            {/* الصور الصغيرة */}
            <div
              className="flex lg:flex-col lg:top-1/2
              lg:-translate-y-1/2 lg:py-2
              justify-center gap-4 absolute bottom-[0px]
              lg:-right-10"
            >
              {ImageList.map((item) => (
                <img
                  src={item.image}
                  key={item.id}
                  alt="طبق"
                  className="max-w-[80px] h-[80px] object-cover 
                  hover:scale-105 duration-200 rounded-full cursor-pointer"
                  onClick={() => {
                    setImageId(item.image);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
