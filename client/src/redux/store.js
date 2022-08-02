import { applyMiddleware, combineReducers, createStore } from "redux"
import { recipeReducer } from "./reducers/recipeReducer"
import { filterReducer } from "./reducers/filterReducer"
import thunk from 'redux-thunk'


const reducer = combineReducers({
    recipeReducer,
    filterReducer
})
export default createStore(reducer, applyMiddleware(thunk))

