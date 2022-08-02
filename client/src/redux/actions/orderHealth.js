import { GET_RECIPES_HEALTH } from "../types/recipeTypes"

export const orderHealthAction = (inverse) => {
    return {
        type:GET_RECIPES_HEALTH,
        payload:inverse
    }
}