import { legacy_createStore as createStore,applyMiddleware, combineReducers, } from "redux";
import thunk from "redux-thunk";
import { reducer  } from "./Reducer";


// const rootReducer= combineReducers({AppReducer})
const store = createStore(reducer,applyMiddleware(thunk));

export {store}