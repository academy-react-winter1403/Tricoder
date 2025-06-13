import { Header } from "../common/header/Header"
import { LandingCategory } from "./Category/LandingCategory"
import { HeroSection } from "./HeroSection/HeroSection"
import { Service } from "./HeroSection/Service"
import { LandingCourse } from "./landingCourse/LandingCourse"
import { LandingNews } from "./news/LandingNews"
import { TeacherSlider } from "./Slider/TeacherSlider"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import  {} from 'i18n-react'
import T from 'i18n-react'



const Landing = () => {
      const [up, setUp] = useState();
      
    const handleScroll = () => {
    setUp(window.scrollY > 250) 
}
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [menu , setMenu] = useState(false) 
  const [menuList, setMenuList] = useState(false);
      const menuWindow = () => {
    if(window.scrollY > 250){
      setMenu(true)
      setMenuList(false)
    } 
    else{
      setMenu(false)
    }
}
  useEffect(() => {
    window.addEventListener('scroll', menuWindow);
    return () => window.removeEventListener('scroll', menuWindow);
  }, []);
   const openMenu = () => {
   if (!menu) {
      setMenu(true); 
    } else {
      setMenu(false); 
    }  
  };
  ////  part of changing langueg ///
// const LanguageSwitcher =  () => {
//   const { i18n } = useTranslation();
  
//  const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//  }
// }

  // () => setMenuList(!menuList)
    return (
        <div className="w-full flex flex-col justify-center items-center  mx-auto gap-6">
        {up&& ( <button onClick={scrollToTop} className="fixed top-[86%] left-[4%] cursor-pointer z-50" ><img src="../../../public/landing/upArrow.png"/></button>)}   
       {menu && (<button className="fixed top-[75%] left-[4%] cursor-pointer z-50"> <img src="../../../public/landing/landingMenu.png"/></button> )}
          <div className={`  leading-13
             fixed bg-[#2196F3] h-full  w-[10%] pr-7  right-0  top-0  flex flex-col text-white  transform transition-transform duration-300  ${menuList? "translate-x-0" : "translate-x-full"}`}>
             
              <Link to={"/courses"}>   دوره‌ها   </Link>
               <p>اساتید</p>
                <p>ارتباط با ما</p>
               <Link to={"news"}>اخبار مقالات</Link>          
         </div> 
            <HeroSection />
            <Service />
            <LandingCourse />
            <LandingCategory />
            <TeacherSlider />
            <LandingNews />
        </div>
        
    )
}

export { Landing }
