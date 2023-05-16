import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import '../Header.css';
import plant from "../images/plant.png"



export const Header = () => {
  return (
    <div className="header">
      <div className="logoName">
        <a href="/">
          {/* <img src={plant} alt="Plantkart"/> */}
          <h1>PlantKart</h1>
        </a>
      </div>
      <div className="second_header">
        <input placeholder="search for plants" />
        <SearchRoundedIcon/>
      </div>
      <div className="third_header">
        <a className="third_header_link">
          <FavoriteRoundedIcon />
        </a>
        <a className="third_header_link">
          <ShoppingCartRoundedIcon />
        </a>
        <a className="third_header_link" >
          <PersonRoundedIcon />
        </a>
      </div>
    </div>
  );
};
