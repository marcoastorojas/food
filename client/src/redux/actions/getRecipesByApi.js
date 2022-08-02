import { getRecipesSpoonacularApi } from "../../api/getRecipesSpoonacular"
import { getAllRecipesApi } from "../../api/getAllRecipes"
import { GET_RECIPES_USER, GET_RECIPES_SPOONACULAR } from "../types/recipeTypes"


export const getRecipesUserAction = () => {
    return async (dispatch) => {
        const recipes = await getAllRecipesApi()
        dispatch({
            type: GET_RECIPES_USER,
            payload: recipes
        })
    }
}



export const getReciepesSpoonacularAction = () => {
    return async (dispatch) => {
        const recipes = await getRecipesSpoonacularApi()
        dispatch({
            type: GET_RECIPES_SPOONACULAR,
            payload: recipes
        })
    }
}