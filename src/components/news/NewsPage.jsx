import React from 'react'
import image from "./../../../public/pic/Page Description.png"
import { SearchNews } from './search/SearchNews'
import { motion } from "framer-motion";

const NewsPage = () => {
  return (
    <div>
        <motion.div 
        className="ml-[120px] max-xl:ml-[80px] max-lg:ml-[50px] max-md:ml-[30px]"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        whileHover={{ scale: 1.05 }}
        >
            <img src={image} alt="" />
        </motion.div>
        <div className=' mt-[80px] mx-[70px] max-lg:mx-[50px]  max-md:mx-[30px] max-sm:mx-[0px]'>
            <SearchNews/>
        </div>
    </div>
  )
}

export  {NewsPage}