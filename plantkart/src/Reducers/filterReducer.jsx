export const filterReducer = (state, action) => {
    switch (action.type) {
      case "search-bar": {
        return { ...state, searchFilter: action.payload };
      }
      default: {
        return state;
      }
    }
  };