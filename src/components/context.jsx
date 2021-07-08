import React , {useState,useEffect} from 'react';
import axios from 'axios';

export const InfoContext = React.createContext(null);

export const InfoProvider = (props) => {
    const [data,setData]=useState(null);

    useEffect(() => {
      axios.get(`https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab`)
        .then(res => {
          const fetchedData = res.data;
          setData(fetchedData);

        })
        .catch(error=>{
          console.log(error);
        })
    },[]);

  
    return (
        <InfoContext.Provider value={data}>
        
         {data ? 
          props.children
          :(<div class="flex flex-col items-center justify-center h-screen"><h1 class="flex text-3xl lg:text-5xl font-semibold inline-block" style={{color:"#523996"}}>HARBOUR.SPACE</h1><span class=" mt-3 lg:mt-5 flex text-base font-semibold inline-block items-center">Fetching API...</span></div>)}
        </InfoContext.Provider>
    
    )
    
}