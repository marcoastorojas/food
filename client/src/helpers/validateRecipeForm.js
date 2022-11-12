



export const errorsForm = ({ image, ...form }, listaDietas) => {
    let errors = { name: "", healthScore: "", overview: "", steps: "", diets: "" }
    const { name, healthScore, overview, steps } = form
    if (name.length > 35) { errors.name = "no debe ser mas de 35 caracteres" }
    if (healthScore > 100 || healthScore < 0) { errors.healthScore = "debe estar entre 0 y 100" }
    if (overview.length > 3250) {
        errors.overview = "no deve pasar los 3250 caracteres"
    }
    if (steps.length > 250) {
        errors.steps = "no deve pasar los 250 caracteres"
    }
    Object.entries(form).forEach(([name, value]) => {
        if (!value) {
            errors[name] = `este campo es requerido`
        }
    });
    if (!listaDietas.length) {
        errors.diets = "Debe seleccionar almenos una dieta"
    }
    const someError = Object.entries(errors).map(cur => cur[1]).flat().join("")

    return { someError: someError ? true : false, errors }

}