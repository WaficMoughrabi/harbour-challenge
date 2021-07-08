import React, { useState } from 'react';
import '../Faq-section/faq.css';

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="py-5 flex flex-row border-gray-300 border-t" onClick={() => setIsActive(!isActive)}>
        <div className="smallTitles w-1/3 py-2 hidden sm:flex">{props.type}</div>
        
          <div class="flex flex-grow w-1/3 flex-row py-2 flex-between  text-sm lg:text-base">{props.question}</div>
          <div class="flex border justify-center items-center cursor-pointer transition-all rounded-full h-12 w-12 " style={{background:isActive?"#523996":"transparent"}}>{isActive ? <div class="inline-block text-3xl -mt-1 text-white "> - </div> : <div class="inline-block text-3xl -mt-1 text-gray-500"> + </div>}</div>
        
      </div>
      {isActive && <div className="p-0 lg:p-4 ml-0 lg:ml-80 text-sm  overflow-hidden transition-all max-h-0 duration-700 lg:text-base">{props.content.map((val,key)=>(
  <div key={key}>
    {val.data}
  </div>
))}</div>}
    </div>
  );
};

export default Accordion;