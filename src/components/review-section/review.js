import React, {useContext, useEffect,useState} from 'react';
import { InfoContext } from '../context';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../review-section/review.css';
import SingleCard from './single-card';
import "../review-section/cursor.css";

import { motion, useMotionValue,useSpring } from "framer-motion";





function ReviewSection(props){
        const data=useContext(InfoContext);
        var numOfSlider=0;
        var w;

        function useWindowSize()  {
          const [size, setSize] = useState(window.innerWidth);
          useEffect(() => {
            function updateSize() {
              setSize(window.innerWidth);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
          }, []);
          return size;
        }
        w= useWindowSize();
         
        if(w<600){
          numOfSlider=1;
        }else if(w>600){
          numOfSlider=2;
        }

        const cursorX = useMotionValue(-100);
        const cursorY = useMotionValue(-100);
      
        const springConfig = { damping: 150, stiffness: 2000 };
        const cursorXSpring = useSpring(cursorX, springConfig);
        const cursorYSpring = useSpring(cursorY, springConfig);
      
        useEffect(() => {
          const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
          };
      
          window.addEventListener("mousemove", moveCursor);
      
          return () => {
            window.removeEventListener("mousemove", moveCursor);
          };
        }, []);
      



    return(
        <div className="reviewDiv"> 
        
        <motion.div
  className="cursor"
  style={{
    translateX: cursorXSpring,
    translateY: cursorYSpring,
  }}
/>
        <Carousel
        
        plugins={[
        'centered',
        'infinite',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: numOfSlider,
          },
        },
      ]}   
    >
    {/* Should map the information from the API to the component, but could not find it in the API
    So I maped the instructor names  */}

    {data.scholarship.instructors.map((val,key)=>(
      <SingleCard
        imgSrc={val.small_picture.src}
        name={val.name}
        position="Junior Data Scientest"
        text="This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. "/>
))}
     
 
    </Carousel>
    </div>
       

    );
}

export default ReviewSection;