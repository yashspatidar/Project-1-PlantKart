import "./ProductListing.css";

import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContextProvider";

import { Filters } from "../../Components/Filters/Filters";

import { ProductCard } from "./ProductCard";

export const ProductListing = () => {
  const { newArray } = useContext(ProductContext);

  return (
    <div className="product-listing">
      <Filters />
      
      <div className="productCard">
      
        {newArray?.length === 0 ? (
          <p className="productNf">
            Product not Found 🥺 Please search for other plants
          </p>
        ) : (
          newArray?.map((plant) => <ProductCard key={plant._id} plant={plant} />)
        )}
      </div>
    </div>
  );
};
