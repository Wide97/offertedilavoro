import { configureStore } from '@reduxjs/toolkit'; // Usa configureStore invece di createStore
import addFavourite from '../reducers/AddFavourite';
import removeFavourite from '../reducers/RemoveFavourite';


const rootReducer = {
  add: addFavourite,
  remove: removeFavourite,
};


const store = configureStore({
  reducer: rootReducer,
});

export default store;
