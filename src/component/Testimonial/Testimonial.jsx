import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "أحمد علي",
    text: "الخدمة ممتازة والأكل لذيذ جدًا! تجربة رائعة وأنصح بها الجميع.",
    img: "https://picsum.photos/101/101"
  },
  {
    id: 2,
    name: "سارة محمد",
    text: "أفضل مطعم جربته، الدليفري سريع والتعامل راقي جدًا.",
    img: "https://picsum.photos/102/102"
  },
  {
    id: 3,
    name: "محمود حسن",
    text: "الوجبات دائمًا طازجة والنكهات مميزة. سأكرر التجربة بالتأكيد.",
    img: "https://picsum.photos/103/103"
  },
]

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className='py-10 dark:bg-gray-800'>
        <div className="container">
          {/* عنوان القسم */}
          <div className='text-center mb-6 max-w-[500px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
              آراء عملائنا
            </p>
            <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>تجارب العملاء</h1>
            <p className='text-xs text-gray-500 dark:text-gray-300 mt-2'>
              هنا بعض التعليقات من عملائنا الأعزاء عن تجربتهم في مطعمنا.
            </p>
          </div>

          {/* السلايدر */}
          <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
            <Slider {...settings}>
              {
                testimonials.map(({ id, name, text, img }) => (
                  <div key={id} className='my-6'>
                    <div className='flex flex-col justify-center items-center
                      gap-4 text-center shadow-lg p-6 mx-4 rounded-xl 
                      dark:bg-gray-900 bg-primary/10 relative
                    '>
                      <img src={img} alt={name} className='rounded-full w-20 h-20 object-cover'/>
                      <p className='text-gray-600 text-sm dark:text-gray-200 italic'>" {text} "</p>
                      <h1 className='text-lg font-bold dark:text-white'>{name}</h1>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
