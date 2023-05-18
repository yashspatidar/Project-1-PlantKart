// import { productDemo } from "./productDemo";
import "../Product.css";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContextProvider";
import { Filters } from "../Components/Filters";

export const ProductListing = () => {
  const { productData } = useContext(ProductContext);

  return (
    <div className="product-listing">
      <Filters />
      <div className="productCard">
        {productData?.products?.map((plant) => (
          <div key={plant._id} className="card">
            <img src={plant.image_link} alt="plant" />
            <p>{plant.name}</p>
            <p>{plant.rating}</p>
            <p className="RupeePrice">
              <strike className="regularPrice">
                {/* <CurrencyRupeeRoundedIcon fontSize="1rem" /> */}
                {plant.price + 150}
              </strike>{" "}
              {/* From <CurrencyRupeeRoundedIcon fontSize="1rem" /> */}
              From{" "}
              <span className="mainPrice">{plant.price}</span>
            </p>
            <p>{plant.categoryName}</p>
            <button className="addtocart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
