import { CHANGE_PAGE, NEXT_PAGE, PREV_PAGE } from "../types/recipeTypes"


export const nextPageAction = () => {
    return {
        type: NEXT_PAGE,
    }
}


export const prevPageAction = () => {
    return {
        type: PREV_PAGE,
    }
}

export const changePageAction = (page) => {
    return {
        type:CHANGE_PAGE,
        payload:page
    }
}