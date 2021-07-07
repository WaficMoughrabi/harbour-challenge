import React,{useContext} from 'react'
import '../sticky-button-bar/stickybar.css';
import DateCountdown from 'react-date-countdown-timer';
import { InfoContext } from '../context';

function StickyBar() {
  const data=useContext(InfoContext);
  

  return (
    <div class="buttomDiv lg:block hidden">
    <div class="stickyNavbar">
        
        
        <div>
          <span class="navTitle">Zeptolab</span><br></br>
          <span class="navText">Marketing Performance</span>
        </div>
        <div>
          <span class="navTitle">Location</span><br></br>
          <span class="navText">Bangkok</span>
        </div>
        <div>
          <span class="navTitle">Duration</span><br></br>
          <span class="navText">1 Year Full-Time</span>
        </div>  
        <div>
          <span class="navTitle">Start date</span><br></br>
          <span class="navText">3 Aug 2020</span>
        </div>
        <div>
          <span class="navTitle">Application deadline</span><br></br>
          <span class="navText">30 June 2020</span>
        </div>
        <div>
          <span class="navTitle">Application closes in</span><br></br>
          <span class="navText"> <DateCountdown dateTo={data.scholarship.application_end_date} numberOfFigures={3} /></span>
        </div>
    </div>
    </div>
  )
};

export default StickyBar;