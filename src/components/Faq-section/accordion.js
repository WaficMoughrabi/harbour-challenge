import React, { useState } from 'react';
import '../Faq-section/faq.css';

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="py-5 flex flex-row border-gray-300 border-t" onClick={() => setIsActive(!isActive)}>
        <div className="smallTitles w-1/3 hidden sm:flex">{props.type}</div>
        
          <div class="flex flex-grow flex-row flex-between text-sm lg:text-base">{props.question}</div>
          <div class="flex border justify-center items-center rounded-full h-14 w-14 " style={{background:isActive?"#523996":"transparent"}}>{isActive ? <div class="inline-block text-3xl "> - </div> : <div class="inline-block text-3xl "> + </div>}</div>
        
      </div>
      {isActive && <div className="p-0 lg:p-4 ml-0 lg:ml-80 text-sm lg:text-base">{props.content.map((val,key)=>(
  <div key={key}>
    {val.data}
  </div>
))}</div>}
    </div>
  );
};

export default Accordion;