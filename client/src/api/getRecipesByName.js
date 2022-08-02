
export const getRecipesByNameApi = async (name) => {
    try {
        const resp = await fetch(`/recipe/?name=${name}`)
        const { data } = await resp.json()
        const result = data.map(recipe => ({ ...recipe, diets: recipe.diets.map(diet => diet.name) }))
        return result
    } catch (error) {
        return []
    }
}
