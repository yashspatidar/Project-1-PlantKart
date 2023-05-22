import { createContext, useEffect, useState } from "react"

export const HomeContext = createContext();

export const HomeContextProvider = ({children})=>{
    const [homeCard,setHomeCard] = useState(null);

    const getData = async () => {
        try {
          const res = await fetch("/api/categories");
          setHomeCard(await res.json());
          //   console.log(await res.json());
          //   setProductData(res.json());
        } catch (e) {
          console.error(e);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);
    

    return(
        <HomeContext.Provider value={{homeCard}}>
            {children}
        </HomeContext.Provider>
    )
}