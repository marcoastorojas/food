
export const getRecipeApi = async (id) => {
    try {
        const resp = await fetch(`/recipe/${id}`)
        const data = await resp.json()
        console.log(data);

        return data
    } catch (error) {
        return{
            name: "no title",
            healthScore: 0,
            image: "",
            overview: "",
            steps:  "",
            diets:  [],
        }
    }
}