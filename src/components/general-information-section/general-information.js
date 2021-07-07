import React, {useContext, useEffect} from 'react';
import { InfoContext } from '../context';
import '../general-information-section/gerenal-information.css';
import Widget from '../widgets';
import DateCountdown from 'react-date-countdown-timer';
import Lottie from 'react-lottie';

function GeneralInformationSection(){
    const data=useContext(InfoContext);
    console.log(data);

    console.log();

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: (data.scholarship.program.json_logo),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return(
        <div className="pt-40 lg:pt-60 px-10 lg:pl-16 md:pl-10 pl-10">
        <div className="w-full lg:w-2/5 pl-0 lg:pl-16">
        <span class="giTitle lg:pl-0 md:pl-0 pl-0 text-4xl lg:text-5xl ">{data.scholarship.name}</span>
        </div>
        <div class="lg:flex lg:mt-4 mt-10 lg:flex-row md:flex md:flex-col flex flex-col-reverse  ">
            <div class="flex flex-col lg:mt-0 mt-10 lg:w-1/2  p-0 lg:px-16 " >
            <div id="logo-bm"></div>
                {/* <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                   /> */}
                   
                <span class="text-gray-600 text-base lg:text-xl font-semibold ">A fully funded word-study program to launch your tech career</span>
                <p class="giContext mt-3 ">{data.scholarship.description[0].data}</p>
                <div class="giPosition">
                <span>Position: </span>{data.scholarship.company.type}<br></br>
                </div>
                <buttom className="btnCustom1 w-3/5 lg:w-44"> Apply Now</buttom>
            </div>
            
            <div className="flex flex-col lg:mt-0 mt-10 lg:w-1/2  p-0 lg:p-10 lg:pl-10 -mt-0 lg:-mt-24" >
            <div className="flex mb-4 -ml-7">
                <img src={data.scholarship.company.logo_dark.src} style={{maxHeight:"80px"}}></img>
                <div>
                    <span class="font-light text-base mb-2 mt-2 text-gray-500">Powered By:</span>
                    <p className=" text-md font-500 mt-1"> {data.scholarship.company.name}</p>
                </div>
            </div>
            <div className="myDiv">
            <Widget height="50px" width="100%">
                <span class="smallTitles">Applications closes in</span><br></br>
                <DateCountdown dateTo={data.scholarship.application_end_date} numberOfFigures={3} />
            </Widget>
            <br></br>
            <Widget height="120px" width="100%">
            <table>
                <tr>
                    <td><span class="smallTitles">Location</span><br></br><span>{data.scholarship.location.name}</span></td>
                    <td><span class="smallTitles" >Duration</span><br></br><span>{data.scholarship.duration} Year</span></td>
                </tr>
                <tr>
                    <td><span class="smallTitles">Start date</span><br></br><span>{data.scholarship.scholarship_start_date}</span></td>
                    <td><span class="smallTitles" >End date</span><br></br> <span>{data.scholarship.application_end_date}</span></td>
                </tr>
            </table>
            </Widget>
            </div>

               </div>
        </div>
        </div>
    )
}

export default GeneralInformationSection;