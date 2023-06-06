import "./ProductListing.css";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContextProvider";
import { Filters } from "../../Components/Filters/Filters";
import { ProductCard } from "./ProductCard";

export const ProductListing = () => {
  const { newArray } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Change the timeout duration as per your requirement
  }, []);

  return (
    <div className="product-listing">
      {!isLoading && <Filters />}


      {isLoading ? (
        <div className="loader-container">
          <div className="loader" style={{ backgroundColor: "#149253" }}></div>
        </div>
      ) : (
        <div className="productCard">
          {newArray?.length === 0 ? (
            <p className="productNf">
              Product not Found 🥺 Please search for other plants
            </p>
          ) : (
            newArray?.map((plant) => (
              <ProductCard key={plant._id} plant={plant} />
            ))
          )}
        </div>
      )}
    </div>
  );
};
