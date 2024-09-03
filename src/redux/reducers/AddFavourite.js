const initialState = {
  list: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
};
export default mainReducer
