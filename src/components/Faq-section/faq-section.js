import React, { useState,useContext } from 'react';
import Accordion from './accordion';
import '../Faq-section/faq.css';
import { InfoContext } from '../context';

function FaqSection() {
    const data=useContext(InfoContext);
    const categories = data.scholarship.faqs.categories;
    const faqs = data.scholarship.faqs.items;
   
    const [categ,setCateg]=useState(categories[0]);
    
     
    let optionItems = categories.map((categories) =>
        <option key={categories}>{categories}</option>
    );

    function handleCategoryChange(e){
        setCateg(e.target.value);
    }  

    
    
    return(
    <div className="mb-20">
        <div className="topFaqSection flex font-semibold flex-col lg:flex lg:flex-row px-6 lg:px-28">
            <div className="w-full lg:w-2/5 mb-1 lg:mb-8">
                <span className="faqTitle text-4xl lg:text-5xl ">Frequently asked questions</span>
            </div>
            <div className="pt-10"><span class="font-light "> Filter by: </span>
                <select onChange={(event)=>handleCategoryChange(event)} className="dropdownStyle ml-0 lg:ml-4 mt-4 lg:mt-0">
                    {optionItems}
                    
                </select>
            </div>
        </div>
        <div className="accordionDiv">
         
         {faqs.filter(name => name.type===categ).map(filteredName => (
            <Accordion type={filteredName.type} question={filteredName.question} content={filteredName.answer} />
        ))} 
        </div>
      </div>
      
    );
}

export default FaqSection;