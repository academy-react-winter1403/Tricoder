import React from 'react'
import { AnimatePresence , motion } from "framer-motion";
import {Paintbrush } from "lucide-react";
import { useState, } from "react";



const ColorSelectore = ({ colors, onSelect }) => {

    const [isHovered, setIsHovered] = useState(false);




  return (
    <div className="flex gap-[5px]  "
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    <Paintbrush />
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className=" w-[7rem]   h-[2.5rem]  rounded-xl  shadow-xl/30  flex gap-[2px] items-center  justify-center "
        >
           {colors.map((color,index) => (
        <button
          key={index}
          onClick={() => onSelect(color)}
          className="w-[1.5rem] h-[1.5rem] rounded-full border-2 shadow"
          style={{ backgroundImage: color.base }}
        />
      ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  )
}

export default ColorSelectore