import { useContext } from "react";
import "./Home.css";
// import { homecard } from "../backend/db/homecards";
import { ProductContext } from "../../Context/ProductContextProvider";
import { Footer } from "../../Components/Footer";
import { HomeContext } from "../../Context/HomeContextProvider";
import { useNavigate } from "react-router";

export const Home = () => {
  const {shopPlantButtonHandler,filterDispatch,filterState,categoryHandler} = useContext(ProductContext);
  const {homeCard} = useContext(HomeContext)
  // console.log(homeCard)
const navigate = useNavigate()
  const homeCategoryHandler =(category)=>{
    console.log(category)
    filterDispatch({
      type: "category",
      payload:[...filterState.category,category],
    });
    navigate("/products")
    
  }
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
            <div key ={item._id}className="homecard">
                <img src={item.img} alt="plant" className="cardImage" onClick={()=>homeCategoryHandler(item.categoryName)}/>
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
