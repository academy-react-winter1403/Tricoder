import { Header } from "../common/header/Header";
import { LandingCategory } from "./Category/LandingCategory";
import { HeroSection } from "./HeroSection/HeroSection";
import { Service } from "./HeroSection/Service";
import { LandingCourse } from "./landingCourse/LandingCourse";
import { LandingNews } from "./news/LandingNews";
import { TeacherSlider } from "./Slider/TeacherSlider";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import i18n from "i18next";
import { changeLng, TranslateSlice } from "../../redux/Store/translateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { TransgenderIcon } from "lucide-react";

const Landing = () => {
  const user = useSelector((e) => e.translate);
  const dispatch = useDispatch();
  console.log(user);
  const { i18n } = useTranslation();
  const [up, setUp] = useState();
  const changeLanguage = () => {
    if (user.lng == "en") {
      dispatch(changeLng("fa"));
      // handleLanguageChange("1", TranslateSlice.actions.toggleLanguage1)
      i18n.changeLanguage("fa");
      localStorage.setItem("language","fa")
    } else {
      dispatch(changeLng("en"));
      // handleLanguageChange("1", TranslateSlice.actions.toggleLanguage1)
      i18n.changeLanguage("en");
      localStorage.setItem("language","en")
    }
  };

  const handleScroll = () => {
    setUp(window.scrollY > 250);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menu, setMenu] = useState(false);
  const [menuList, setMenuList] = useState(false);
  const menuWindow = () => {
    if (window.scrollY > 250) {
      setMenu(true);
      setMenuList(false);
    } else {
      setMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", menuWindow);
    return () => window.removeEventListener("scroll", menuWindow);
  }, []);
  const openMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  ////  part of changing langueg ///

  const [l1, setL1] = useState(localStorage.getItem("language") || "fa");
  const [l, setL] = useState(localStorage.getItem("language1") || "2");

  useEffect(() => {
    localStorage.setItem("language1", l);
    localStorage.setItem("language", l1);
  }, [l1, l]);

  const handleLanguageChange = (languageId, action) => {
    dispatch(action());
    setL(languageId);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center  mx-auto gap-6">
       {up && (
        <button
          onClick={scrollToTop}
          className="fixed top-[86%] left-[4%] cursor-pointer z-50"
        >
          <img src="../../../public/landing/upArrow.png" />
        </button>
      )}
      {menu && (
        <button
          onClick={() => (
            handleLanguageChange("1", TranslateSlice.actions.toggleLanguage1),
            setL1("en")
          )}
          className="fixed top-[75%] left-[4%] cursor-pointer z-50"
        >
          {" "}
          {/* <img src="../../../public/landing/course/language.png" /> */}
        </button>
      )} 
       <div
        className={`  leading-13
             fixed bg-[#2196F3] h-full  w-[10%] pr-7  right-0  top-0  flex flex-col text-white  transform transition-transform duration-300  ${
               menuList ? "translate-x-0" : "translate-x-full"
             }`}
      >
        <p>12222</p>
        <Link to={"/courses"}> {("courses")}  دوره ها</Link>
        <p>اساتید</p>
        <p>ارتباط با ما</p>
        <Link to={"news"}>اخبار مقالات</Link>
      </div> 
      <button
        onClick={
          () => {
            changeLanguage();
          }
        
        }
        className="fixed top-[75%] left-[4%] cursor-pointer z-50 "
      >
        {" "}
        <img className="w-[50px]" src="../../../public/landing/translate2.png" />
      </button>
       <HeroSection />
            <Service />
            <LandingCourse />
            <LandingCategory />
            <TeacherSlider />
            <LandingNews />
    </div>
  );
};

export { Landing };
