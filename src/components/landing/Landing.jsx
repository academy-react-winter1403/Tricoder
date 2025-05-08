import { Header } from "../common/header/Header"
import { LandingCategory } from "./Category/LandingCategory"
import { HeroSection } from "./HeroSection/HeroSection"
import { Service } from "./HeroSection/Service"
import { LandingCourse } from "./landingCourse/LandingCourse"
import { LandingNews } from "./news/LandingNews"
import { TeacherSlider } from "./Slider/TeacherSlider"

const Landing = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center  mx-auto gap-6 ">
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
