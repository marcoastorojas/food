import { useSelector } from 'react-redux'
import Filters from './components/Filters'
import Pagination from './components/Pagination'
import Recipe from './components/Recipe'
import style from './ListRecipes.module.css'
const ListRecipes = () => {
  const state = useSelector(state => state.recipeReducer)
  return (
    <div className={style.listRecipes}>
      <Filters />
      {
        state.list.length ?
          <div className={style.container}>
            <Pagination numeroPaginas={state.totalPages} />
            <div className={style.red}>
              {state.list.map(({ id, name, image, diets, healthScore }) => {
                return <Recipe key={id} id={id} name={name} image={image} diets={diets} healthScore={healthScore} />
              })}
            </div>
            <Pagination numeroPaginas={state.totalPages} />
          </div>
          :state.list?
          <div className={style.cargando}>
            {/* <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' alt="cargando"></img> */}
            No hay coincidencias con la busqueda
          </div>
          : <h2>Algo salio mal</h2>

      }
    </div>
  )
}

export default ListRecipes