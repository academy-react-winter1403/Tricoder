import { Header } from "../common/header/Header"
import { LandingCategory } from "./Category/LandingCategory"
import { HeroSection } from "./HeroSection/HeroSection"
import { Service } from "./HeroSection/Service"
import { LandingCourse } from "./landingCourse/LandingCourse"
import { LandingNews } from "./news/LandingNews"
import { TeacherSlider } from "./Slider/TeacherSlider"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
      const menuWindow = () => {
    setMenu(window.scrollY > 250) 
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

    return (
        <div className="w-full flex flex-col justify-center items-center  mx-auto gap-6">
        {up&& ( <button onClick={scrollToTop} className="fixed top-[74%] left-[4%] cursor-pointer z-50" ><img src="../../../public/landing/upArrow.png"/></button>)}   
       {menu && (<button onClick={openMenu} className="fixed top-[30%] right-[10%] cursor-pointer"> <img src="../../../public/landing/landingMenu.png"/></button> )}
          <div className={`fixed bg-[#2196F3]  w-[30%]  right-0  top-0  flex flex-col text-white text-center transform transition-transform duration-300  ${menu? "translate-x-0" : "translate-x-full"}`}>
              <Link to={"/courses"}>   دوره‌ها   </Link>
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
