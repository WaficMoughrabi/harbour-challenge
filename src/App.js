
import { useContext, useEffect, useState } from 'react';
import './App.css';
import TopMenu from './components/main-nav/navigation-bar.jsx';
import StickyBar from './components/sticky-button-bar/stickybar.jsx';
import GeneralInformationSection from './components/general-information-section/general-information';
import AboutSection from './components/about-section/about';
import DetailedSection from './components/detailed-section/details';
import ReviewSection from './components/review-section/review';
import FaqSection from './components/Faq-section/faq-section';
import {InfoProvider} from './components/context';



function App() {

  return (
    <InfoProvider>
        
      <div className="App">
      
      <TopMenu />
      
      <GeneralInformationSection/>
      <AboutSection/>
      <DetailedSection/> 
      <ReviewSection/>
        
      <FaqSection />

      <StickyBar />  
      </div>

    </InfoProvider>
  );
}

export default App;
