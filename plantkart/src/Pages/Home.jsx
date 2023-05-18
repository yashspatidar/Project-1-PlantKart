import { useContext } from "react";
import "../Home.css";
import { homecard } from "../backend/db/homecards";
import { ProductContext } from "../Context/ProductContextProvider";
import { Footer } from "../Components/Footer";

export const Home = () => {
  const {shopPlantButtonHandler} = useContext(ProductContext);
  return (
    <div className="home">
      <img
        src="https://i.postimg.cc/zXjDxHpy/Desktop-Banner-1-1.jpg"
        alt="banner"
        className="BannerImage"
      />
      <button onClick={shopPlantButtonHandler} className="shopButton">Shop Plants</button>
   
      <div className="container">
        {homecard.map((item)=>(
            <div className="homecard">
                <img src={item.img} alt="plant" className="cardImage"/>
                <p>{item.category}</p>
            </div>
        ))}
      </div>
      <Footer/>
    </div>

  );
};
