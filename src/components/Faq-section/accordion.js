import React, { useState } from 'react';
import '../Faq-section/faq.css';
import { motion,AnimatePresence } from "framer-motion";

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
    
      <div className="py-5 flex flex-row border-gray-300 border-t" onClick={() => setIsActive(!isActive)}>
        <div className="smallTitles w-1/3 py-2 hidden sm:flex">{props.type}</div>
        
          <div className="flex flex-grow w-1/3 flex-row py-2 flex-between  text-sm lg:text-base">{props.question}</div>
          <div className="flex border justify-center items-center cursor-pointer transition-all rounded-full h-12 w-12 " style={{background:isActive?"#523996":"transparent"}}>
          {isActive ? 
          <motion.div
          animate={{
            marginTop:"-7px",
            scale: [2, 2, 2, 2, 2],
            rotate: [300, 400, 270, 0, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            color:'white',
            
          }}
        >-</motion.div> 
        : 
        <motion.div
          animate={{
            marginTop:"-5px",
            marginLeft:"2px",
            scale: [2, 2, 2, 2, 2],
            rotate: [0, 300, 420, 100, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            color:'gray',
            
          }}
        > + </motion.div>}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-0 lg:p-4 mb-0 lg:mb-5 ml-0 lg:ml-80 text-sm  overflow-hidden transition-all  duration-700 lg:text-base">{props.content.map((val,key)=>(
              <div key={key}>
                {val.data}
              </div>
            ))}</div>
          </motion.section>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Accordion;