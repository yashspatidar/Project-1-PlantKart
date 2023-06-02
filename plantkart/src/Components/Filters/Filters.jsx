import { useContext } from "react";
import "./Filters.css";
import { ProductContext } from "../../Context/ProductContextProvider";

export const Filters = () => {
  const { sortPriceHandler, ratingHandler, newArray, categoryHandler } =
    useContext(ProductContext);
  return (
    <div className="filterDiv">
      {/* <h3>Products({newArray?.length})</h3> */}
      <div className="filter-first">
        <p>Filters</p>
        <p>Clear</p>
      </div>
      <hr />
      <div className="filter-second">
        <input type="range" />
      </div>
      <hr />
      <div className="filter-third">
        <p>Category</p>
        <label>
          <input type="checkbox" value="indoor"  onChange={categoryHandler} />
          Indoor Plants
        </label>
        <label>
          <input type="checkbox" value="fruit" onChange={categoryHandler} />
          Fruit PLants
        </label>
        <label>
          <input type="checkbox" value="pots" onChange={categoryHandler} />
          Pots and Planter
        </label>
        <label>
          <input type="checkbox" value="tool kit" onChange={categoryHandler} />
          Tool Kit
        </label>
        <label>
          <input type="checkbox" value="flower" onChange={categoryHandler} />
          Flower Plant
        </label>
      </div>
      <hr />
      <div className="filter-fourth">
        <p>Rating</p>
        <label>
          <input
            type="radio"
            name="ratingRadio"
            value="fourAbove"
            onChange={ratingHandler}
          />
          4 star and above
        </label>
        <label>
          <input
            type="radio"
            name="ratingRadio"
            value="threeAbove"
            onChange={ratingHandler}
          />{" "}
          3 star and above
        </label>
        <label>
          <input
            type="radio"
            name="ratingRadio"
            value="twoAbove"
            onChange={ratingHandler}
          />
          2 star and above
        </label>
        <label>
          <input
            type="radio"
            name="ratingRadio"
            value="oneAbove"
            onChange={ratingHandler}
          />
          1 star and above
        </label>
      </div>
      <hr />
      <div className="filter-fifth">
        <p>Sort by</p>
        <label>
          <input
            type="radio"
            value="LowToHigh"
            name="priceRadio"
            onChange={sortPriceHandler}
          />
          Price - Low to High
        </label>
        <label>
          <input
            type="radio"
            value="HighToLow"
            name="priceRadio"
            onChange={sortPriceHandler}
          />
          Price - High to Low
        </label>
      </div>
    </div>
  );
};
