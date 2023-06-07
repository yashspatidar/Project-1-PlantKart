import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "../Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContextProvider";

export const Header = () => {
  const { filterDispatch } = useContext(ProductContext);
  const navigate = useNavigate();


  // seach handler
  const searchFilter = (event) => {
    navigate("/products");
    // setFilters({ ...filters, searchFilter: event.target.value });
    filterDispatch({
      type:"search-bar",
      payload:event.target.value,
    })
  };


  return (
    <div className="header">
      <div className="logoName">
        <Link to="/">
          <h1>PlantKart</h1>
        </Link>
      </div>
      <div className="second_header">
        <input placeholder="search for plants" onChange={searchFilter} />
        <SearchRoundedIcon />
      </div>
      <div className="third_header">
        <Link to="/wishlist" className="third_header_link">
          <FavoriteRoundedIcon />
        </Link>
        <Link to="/cart" className="third_header_link">
          <ShoppingCartRoundedIcon />
        </Link>
        <Link to="/profile" className="third_header_link">
          <PersonRoundedIcon />
        </Link>
      </div>
    </div>
  );
};
