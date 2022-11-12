


export const getRecipesSpoonacularApi = async () => {
    try {
        const resp = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=9862d781ebf54bd6abff8539e5c68df8&number=100&addRecipeInformation=true")
        const { results } = await resp.json()
        const recipes = results.map((recipe) => (
            {
                id: recipe.id,
                name: recipe.title,
                diets: recipe.diets.map((diet,i)=>({id:i,name:diet}))||[],
                healthScore: recipe.healthScore,
                image: recipe.image,
                overview: recipe.summary
            }))
        return recipes
    } catch (error) {
        return null
    }
}