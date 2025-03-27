import React from 'react'
import { LittleRectangle } from '../../../assets/fonts/icons/landing/category/LittleRectangle'
import { GroupIcon } from '../../../assets/fonts/icons/landing/category/GroupIcon'
import { CircleIcon } from '../../../assets/fonts/icons/landing/category/CircleIcon'
import { BigRectangle } from '../../../assets/fonts/icons/landing/category/BigRectangle'
import { TextIcon } from '../../../assets/fonts/icons/landing/category/TextIcon'
import { DataIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/DataIcon'
import { GameIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/GameIcon'
import { WebIcon } from '../../../assets/fonts/icons/landing/category/littleIcon/WebIcon'
import { Design } from '../../../assets/fonts/icons/landing/category/littleIcon/Design'

const LandingCategory = () => {

  const CategoryItem = [
    {
      icon: <DataIcon />,
      title: "تحلیل داده",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 1
    },
    {
      icon: <GameIcon />,
      title: "بازی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 2

    },
    {
      icon: <WebIcon />,
      title: "امنیت شبکه",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 3
    },
    {
      icon: <Design />,
      title: "وب دیزاین",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است",
      id: 2
    }

  ]




  return (
    <div className='h-188 my-35
    max-md:my-39 max-xl:my-80 '>
      <div className='max-md:hidden max-xl:hidden'><LittleRectangle /></div>
     <div className='max-md:hidden max-xl:hidden'> <GroupIcon /></div>
      <div className='absolute top-703 right-155 
      max-md:hidden max-xl:hidden'>  <CircleIcon /> </div>
      <div className='absolute right-122 top-589
      max-md:top-520 max-md:right-3 max-xl:top-650 max-xl:right-50'><BigRectangle /></div>
      <div className='absolute right-30 top-630
      max-md:hidden max-xl:top-560 max-xl:hidden'><TextIcon /></div>

      <div className='w-172   absolute top-548 right-175 grid grid-cols-2 grid-rows-2 gap-8 
      max-md:right-7 max-md:top-510 max-md:gap-5 max-md:w-102 max-xl:right-50 max-xl:top-620 '>

        {CategoryItem.map((data, ind) => (
          <div key={ind} className='bg-white w-82 h-82 rounded-3xl shadow-2xl relative
          max-md:w-51 max-md:h-57' style={{ top: ind % 2 === 1 ? '30px' : '0px', }} >
            <div className='mx-28 pt-10
            max-md:mx-11 max-md:pt-4'>{data.icon}</div>
            <p className='font-black text-2xl text-center mt-6
            max-md:text-xl max-md:mt-2'>{data.title}</p>
            <p className='text-[#455A64] text-center mt-5 tracking-tight mx-10
            max-md:text-[11px] max-md:mt-1'>{data.desc}</p>
          </div>

        ))}



      </div>
    </div>
  )
}

export { LandingCategory } 
