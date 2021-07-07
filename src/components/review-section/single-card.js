import React from 'react';
import '../review-section/review.css';
import { TiSocialLinkedin } from "react-icons/ti";

function SingleCard(props){



    return (<div class="cardStyle">
    <div className="flex flex-wrap justify-between px-2 lg:px-10">
    <div class="flex">
        <img src={props.imgSrc} className="rounded-full h-24 justify-center"/>
        <div className="m-4">
            <span className="font-semibold text-sm lg:text-lg">{props.name}</span><br></br>
            <span className="font-light text-sm lg:text-lg">{props.position}</span>
        </div>        
    </div>
    <div className="mt-8">
    <TiSocialLinkedin url="https://linkedin.com/" size="30px" color="gray" />
    </div>
    </div>
    <div class="font-light px-2 py-16 lg:px-24 lg:py-9 text-lg">
        <span>{props.text}</span>
    </div>
            


        
    </div>);
}

export default SingleCard;