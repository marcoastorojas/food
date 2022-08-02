

export const getAllRecipesApi = async () => {
    try {
        const resp = await fetch("/recipe")
        const { data } = await resp.json()
        return data

    } catch (error) {
        return []
    }
}