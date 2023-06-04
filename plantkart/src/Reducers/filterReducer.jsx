// const filterInitialState = {
//   searchFilter: "",
//   sortPrice: "",
//   sortRating: "",
//   category: [],
//   priceRange:"",
// };

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "search-bar": {
      return { ...state, searchFilter: action.payload };
    }
    case "sortPrice": {
      return { ...state, sortPrice: action.payload };
    }
    case "sortRating": {
      return { ...state, sortRating: action.payload };
    }
    case "category": {
      return { ...state, category: action.payload };
      
    }
    case "range": {
      return { ...state, priceRange: action.payload };
      
    }
    case "clearFilter":{
      return action.payload
    }
    default: {
      return state;
    }
  }
};
