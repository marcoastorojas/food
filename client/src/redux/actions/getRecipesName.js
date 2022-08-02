import { getRecipesByNameApi } from "../../api/getRecipesByName"
import { GET_RECIPES_BY_NAME, GET_RECIPES_BY_NAME_API } from "../types/recipeTypes"

export const getRecipesNameAction = (name) => {
    return async (dispatch) => {
        const listRecipes = await getRecipesByNameApi(name)
        dispatch({
            type: GET_RECIPES_BY_NAME,
            payload: listRecipes
        })
    }
}

export const getRecipesNameApiAction = (name) => {
    return {
        type: GET_RECIPES_BY_NAME_API,
        payload: name
    }
}
