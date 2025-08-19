import React from 'react'
import Food2 from '../../assets/food2.png'
import Food1 from '../../assets/food1.png'
import o3 from '../../assets/o3.jpg'
import o4 from '../../assets/o4.jpg'

const serviceData = [
  {
    id: 1,
    img: o4,
    name: "البرجر",
    des: "نقدّم لكم أشهى أنواع البرجر المحضّر من لحم طازج وخبز طري مع إضافات مميزة."
  },
  {
    id: 2,
    img: o3,
    name: "البيتزا",
    des: "استمتع ببيتزا إيطالية أصلية بالعجينة الطازجة والجبنة الذائبة مع مكونات لذيذة."
  },
  {
    id: 3,
    img: Food1,
    name: "الدجاج",
    des: "دجاج مقرمش متبّل بتوابل خاصة ليمنحكم مذاق لا يُنسى."
  },
]

const Services = () => {
  return (
    <div className="py-10 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="pb-6 flex items-center justify-center">
          <div className="text-center mb-6 max-w-[500px]">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              خدماتنا
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold">ماذا نقدم لكم</h1>
            <p className="text-sm sm:text-base text-gray-400 leading-6 mt-2">
              في مطعمنا نحرص دائمًا على تقديم أفضل الأطباق بجودة عالية
              وتجربة طعام مميزة ترضي جميع الأذواق. استمتع بخدماتنا المتنوعة
              من أكلات سريعة، أطباق رئيسية، ومأكولات عالمية.
            </p>
          </div>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-14 place-items-center">
  {serviceData.map(({ id, img, name, des }) => (
    <div
      key={id}
      className="w-full max-w-sm group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 pt-10 pb-6 shadow-xl"
    >
      <div className="flex justify-center">
        <img
          src={img}
          alt={name}
          className="w-24 sm:w-28 md:w-32 rounded-full object-cover transform -mt-10 sm:-mt-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
        <p className="text-gray-500 group-hover:text-white duration-300 mt-3 text-sm sm:text-base leading-6">
          {des}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  )
}

export default Services
