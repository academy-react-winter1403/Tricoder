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
    max-md:h-80 max-xl:h-200' style={{ backgroundImage: "url('../../../../public/landing/hero-bg.png')" , backgroundRepeat:"no-repeat", backgroundSize:"100%" }}>
      {/* <img src='./public/landing/hero-bg.png ' className='w-full relative  ' alt='' /> */}

      
        <div className='px-96  text-center tracking-tight whitespace-nowrap pt-10
        max-md:px-8 max-lg:px-30 max-lg:pt-1 max-xl:px-10 max-xl:'>
          <p className='text-2xl font-medium  pt-30
        max-md:hidden'>پلتفرم اموزش طراحی وب</p>
          <p className='text-[80px] font-black
        max-md:text-2xl max-lg:text-5xl max-xl:leading-15 max-xl:text-5xl'>مرجع اموزش برنامه نویسی</p>
          <p className='text-2xl font-medium 
        max-md:hidden max-lg:text-xl'>مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .</p>

          <input className='w-182 pr-5 h-14 bg-[#FFF] rounded-2xl  text-[#607D8B] my-15 relative
        max-md:w-[300px] max-md:h-7 text-xs max-md:pr-3 max-md:my-3 max-md:rounded-[10px] max-lg:h-12 max-lg:my-10 max-xl:my-5' placeholder='چی میخوای یاد بگیری ؟' />
          <div className='max-md:hidden max-lg:hidden '>  <SearchIcon /></div>
         <div className='max-xl:mx-42'> <WebsiteInfo /></div>
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
