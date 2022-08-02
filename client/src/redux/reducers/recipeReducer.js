import {
    CHANGE_PAGE,
    GET_RECIPES_BY_NAME,
    GET_RECIPES_BY_NAME_API,
    GET_RECIPES_DIET,
    GET_RECIPES_DIET_API,
    GET_RECIPES_HEALTH,
    GET_RECIPES_SPOONACULAR,
    GET_RECIPES_USER,
    NEXT_PAGE,
    ORDER_ALPHABETICALLY,
    PREV_PAGE
} from "../types/recipeTypes";

let initialState = {
    type: "api",
    allRecipes: [],
    listRecipes: [],
    list: [],
    diets: [],
    totalPages: 0,
    currentPage: 1,
    recipesPage: 10
}
export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        //user
        case GET_RECIPES_USER:
            return {
                ...state,
                type: "client",
                listRecipes: action.payload,
                allRecipes: action.payload,
                list: action.payload.slice(0, state.recipesPage),
                totalPages: Math.ceil(action.payload.length / state.recipesPage),
                currentPage: 1
            }
        case GET_RECIPES_BY_NAME:
        case GET_RECIPES_DIET:
            return {
                ...state,
                type: "client",
                listRecipes: action.payload,
                list: action.payload.slice(0, state.recipesPage),
                totalPages: Math.ceil(action.payload.length / state.recipesPage),
                currentPage: 1
            }
        //api
        case GET_RECIPES_BY_NAME_API:
            const listFiltered = state.allRecipes
                .filter(recipe => recipe.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
            return {
                ...state,
                type: "api",
                listRecipes: listFiltered,
                list: listFiltered.slice(0, state.recipesPage),
                totalPages: Math.ceil(listFiltered.length / state.recipesPage),
                currentPage: 1
            }
        case GET_RECIPES_SPOONACULAR:
            return {
                ...state,
                type: "api",
                allRecipes: action.payload,
                listRecipes: action.payload,
                list: action.payload.slice(0, state.recipesPage),
                totalPages: Math.ceil(action.payload.length / state.recipesPage),
                currentPage: 1
            }
        case GET_RECIPES_DIET_API:
            const list = state.allRecipes.filter(recipe => recipe.diets.includes(action.payload))
            return {
                ...state,
                type: "api",
                listRecipes: list,
                list: list.slice(0, state.recipesPage),
                totalPages: Math.ceil(list.length / state.recipesPage),
                currentPage: 1
            }

        //all
        case NEXT_PAGE:
            return state.currentPage < state.totalPages ?
                {
                    ...state,
                    currentPage: state.currentPage + 1,
                    list: state.listRecipes.slice(state.currentPage * state.recipesPage, state.currentPage * state.recipesPage + state.recipesPage)
                }
                :
                state
        case PREV_PAGE:
            return state.currentPage !== 1 ?
                {
                    ...state,
                    currentPage: state.currentPage - 1,
                    list: state.listRecipes.slice((state.currentPage - 2) * state.recipesPage, (state.currentPage - 2) * state.recipesPage + state.recipesPage)
                }
                :
                state
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                list: state.listRecipes.slice((action.payload - 1) * state.recipesPage, (action.payload - 1) * state.recipesPage + state.recipesPage)
            }
        case ORDER_ALPHABETICALLY:
            const inverseAlpha = action.payload
            if (inverseAlpha) {
                return { ...state, listRecipes: state.listRecipes.sort((prev, cur) => prev.name < cur.name ? -1 : 1) }

            }
            return { ...state, listRecipes: state.listRecipes.sort((prev, cur) => prev.name < cur.name ? 1 : -1) }
        case GET_RECIPES_HEALTH:
            const inverseHealth = action.payload
            return inverseHealth ?
                { ...state, listRecipes: state.listRecipes.sort((prev, cur) => prev.healthScore > cur.healthScore ? -1 : 1) }
                :
                { ...state, listRecipes: state.listRecipes.sort((prev, cur) => prev.healthScore > cur.healthScore ? 1 : -1) }
        default:
            return state;
    }
}

