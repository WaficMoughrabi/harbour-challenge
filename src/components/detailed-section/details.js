import React, {useContext} from 'react';
import { InfoContext } from '../context';
import '../detailed-section/details.css';


function DetailSection(){
    const data=useContext(InfoContext);


    return(
    <div className="detailDiv flex flex-col lg:flex-row px-0 lg:px-32" >
    <div className="flex flex-wrap">
    <div className="w-full lg:w-80 border-0 lg:border px-10 py-8  border-gray-300 rounded  " >
            <div className="h-1/6 lg:h-1/2 flex-col " >
                <span className="smallTitles">Scholarship Value</span><br></br>
                <span className="text-gray-600 text-lg lg:text-4xl">€{data.scholarship.total_value}</span>
            </div>
        <hr style={{width:"100%",color:" #dadada",height:"0,5px"}} className="hidden lg:block"></hr>
            <div className="row2 mt-12">
                <tr>
                    <td><span className="smallTitles">Tuition Covered</span><br></br><span className="text-gray-600 text-lg lg:text-lg">€{data.scholarship.tuition}</span></td>
                    <td><span className="smallTitles">Remaining</span><br></br><span className="text-gray-600 text-lg lg:text-lg">{data.scholarship.remaining} Year</span></td>
                </tr>
                <br></br>
                <span className="smallTitles">Living Stipend </span> <span className="text-gray-600 text-lg lg:text-lg"><br></br>€{data.scholarship.stipend_per_year} (€{data.scholarship.stipend_per_month} / month )</span>
            </div>
        </div>
    </div>
    <div className="flex flex-wrap px-5 lg:px-0 ml-0 lg:ml-8">
    <div className="mr-0 lg:mr-8  lg:w-customWidth w-full px-6 py-8 border border-gray-300 rounded" >
        <span className="smallTitles">Study commitment</span>
        <br></br>
        <span className="durationSpan">{data.scholarship.study_commitment} hours / day</span>
        <hr ></hr>
        <span className='widgetText'>{data.scholarship.study_commitment_text}</span>
        </div>

    <div className="mr-0 mt-7 lg:mt-0 w- lg:w-customWidth w-full px-8 py-10 border border-gray-300 rounded" >
        <span classNameName="smallTitles">Work commitment</span>
        <br></br>
        <span className="durationSpan">{data.scholarship.internship_commitment} hours / day</span>
        <hr></hr>
        <span className='widgetText'>{ data.scholarship.internship_commitment_text}</span>
        </div>
        <div className="dLine"><span>Graduation</span></div>
    <div className="mr-0 lg:mt-0  w- lg:w-72 w-full lg:w-full px-8 py-10 border border-gray-300 rounded" >
    
    <span className="smallTitles">Work opportunity</span>
        <br></br>
            <span className='widgetText'>{ data.scholarship.internship_commitment_text}</span> 
    </div>
    </div>


    </div>);
}

export default DetailSection;