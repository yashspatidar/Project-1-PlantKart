import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const HomeContext = createContext();

export const HomeContextProvider = ({children})=>{
    const [homeCard,setHomeCard] = useState(null);

    const getData = async () => {
        try {
          const res = await fetch("/api/categories");
          setHomeCard(await res.json());
          
        } catch (e) {
          console.error(e);
        }
      };
    
      
    

    return(
        <HomeContext.Provider value={{homeCard}}>
            {children}
        </HomeContext.Provider>
    )
}