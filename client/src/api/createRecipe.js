
export const createRecipeApi = async (data) => {

    const post = await fetch("/recipe/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
    const newRecipe = await post.json()
    return newRecipe
}