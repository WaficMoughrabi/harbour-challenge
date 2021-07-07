import React from 'react'
import '../main-nav/navigation-bar.css';


function TopMenu() {
  return (
    <div className="topMenu fixed lg:h-20 md:h-20 h-16 lg:pl-7 md:pl-7 pl-7  lg:pt-1 md:pt-1 sm:pt-1 w-screen flex">
        
        <div className="font-lighter pt-5 w-3/4  ">
            <span className=" lg:text-xl md:text-base sm:text-sm  ">Harbour.Space</span>
        </div>
        <button className="applyBtn  lg:-ml-4 -ml-12   lg:w-26 md:w-24 w-20   lg:h-26 md:h-24 h-20  lg:mt-6 md:mt-3 mt-4 text-base lg:text-base" >Apply<br></br>Now</button>
        {/* burger icon */}
            

        

        </div>
  )
};

export default TopMenu;