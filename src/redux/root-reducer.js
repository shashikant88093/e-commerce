import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import userReducer from "./user/user.reducer";
import cartRuder from './cart/card.reducer';
import shopReducer from './shop/shop.reducer';
const persistConfig = {
  key: 'root',
  storage,
  whiteList : ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartRuder,
  directory:directoryReducer,
  shop:shopReducer,
})

export default persistReducer(persistConfig,rootReducer);
