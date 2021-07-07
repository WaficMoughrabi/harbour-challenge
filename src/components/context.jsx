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
        
         {data ? props.children: "Loading"}
        </InfoContext.Provider>
    
    )
    
}