import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { filterReducer } from "../Reducers/filterReducer";
import { dataReducer } from "../Reducers/dataReducer";
export const ProductContext = createContext();
// TODO: to create context for cart and wishlist

const initialState = {
  products: [],
  cartData: [],
  wishList: [],
};

const filterInitialState = {
  searchFilter: "",
  sortPrice: "",
  sortRating: "",
  category: [],
};

export const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );
  console.log(filterState.category, "filrer");
  //console.log(filterState, "lalalala");
  //reducer
  const [dataState, dispatch] = useReducer(dataReducer, initialState);
  // console.log(dataState, "ohohoh");

  const sortPriceHandler = (event) => {
    filterDispatch({
      type: "sortPrice",
      payload: event.target.value,
    });
  };

  const ratingHandler = (event) => {
    filterDispatch({
      type: "sortRating",
      payload: event.target.value,
    });
  };

  const categoryHandler = (event) => {
    const isCheck = event.target.checked;
    
    if (isCheck) {
      filterDispatch({
        type: "category",
        payload:[...filterState.category,event.target.value],
      });
    } else {
      filterDispatch({
        type: "category",
        payload: filterState.category.filter(
          (item) => item !== event.target.value
        ),
      });
    }
  };

  const appliedFilters = () => {
    let products = [...dataState.products];

    if (filterState.searchFilter.length > 0) {
      return (products = products.filter((item) =>
        item.name.toLowerCase().includes(filterState.searchFilter.toLowerCase())
      ));
    }

    if (filterState.sortPrice === "LowToHigh") {
      products = products.sort((a, b) => a.price - b.price);
    } else if (filterState.sortPrice === "HighToLow") {
      products = products.sort((a, b) => b.price - a.price);
    }

    if (filterState.sortRating === "fourAbove") {
      products = products.filter((item) => item.rating > 4);
    } else if (filterState.sortRating === "threeAbove") {
      products = products.filter((item) => item.rating > 3);
    } else if (filterState.sortRating === "twoAbove") {
      products = products.filter((item) => item.rating > 2);
    } else if (filterState.sortRating === "oneAbove") {
      products = products.filter((item) => item.rating > 1);
    }

    if (filterState.category.length > 0) {
      products = products.filter(({ categoryName }) =>
        filterState.category.find((item) => item === categoryName)
      );
    }
    

    return products;
  };

  // get request to fetch the product from the DB
  const newArray = appliedFilters();
  // console.log(newArray, "applied filters");
  const getData = async () => {
    try {
      const { data: products } = await axios.get("/api/products");
      // setProductData(res.data);
      dispatch({
        type: "add_to_product",
        payload: products.products,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // button handler for shop plants button on home screen to navigate it to the product listing page

  // cart handlers
  const quantityIncrease = (product) => {
    if (product.quantity < 5) {
      dispatch({
        type: "cartItem",
        payload: dataState?.cartData.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      console.log("can't add more than 5 produtcs");
    }
  };

  const quantityDecrease = (product) => {
    if (product.quantity > 1) {
      dispatch({
        type: "cartItem",
        payload: dataState?.cartData.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      });
    } else {
      return product;
    }
  };

  

  const shopPlantButtonHandler = () => {
    navigate("/products");
  };

  return (
    <ProductContext.Provider
      value={{
        shopPlantButtonHandler,
        item: 3,

        dataState,
        dispatch,
        newArray,
        filterState,
        filterDispatch,
        quantityIncrease,
        quantityDecrease,
        sortPriceHandler,
        ratingHandler,
        categoryHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
