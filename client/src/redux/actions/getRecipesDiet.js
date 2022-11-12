import { GET_RECIPES_DIET, GET_RECIPES_DIET_API } from "../types/recipeTypes"

export const getRecipesDiet = (id) => {
    return async (dispatch) => {
        const resp = await fetch(`/diet/${id}`)
        const { recipes } = await resp.json()
        dispatch({
            type: GET_RECIPES_DIET,
            payload: recipes
        })
    }
}

export const getRecipesDietApiAction = (name) => {
    return({
        type: GET_RECIPES_DIET_API,
        payload: name
    })
}