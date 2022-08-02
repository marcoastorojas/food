import { ORDER_ALPHABETICALLY } from "../types/recipeTypes"

export const orderAlphaAction = (inverse = false) => {
    return {
        type:ORDER_ALPHABETICALLY,
        payload: !inverse
    }
}