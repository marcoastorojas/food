import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getRecipesDiet, getRecipesDietApiAction } from '../../../redux/actions/getRecipesDiet'
import { getReciepesSpoonacularAction, getRecipesUserAction } from '../../../redux/actions/getRecipesByApi'
import { orderAlphaAction } from '../../../redux/actions/orderAlpha'
import { changePageAction } from '../../../redux/actions/pages'
import { changeDiet, changeTypeRecipe, changeHealth, changeAlpha, getAllDiets } from '../../../redux/reducers/filterReducer'

import style from './Filters.module.css'
import { orderHealthAction } from '../../../redux/actions/orderHealth'

const Filters = () => {
    const filtro = useRef(null)
    const filterState = useSelector(state => state.filterReducer)
    const dispatch = useDispatch()
    const state = useSelector(state => state.recipeReducer)
    useEffect(() => {
        dispatch(getRecipesUserAction())
    }, [dispatch])
    const getRecipesByType = (name, action) => {
        dispatch(action())
        dispatch(changeTypeRecipe(name))
    }

    const orderAlpha = (inverse, name) => {
        dispatch(orderAlphaAction(inverse))
        dispatch(changeAlpha(name))
        dispatch(changePageAction(1))
    }
    const orderHealth = (name, inverse) => {
        dispatch(changeHealth(name))
        dispatch(orderHealthAction(inverse))
        dispatch(changePageAction(1))
    }

    return (
        <div className={style.filter} ref={filtro}>
            <div className={style.toggle}>
                <h3
                    onClick={(e) => {
                        if (filtro.current.classList.contains("Filters_desplegado__3sU5M")) {
                            return filtro.current.classList.remove("Filters_desplegado__3sU5M")

                        }
                        filtro.current.classList.add("Filters_desplegado__3sU5M")
                    }}
                    className={style.iconToggle}>Filtros <ion-icon name="filter-outline"></ion-icon></h3>
            </div>
            <div className={style.filters}>
                <div className={style.filterButtons}>

                    <div className={style.filterType}>
                        <h3>Tipo de Receta</h3>
                        <button
                            className={filterState.typeRecipe === "api" ?
                                `${style.active} ${style.filterButton}` : `${style.filterButton}`}
                            onClick={() => { getRecipesByType("api", getReciepesSpoonacularAction) }}
                        >
                            api
                        </button>
                        <button
                            onClick={() => { getRecipesByType("usuario", getRecipesUserAction) }}
                            className={filterState.typeRecipe === "usuario" ?
                                `${style.active} ${style.filterButton}` : `${style.filterButton}`}
                        >
                            usuario
                        </button>
                    </div>
                    <div className={style.filterType}>
                        <h3>Alfabeticamente</h3>
                        <button
                            className={filterState.alphabetically === "ascendente" ?
                                `${style.active} ${style.filterButton}` : `${style.filterButton}`}
                            onClick={() => { orderAlpha(false, "ascendente") }}
                        >
                            ascendente
                        </button>
                        <button
                            className={filterState.alphabetically === "descendente" ?
                                `${style.active} ${style.filterButton}` : `${style.filterButton}`}
                            onClick={() => { orderAlpha(true, "descendente") }}
                        >
                            descendente
                        </button>
                    </div>
                    <div className={style.filterType}>
                        <h3>HealthScore</h3>
                        <button
                            className={filterState.healthScore === "ascendente" ?
                                `${style.active} ${style.filterButton}` : `${style.filterButton}`}
                            onClick={() => { orderHealth("ascendente", false) }}
                        >
                            ascendente
                        </button>
                        <button
                            className={filterState.healthScore === "descendente" ?
                                `${style.active} ${style.filterButton}` : `${style.filterButton}`}
                            onClick={() => { orderHealth("descendente", true) }}
                        >
                            descendente
                        </button>
                    </div>

                </div>
                <div className={style.diets}>
                    {filterState.diets.map(dieta => (
                        <div
                            className={dieta.name === filterState.dietSelected ?
                                `${style.diet} ${style.active}`
                                : style.diet}
                            onClick={(e) => {
                                dispatch(changeDiet(e.target.textContent))
                                if (state.type === "client") {
                                    return dispatch(getRecipesDiet(dieta.id))
                                }
                                dispatch(getRecipesDietApiAction(dieta.name))
                            }}
                            key={dieta.id}
                        >{dieta.name}</div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Filters