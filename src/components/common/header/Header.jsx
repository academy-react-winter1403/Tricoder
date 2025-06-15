import { Logo } from "../../../assets/fonts/icons/header/Logo"
import { Shop } from "../../../assets/fonts/icons/header/Shop"
import { useState, useEffect } from "react"
import moonIcon from '../../../../public/header/4458120.png'
import sunIcon from '../../../../public/header/sun.png'
import { Link } from "react-router-dom"
import { createContext, useContext } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { setTheme } from "../../../redux/Store/darkmode/DarkMode"
import { getItem } from "../../../core/services/common/storage.services"


const Header = () => {
     const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode)
    console.log(darkMode)
    useEffect(() => {
        const body = document.querySelector("body");

        body.className = darkMode ?? "light"
        console.log(body)

        return () => {

        }
    }, [darkMode])
    ////// bakhshhhh searchhhhhhhhh //////


    return (
        <div id="myElement" className=" w-full h-24 px-20 flex  items-center justify-between
          max-md:whitespace-nowrap max-md:-mt-4 ">
            <Link to={"/"}>
                <div className=" h-8 flex gap-1 pt-2 
            max-md:-mr-20">
                    <Logo />
                    <p className={`text-xl tracking-tight leading-9 max-md:text-sm `}>هگزا اسکواد</p>
                </div>
            </Link>

            <div className="w-86.5 h-8 flex gap-10 text-base font-medium tracking-tight whitespace-nowrap leading-13 mr-25
            max-md:text-[12px] max-md:gap-3 max-md:mx-6 " >

                <Link to={"/courses"}>   دوره‌ها     </Link>
                <p>اساتید</p>
                <p>ارتباط با ما</p>
                <Link to={"news"}>اخبار مقالات</Link>
            </div>
            <div className="w-50 h-12.5 flex justify-between gap-4 
            max-md:gap-1 max-md:mt-6">
              
                <button onClick={() => { dispatch(setTheme(darkMode === "dark" ? "light" : "dark")) }} className="w-12 h-12 rounded-4xl   relative  cursor-pointer 
                 
           max-md:w-9 max-md:h-9 max-md:px-1.5 max-md:py-1 max-md:mt-1.5  " >
                    <img className="" src={darkMode === "dark" ? sunIcon : moonIcon} />

                </button>

                <Link to={getItem("token") ? "/Studentpanel/dashboard" : "/authentication/login"}>
                    <div className=" w-33 h-12 bg-[#2196F3] rounded-[80px]
                max-md:w-17 max-md:h-8 max-md:rounded-3xl max-md:mt-1.5 ">
                        <p
                         
                        className="text-base font-bold text-white text-center leading-12
                    max-md:text-[10px] max-md:leading-8.5">{getItem("token") ? "داشبورد" : "ورود به حساب"}</p>

                    </div>
                </Link>

            </div>
        </div>

    )
}

export { Header }