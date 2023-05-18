import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();
// TODO: to create context for cart and wishlist
export const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      setProductData(await res.json());
      //   console.log(await res.json());
      //   setProductData(res.json());
    } catch (e) {
      console.error(e);
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
    <ProductContext.Provider value={{ productData, shopPlantButtonHandler }}>
      {children}
    </ProductContext.Provider>
  );
};
