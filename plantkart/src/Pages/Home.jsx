import { useContext } from "react";
import "../Home.css";
// import { homecard } from "../backend/db/homecards";
import { ProductContext } from "../Context/ProductContextProvider";
import { Footer } from "../Components/Footer";
import { HomeContext } from "../Context/HomeContextProvider";

export const Home = () => {
  const {shopPlantButtonHandler,} = useContext(ProductContext);
  const {homeCard} = useContext(HomeContext)
  // console.log(homeCard)
  return (
    <div className="home">
      <img
        src="https://i.postimg.cc/zXjDxHpy/Desktop-Banner-1-1.jpg"
        alt="banner"
        className="BannerImage"
      />
      <button onClick={shopPlantButtonHandler} className="shopButton">Shop Plants</button>
   
      <div className="container">
        {homeCard?.categories.map((item)=>(
            <div className="homecard">
                <img src={item.img} alt="plant" className="cardImage"/>
                <p>{item.categoryName}</p>
            </div>
        ))}
      </div>
      <div className="homeFooter">

      <Footer/>

      </div>
      
    </div>

  );
};
