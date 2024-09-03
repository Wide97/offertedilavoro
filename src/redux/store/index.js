import { combineReducers } from '@reduxjs/toolkit'
import addFavourite from './AddFavourite'
import removeFavourite from './RemoveFavourite'

const store = combineReducers({
  add: addFavourite,
  remove: removeFavourite
})

export default store
