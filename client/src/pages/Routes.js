import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import NavMenu from '../layout/NavMenu'
import { getReciepesSpoonacularAction, getRecipesUserAction } from '../redux/actions/getRecipesByApi'
import { getAllDiets } from '../redux/reducers/filterReducer'
import DetailPage from './detailRecipe/DetailPage'
import ListRecipes from './listRecipes/ListRecipes'
import NewRecipePage from './newRecipePage/NewRecipePage'

const Routes = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getAllDiets()) 
    },[])
    return (
        <Router>
            <NavMenu/>
            <Switch>
                <Route path={"/recipes/list"} exact component={ListRecipes} />
                <Route path={"/recipes/new"} component={NewRecipePage}/>
                <Route path={"/recipes/:type/:id"}  component={DetailPage} />
                {/* <Route path={"/recipes/api/:id"}  component={DetailPage} /> */}
                <Route path={"*"}>
                    <Redirect to={"/recipes/list"}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes