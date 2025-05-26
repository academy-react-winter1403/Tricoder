import { Header } from "../common/header/Header"
import { LandingCategory } from "./Category/LandingCategory"
import { HeroSection } from "./HeroSection/HeroSection"
import { Service } from "./HeroSection/Service"
import { LandingCourse } from "./landingCourse/LandingCourse"
import { LandingNews } from "./news/LandingNews"
import { TeacherSlider } from "./Slider/TeacherSlider"
import { useState, useEffect } from "react"


const Landing = () => {
      const [up, setUp] = useState(false);
      const [menu , setMenu] = useState() 

         const handleScroll = () => {
        setUp(window.scrollY > 250) 
}

   console.log(up)

   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 //// Landing Fixed Menuuu /// 
    const showMenu = () => {
    setMenu(prev => !prev);
  };
    const handleClickOutside = (event) => {
    if (!event.target.closest('.menu-container') && !event.target.closest('.menu-btn')) {
      setMenu(false);
    }
  };
    useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
    return (
        <div className="w-full flex flex-col justify-center items-center  mx-auto gap-6 ">
        {up&& ( <button onClick={scrollToTop} className="fixed top-[74%] left-[4%] cursor-pointer z-50" ><img src="../../../public/landing/upArrow.png"/></button>)}   
         {/* <button onClick={showMenu} className="fixed top-[30%] right-[10%]"> <img src="../../../public/landing/landingMenu.png"/></button> */}
         {/* <div className="fixed bg-[#2196F3] ">
          
         </div> */}
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
