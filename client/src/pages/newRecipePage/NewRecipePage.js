import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createRecipeApi } from '../../api/createRecipe'
import { errorsForm } from '../../helpers/validateRecipeForm'
import useForm from '../../hooks/useForm'
import { getRecipesUserAction } from '../../redux/actions/getRecipesByApi'
import { getAllDiets } from '../../redux/reducers/filterReducer'
import Preview from './components/Preview'
import style from './NewRecipePage.module.css'

const NewRecipePage = () => {
    const filterState = useSelector(state => state.filterReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDiets())
    }, [dispatch])

    const { form, handleInput, resetForm } = useForm({
        name: "",
        healthScore: "",
        overview: "",
        steps: "",
        image: "",
    })
    const [errores, setErrores] = useState({ name: "", healthScore: "", overview: "", steps: "", diets: "" })
    const [dietForm, setDietForm] = useState([])
    const { name, steps, healthScore, overview, image } = form

    const postRecipe = async (e) => {
        e.preventDefault()
        const { someError, errors } = errorsForm(form, dietForm)
        if (someError) return setErrores(errors)
        const newRecipe = {
            ...form,
            healthScore: Number(form.healthScore),
            diets: dietForm.map(diet => diet.id),
            image: form.image || "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
        }
        await createRecipeApi(newRecipe)
        dispatch(getRecipesUserAction())
        resetForm()
    }

    const addOrRemoveDiet = (diet) => {
        setErrores({ ...errores, diets: "" })
        if (!dietForm.find(cur => cur.name === diet.name)) {
            return setDietForm([...dietForm, diet])
        }
        setDietForm(dietForm.filter(cur => cur.name !== diet.name))
    }

    return (
        <div>
            <h2 className={style.title}>NUEVA RECETA</h2>
            <div className={style.containerForm}>

                <form onSubmit={postRecipe} className={style.form}>
                    <div className={style.input}>
                        <h4>Nombre</h4>
                        <input
                            onFocus={() => { setErrores({ ...errores, name: "" }) }}
                            data-testid="name"
                            value={name}
                            onChange={handleInput}
                            name="name" />
                        <p className={style.error}>{errores.name}</p>
                    </div>
                    <div className={style.input}>
                        <h4>healthScore</h4>
                        <input
                            onFocus={() => { setErrores({ ...errores, healthScore: "" }) }}
                            data-testid="healthScore"
                            value={healthScore}
                            type={"number"}
                            onChange={handleInput}
                            name="healthScore" />
                        <p className={style.error}>{errores.healthScore}</p>

                    </div>
                    <div className={style.input}>
                        <h4>resumen</h4>
                        <textarea
                            onFocus={() => { setErrores({ ...errores, overview: "" }) }}
                            data-testid="overview"
                            value={overview}
                            onChange={handleInput}
                            name="overview" />
                        <p className={style.error}>{errores.overview}</p>
                    </div>
                    <div className={style.input}>
                        <h4>imagen</h4>
                        <input
                            data-testid="image"
                            value={image}
                            onChange={handleInput}
                            name="image" />
                    </div>
                    <div className={`${style.input} ${style.pasos}`}>
                        <h4>pasos</h4>
                        <textarea
                            onFocus={() => { setErrores({ ...errores, steps: "" }) }}
                            data-testid="steps"
                            name="steps"
                            value={steps}
                            onChange={handleInput}
                            className={style.steps} />
                        <p className={style.error}>{errores.steps}</p>
                    </div>
                    <div className={style.input}>
                        <h4>Diets</h4>
                        <div className={style.diets}>
                            {
                                filterState.diets.map((diet) => (
                                    <div
                                        className={dietForm.find(cur => cur.name === diet.name) ?
                                            `${style.diet} ${style.active}`
                                            : `${style.diet}`}
                                        key={diet.id}
                                        onClick={() => { addOrRemoveDiet(diet) }}
                                    >
                                        {diet.name}
                                    </div>
                                ))
                            }

                        </div>
                        {errores.diets &&
                            <p
                                data-testid="error"
                                className={style.error}>Seleccione almenos una dieta</p>
                        }

                    </div>
                    <div className={style.button}>
                        <button data-testid="submit">ENVIAR</button>
                    </div>
                </form>
                <Preview
                    healthScore={healthScore}
                    name={name}
                    dietForm={dietForm}
                    image={image}
                />
            </div>
        </div>
    )
}

export default NewRecipePage