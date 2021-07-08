import React,{useContext} from 'react'
import '../sticky-button-bar/stickybar.css';
import DateCountdown from 'react-date-countdown-timer';
import { InfoContext } from '../context';

function StickyBar() {
  const data=useContext(InfoContext);
  

  return (
    <div className="buttomDiv lg:block hidden">
    <div className="stickyNavbar">
        
        
        <div>
          <span className="navTitle">Zeptolab</span><br></br>
          <span className="navText">Marketing Performance</span>
        </div>
        <div>
          <span className="navTitle">Location</span><br></br>
          <span className="navText">Bangkok</span>
        </div>
        <div>
          <span className="navTitle">Duration</span><br></br>
          <span className="navText">1 Year Full-Time</span>
        </div>  
        <div>
          <span className="navTitle">Start date</span><br></br>
          <span className="navText">3 Aug 2020</span>
        </div>
        <div>
          <span className="navTitle">Application deadline</span><br></br>
          <span className="navText">30 June 2020</span>
        </div>
        <div>
          <span className="navTitle">Application closes in</span><br></br>
          <span className="navText"> <DateCountdown locales={[" Year"," Month", " Day"]} dateTo={data.scholarship.application_end_date} numberOfFigures={3} /></span>
        </div>
    </div>
    </div>
  )
};

export default StickyBar;