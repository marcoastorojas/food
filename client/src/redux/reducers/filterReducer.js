const initialState = {
    dietSelected: "",
    alphabetically: "",
    healthScore: "",
    typeRecipe: "usuario",
    diets: []
}


export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_DIET":
            return { ...state, dietSelected: action.payload, healthScore: "", alphabetically: "" }
        case "CHANGE_ALPHA":
            return { ...state, alphabetically: action.payload, healthScore: "" }
        case "CHANGE_HEALTH":
            return { ...state, healthScore: action.payload, alphabetically: "" }
        case "CHANGE_TYPE_RECIPE":
            return { ...state, typeRecipe: action.payload, dietSelected: "", healthScore: "", alphabetically: "" }
        case "SEARCH_RECIPE":
            return { ...state, dietSelected: "", alphabetically: "", healthScore: "", }
        case "GET_ALL_DIETS":
            return { ...state, diets: action.payload }
        default:
            return state;
    }
}

export const getAllDiets = () => async (dispatch) => {
    const resp = await fetch("/diet/")
    const data = await resp.json()
    dispatch({
        type: "GET_ALL_DIETS",
        payload: data
    })
}

export const searchFilter = () => {
    return {
        type: "SEARCH_RECIPE"
    }
}
export const changeDiet = (name) => {
    return {
        type: "CHANGE_DIET",
        payload: name
    }
}
export const changeAlpha = (name) => {
    return {
        type: "CHANGE_ALPHA",
        payload: name
    }
}
export const changeHealth = (name) => {
    return {
        type: "CHANGE_HEALTH",
        payload: name
    }
}
export const changeTypeRecipe = (name) => {
    return {
        type: "CHANGE_TYPE_RECIPE",
        payload: name
    }
}

export const resetDiet = () => {
    return {
        type: "RESET"
    }
}