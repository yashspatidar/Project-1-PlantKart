import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const ProductContext = createContext();
// TODO: to create context for cart and wishlist
export const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();
  

  // get request to fetch the product from the DB
  const getData = async () => {
    try {
      const res = await axios.get("/api/products");
      setProductData(res.data)
      
    }catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);



  


  // button handler for shop plants button on home screen to navigate it to the product listing page
  const shopPlantButtonHandler = () => {
    navigate("/products");
  };

  return (
    <ProductContext.Provider value={{ productData, shopPlantButtonHandler}}>
      {children}
    </ProductContext.Provider>
  );
};
