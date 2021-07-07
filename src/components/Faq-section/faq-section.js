import React, { useState,useContext } from 'react';
import Accordion from './accordion';
import '../Faq-section/faq.css';
import { InfoContext } from '../context';

function FaqSection() {
    const data=useContext(InfoContext);
    // console.log();
    const categories = data.scholarship.faqs.categories;
    const faqs = data.scholarship.faqs.items;
   
    const [categ,setCateg]=useState(categories[0]);
    
    console.log(faqs);
     
    let optionItems = categories.map((categories) =>
        <option key={categories}>{categories}</option>
    );

    function handleCategoryChange(e){
        setCateg(e.target.value);
    }  

    
    
    return(
    <div class="mb-20">
        <div class="topFaqSection flex font-semibold flex-col lg:flex lg:flex-row px-6 lg:px-28">
            <div class="w-full lg:w-1/3 mb-1 lg:mb-8">
                <span className="faqTitle text-4xl ">Frequently asked questions</span>
            </div>
            <div className="pt-10">Filter by: 
                <select onChange={(event)=>handleCategoryChange(event)} className="dropdownStyle">
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