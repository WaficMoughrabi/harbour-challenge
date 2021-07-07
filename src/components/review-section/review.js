import React, {useContext, useEffect,useState,useLayoutEffect} from 'react';
import { InfoContext } from '../context';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../review-section/review.css';
import SingleCard from './single-card';





function ReviewSection(props){
        const data=useContext(InfoContext);
        console.log(data);
        var numOfSlider=0;
        console.log(data.scholarship.instructors);
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
        var w= useWindowSize()
         
        console.log("WIDRH " + w);
        if(w<600){
          numOfSlider=1;
        }else if(w>600){
          numOfSlider=2;
          console.log(numOfSlider);
        }



    return(
        <div class="reviewDiv"> 
        
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