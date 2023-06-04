import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const HomeContext = createContext();

export const HomeContextProvider = ({children})=>{
    const [homeCard,setHomeCard] = useState(null);
    //console.log(homeCard,"ododododo");
    const getData = async () => {
        try {
          const res = await fetch("/api/categories");
          setHomeCard(await res.json());
          
        } catch (e) {
          console.error(e);
        }
      };
    
      useEffect(()=>{
        getData();
      },[])
      
    

    return(
        <HomeContext.Provider value={{homeCard}}>
            {children}
        </HomeContext.Provider>
    )
}