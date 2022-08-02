

export const getDataRecipeApi = async (id) => {
    try {
        const resp = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=89975b415f604ae892240bcab3935a3b`)
        const data = await resp.json()
        return {
            name: data.title,
            healthScore: data.healthScore,
            image: data.image,
            overview: data.summary,
            steps: data.analyzedInstructions[0]?.steps?.map(step => step.step).join(" ") || "",
            diets: data.diets.map((diet, i) => ({ id: i+1, name: diet })) || [],
        }
    } catch (error) {
        return {
            name: "no title",
            healthScore: 0,
            image: "",
            overview: "",
            steps:  "",
            diets:  [],
        }
    }

}