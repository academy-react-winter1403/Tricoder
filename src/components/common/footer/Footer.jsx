import { FooterLogo } from "../../../assets/fonts/icons/footer/FooterLogo"
import { FaceBook } from "../../../assets/fonts/icons/footer/footerMediaIcon/FaceBook"
import { Instagram } from "../../../assets/fonts/icons/footer/footerMediaIcon/Instagram"
import { Linkedin } from "../../../assets/fonts/icons/footer/footerMediaIcon/Linkedin"
import { Twitter } from "../../../assets/fonts/icons/footer/footerMediaIcon/Twitter"
import { WhatsApp } from "../../../assets/fonts/icons/footer/footerMediaIcon/WhatsApp"

const Footer = ()=>{
    return(
        <div className="bg-[#252641] h-138.5 mt-20
        max-md:mt-80">
            <div className="w-115 text-center mx-122 pt-14
            max-md:mx-6 max-md:w-100">
              <div className="px-36
              max-md:px-28"><FooterLogo/></div>
              <p className="text-[#FFFFFF] text-xl font-normal
              max-md:text-sm">هدف ما سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت </p>          
            </div>

            <div className="mx-122 w-120 pt-12 relative
            max-md:mx-8 max-md:w-90">
                <p className="text-[#FFFFFF] text-base font-normal text-center pb-6
                max-md:text-sm">برای دریافت اخبار از طریق ایمیل ثبت نام  کنید</p>
                    <input className="bg-[#FFFFFF] w-116 h-14 rounded-[50px] text-left pl-4
                    max-md:w-90 max-md:h-12" placeholder="Example@gmail.com"/>
                    <div className="w-19 h-10 rounded-[80px] bg-[#2196F3] absolute top-26 right-3
                    max-md:top-24.5 max-md:h-9">
                        <p className="text-white text-center leading-10 text-sm ">خبرم کن</p>
                    </div>
            </div>

            <div className="h-6 w-107 pt-14 mx-127 flex leading-5 
            max-md:mx-7 max-md:text-sm ">
                <p className="font-normal text-[#FFFFFF99] pl-10">دوره های اموزشی </p>
                <div className="border-l-2 border-r-2 border-r-[#FFFFFF99] border-l-[#FFFFFF99]  h-5 px-10"><p className="font-normal text-[#FFFFFF99]">درباره ما</p></div>
                <p className="font-normal text-[#FFFFFF99] pr-10">قوانین و مقررات</p>
            </div>

            <div className="bg-[#00000033] mx-24 my-20 h-15 w-320 rounded-2xl flex justify-between
            max-md:w-111 max-md:mx-1 max-md:gap-1">
                <img className="py-5 pr-15
                max-md:w-62 max-md:h-14 max-md:pr-2" src="./public/footer/Copyright (1).png"/>
                <div className="w-56 h-8 flex items-center gap-4 py-7 ml-6
                max-md:gap-2 max-md:">
                    <Linkedin/>
                    <WhatsApp/>
                    <FaceBook/>
                    <Twitter/>
                    <Instagram/>
                </div>
            </div>
        </div>
    )
}

export {Footer}