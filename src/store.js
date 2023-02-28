import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import myReducer from "./reducers/myReducer/myReducer";
import yourReducer from "./reducers/yourReducer/yourReducer";
import fetchDataReducer from "./reducers/fetchDataReducer/fetchData";
import postsReducers from "./reducers/postsReducer/postsReducers";
import thunk from "redux-thunk";

const allReducers = combineReducers({
    myReducer,
    yourReducer,
    fetchDataReducer,
    postsReducers

})

const store = createStore(allReducers, {}, applyMiddleware(thunk))



export default store;