import { Logo } from "../../../assets/fonts/icons/header/Logo"
import { Shop } from "../../../assets/fonts/icons/header/Shop"
import { useState, useEffect } from "react"
import moonIcon from '../../../../public/header/4458120.png'
import sunIcon from '../../../../public/header/sun.png'
import { Link } from "react-router-dom"

const Header = ()=>{

    const [darkMode, setDarkMode] = useState(false);  
    const [themeIcon, setThemeIcon] = useState(moonIcon);
    

    useEffect(() => {   
        const savedMode = localStorage.getItem('darkMode');  
        if (savedMode) {  
          setDarkMode(JSON.parse(savedMode));  
        }  
        }, []);  

        useEffect(() => {  
        
            if (darkMode) {  
              document.body.classList.add('dark');  
            } else {  
              document.body.classList.remove('dark');  
            }  
         
       
            localStorage.setItem('darkMode', JSON.stringify(darkMode));  
            }, [darkMode]);  
            
            const ThemeDarkMode = () => {  
            setDarkMode(!darkMode);  
            console.log(ThemeDarkMode)
            setThemeIcon(prevIcon => (prevIcon === sunIcon ? moonIcon : sunIcon));  
            };  
 

           

      


    return(
        <div className=" w-full h-24 px-20 flex  items-center justify-between
          max-md:whitespace-nowrap max-md:-mt-4">
            <div className=" h-8 flex gap-1 pt-2 
            max-md:-mr-20">
               <Logo/>
                <p className={`text-xl tracking-tight leading-9 max-md:text-sm  `}>هگزا اسکواد</p>
            </div>
            <div className="w-86.5 h-8 flex gap-10 text-base font-medium tracking-tight whitespace-nowrap leading-13 mr-25
            max-md:text-[12px] max-md:gap-3 max-md:mx-6  ">
                
                <Link to={"/courses"}>   دوره‌ها     </Link>
                <p>اساتید</p>
                <p>ارتباط با ما</p>
                <Link to={"news"}>اخبار مقالات</Link>
            </div>
            <div className="w-50 h-12.5 flex justify-between gap-4 
            max-md:gap-1 max-md:mt-6">
                <button onClick={ThemeDarkMode}  className="w-12 h-12 rounded-4xl   relative  cursor-pointer 
               max-md:w-9 max-md:h-9 max-md:px-1.5 max-md:py-1 max-md:mt-1.5 " >
              
                
                <img className="" src={themeIcon}/>
                   
                </button>
                <div className=" w-33 h-12 bg-[#2196F3] rounded-[80px]
                max-md:w-17 max-md:h-8 max-md:rounded-3xl max-md:mt-1.5 ">
                    <p className="text-base font-bold text-white text-center leading-12
                    max-md:text-[10px] max-md:leading-8.5">ورود به حساب</p>

                </div>
            </div>
        </div>
    )
}

export {Header}