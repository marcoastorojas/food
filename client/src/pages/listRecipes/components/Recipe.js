import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import style from './Recipe.module.css'
const Recipe = ({ id, image, diets, name,healthScore }) => {
    const history = useHistory()
    const tipo = useSelector(state=>state.recipeReducer.type)
    return (
        <div
            className={style.recipe}
            onClick={() => { history.push(`/recipes/${tipo}/${id}`) }}
        >
            <div className={style.healthScore}><b>{healthScore}</b></div>
            <img src={image} alt={name}></img>
            <h4>{name.length > 35 ? name.slice(0, 35) + "..." : name}</h4>
            <div className={style.listDiets}>
                {
                    diets.map((diet) => (
                        <div
                            className={style.diet}
                            key={diet.id}
                        >
                            {diet.name.length > 15 ?
                                diet.name.slice(0, 12) + "..." : diet.name
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Recipe

