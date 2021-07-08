import React, {useContext} from 'react';
import { InfoContext } from '../context';
import '../about-section/about.css';

function AboutSection(){
    const data=useContext(InfoContext);
    
    return(
        
        <div className=" lg:mt-52 mt-10 lg:flex lg:flex-row md:flex md:flex-col flex flex-col px-12 lg:px-28">
            <div className="flex flex-col mt-10 lg:mt-0 w-full lg:w-1/2 p-0 pr-0 lg:pr-16">
            <div className="sectionImg">
                <img src={data.scholarship.program.photos[0].src} alt="Program" className="object-cover rounded-full h-56 w-60 lg:h-full lg:w-full flex items-center justify-center "></img>
            </div>
            </div>
            <div className="sectionPar bg-white flex flex-col lg:mt-0 -mt-40 lg:mt-10 lg:w-1/2  p-0 lg:pl-16 mt-0 lg:mt-14 border lg:border-0 border-t-0 pt-36 lg:pt-0 p-6">
                <span className="aboutTitle lg:text-5xl text-3xl font-semibold">About the apprenticeship</span>
                <p className="mt-8 font-light lg:mt-0 lg:mt-8 text-base lg:text-lg">{data.scholarship.about[0].data}</p>
            </div>
        </div>
    )
}

export default AboutSection;