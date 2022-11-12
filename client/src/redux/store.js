import { applyMiddleware, combineReducers, createStore,compose } from "redux"
import { recipeReducer } from "./reducers/recipeReducer"
import { filterReducer } from "./reducers/filterReducer"
import thunk from 'redux-thunk'

const composeEnhancers =
 (typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
 compose;


const reducer = combineReducers({
    recipeReducer,
    filterReducer
})
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

