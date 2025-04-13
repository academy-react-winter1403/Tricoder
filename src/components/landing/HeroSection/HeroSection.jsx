import React from 'react'
import { Header } from '../../common/header/Header'
import { SearchIcon } from '../../../assets/fonts/icons/landing/SearchIcon'
import { WebsiteInfo } from './websiteInfo/WebsiteInfo'
import { SassIcon } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/SassIcon'
import { NodeIcon } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/NodeIcon'
import { VjsIcon } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/VjsIcon'
import { Figma } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/Figma'
import { ReactIcon } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/ReactIcon'
import { AngularIcon } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/AngularIcon'
import { CssIcon } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/CssIcon'
import { HtmlIcon } from '../../../assets/fonts/icons/landing/heroSection/smallIcon/HtmlIcon'
import { Service } from './Service'

const HeroSection = () => {
  return (
    <div className=' relative  h-240 w-full
    max-md:h-80 max-xl:h-200' >
      {/* <img src='./public/landing/hero-bg.png ' className='w-full relative  ' alt='' /> */}

     <div className='pt-26    flex flex-col gap-9 items-center
     max-lg:gap-1 max-lg:pt-8'>
       
     <div className=' text-center tracking-tight whitespace-nowrap pt-10 mx-auto 
     max-md:leading-7 '>
          <p className='text-2xl font-medium  
      max-md:hidden '>پلتفرم اموزش طراحی وب</p>

          <p className='text-[80px] font-black
     max-md:text-[23px] '>مرجع اموزش برنامه نویسی</p>
          <p className='text-2xl font-medium 
       max-md:text-xs'>مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .</p>
           </div>
        <div className='  max-lg max-lg:w-3/5 max-lg: '>
        <input className='w-[99%] px-5 h-14 bg-[#FFF] rounded-2xl  text-[#607D8B] my-15 relative
      max-lg:my-3 max-md:h-8 max-lg:text-xs' placeholder='چی میخوای یاد بگیری ؟' />
          <div className='max-md:hidden max-lg:hidden '>  <SearchIcon /></div>
          <div className='m'> <WebsiteInfo /></div>

        </div>
      </div>





      <div className='w-38 h-112   -mt-140  mr-314
      max-md:hidden max-lg:hidden max-xl:hidden'>
        <div className='mb-16'><SassIcon /></div>
        <div className='mr-20 mb-17'><NodeIcon /></div>
        <div className='mb-16'><VjsIcon /></div>
        <div className='mr-21'><Figma /></div>
      </div>

      <div className='w-39 h-112 -mt-110 mr-30
      max-md:hidden max-lg:hidden max-xl:hidden'>
        <div className='mb-16'><ReactIcon /></div>
        <div className='mr-24 mb-17'><AngularIcon /></div>
        <div className='mb-16'><CssIcon /></div>
        <div className='mr-21'><HtmlIcon /></div>

      </div>

    </div>
  )
}

export { HeroSection } 
