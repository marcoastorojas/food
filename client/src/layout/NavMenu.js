import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { getRecipesNameAction, getRecipesNameApiAction } from '../redux/actions/getRecipesName'
import { searchFilter } from '../redux/reducers/filterReducer'
import style from './NavMenu.module.css'
const NavMenu = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.recipeReducer)
    const { form: { name }, handleInput } = useForm({ name: "" })
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.typeRecipe === "client") {
            dispatch(getRecipesNameAction(name))
        } else {
            dispatch(getRecipesNameApiAction(name))
        }
        if (history.location.pathname !== "/recipes/list") {
            console.log("dirigiendo a las listas");
            history.push("/recipes/list")
        }
        dispatch(searchFilter())
    }

    return (
        <div className={style.menu}>
            <div className={style.logo}>
                SOY HENRY PI FOOD
            </div>
            <nav className={style.menuPages}>
                <NavLink activeClassName={style.active} className={style.button} to={"/recipes/new"}><div >crear nuevo </div></NavLink>
                <NavLink activeClassName={style.active} className={style.button} to={"/recipes/list"}><div>lista de Recetas </div></NavLink>
            </nav>
            <form 
                className={style.buscar}
                onSubmit={handleSubmit}
            >
                <input name="name" value={name} onChange={handleInput} />
                <button>buscar</button>
            </form>
        </div>
    )
}

export default NavMenu