import { Outlet } from "react-router-dom"
import {Filters} from "./filters/Filters"
import {SearchHeader} from "./SearchHeader/SearchHeader"
import image from "./../../../public/pic/Asset 1 1.png"
import pic from "./../../../public/pic/Group 657crop.png"
import { motion } from "framer-motion";


const Course = ()=>{
    return(
        <div 
        className="  w-full overflow-hidden  ">
            <div className=" w-full  mb-[50px]">
                <div className=" ml-[120px]  flex justify-center items-center gap-[50px]">
                    <motion.div 
                    className="h-[425px]"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
                    whileHover={{ scale: 1.03 }}
                    >
                       <img src={pic} alt="image1" className="w-full h-full object-cover"  />

                    </motion.div>

                    <motion.div 
                    className="h-[485px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
                    whileHover={{ scale: 1.03 }}
                    >

                        <img src={image} alt="image2"  className="w-full h-full object-cover"  />
                    </motion.div>
                </div>
            </div>

            <div className=" justify-center gap-[32px] flex flex-row-reverse">
                <SearchHeader/>
                <Filters/>
            </div>
            
            
        </div>
    )
}

export {Course}