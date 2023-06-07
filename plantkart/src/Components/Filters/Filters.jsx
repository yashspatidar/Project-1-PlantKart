import { useContext } from "react";
import "./Filters.css";
import { ProductContext } from "../../Context/ProductContextProvider";

export const Filters = () => {
  const {
    sortPriceHandler,
    ratingHandler,
    newArray,
    categoryHandler,
    rangeHandler,
    clearFilters,
    filterState,
  } = useContext(ProductContext);
  return (
    <div className="filterDiv">
      {/* <h3>Products({newArray?.length})</h3> */}
      <div className="filter-first">
        <p>Filters</p>
        <p onClick={clearFilters}>Clear</p>
      </div>
      <hr />
      <div className="filter-second">
        <input
          type="range"
          min="150"
          max="2499"
          step="99"
          onChange={rangeHandler}
          checked={filterState?.priceRange?.length > 0}
        />
        <div className="filter-second-child">
          <p>150</p>
          <p>1500</p>
          <p>2500</p>
        </div>
      </div>
      <hr />
      <div className="filter-third">
        <p>Category</p>

        <label>
          <input
            type="checkbox"
            value="indoor"
            onChange={categoryHandler}
            checked={filterState?.category?.includes("indoor")}
          />
          Indoor Plants
        </label>
        <label>
          <input
            type="checkbox"
            value="fruit"
            onChange={categoryHandler}
            checked={filterState?.category?.includes("fruit")}
          />
          Fruit PLants
        </label>
        <label>
          <input
            type="checkbox"
            value="pots"
            onChange={categoryHandler}
            checked={filterState?.category?.includes("pots")}
          />
          Pots and Planter
        </label>
        <label>
          <input
            type="checkbox"
            value="tool kit"
            onChange={categoryHandler}
            checked={filterState?.category?.includes("tool kit")}
          />
          Tool Kit
        </label>
        <label>
          <input
            type="checkbox"
            value="flower"
            onChange={categoryHandler}
            checked={filterState?.category?.includes("flower")}
          />
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
            checked={filterState?.sortRating === "fourAbove"}
          />
          4 star and above
        </label>
        <label>
          <input
            type="radio"
            name="ratingRadio"
            value="threeAbove"
            onChange={ratingHandler}
            checked={filterState?.sortRating === "threeAbove"}
          />{" "}
          3 star and above
        </label>
        <label>
          <input
            type="radio"
            name="ratingRadio"
            value="twoAbove"
            onChange={ratingHandler}
            checked={filterState?.sortRating === "twoAbove"}
          />
          2 star and above
        </label>
        <label>
          <input
            type="radio"
            name="ratingRadio"
            value="oneAbove"
            onChange={ratingHandler}
            checked={filterState?.sortRating === "oneAbove"}
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
            checked={filterState?.sortPrice === "LowToHigh"}
          />
          Price - Low to High
        </label>
        <label>
          <input
            type="radio"
            value="HighToLow"
            name="priceRadio"
            onChange={sortPriceHandler}
            checked={filterState?.sortPrice === "HighToLow"}
          />
          Price - High to Low
        </label>
      </div>
    </div>
  );
};
