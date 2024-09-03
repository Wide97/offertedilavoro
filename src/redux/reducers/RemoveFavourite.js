const initialRemoveState = {
  favourite: {
    list: [],
  },
};

const secondReducer = (state = initialRemoveState, action) => {
  switch (action.type) {
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};
export default secondReducer;
