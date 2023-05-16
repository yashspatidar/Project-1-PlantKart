import "../Home.css";
import { homecard } from "../backend/db/homecards";

export const Home = () => {
  return (
    <div className="home">
      <img
        src="https://i.postimg.cc/zXjDxHpy/Desktop-Banner-1-1.jpg"
        alt="banner"
        className="BannerImage"
      />

      <div className="container">
        {homecard.map((item)=>(
            <div className="homecard">
                <img src={item.img} alt="plant" className="cardImage"/>
                <p>{item.category}</p>
            </div>
        ))}
      </div>
    </div>

  );
};
