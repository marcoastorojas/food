import { useDispatch, useSelector } from 'react-redux'
import { changePageAction, prevPageAction, nextPageAction } from '../../../redux/actions/pages'
import './Pagination.css'
const Pagination = ({ numeroPaginas = 0 }) => {
    const currentPage = useSelector(state => state.recipeReducer.currentPage) || 1
    const dispatch = useDispatch()
    let pages = []
    for (let i = 0; i < numeroPaginas; i++) {
        pages.push(i + 1)
    }
    return (
        <div className='list-Buttons' >
            <div className='ant-post' onClick={() => { dispatch(prevPageAction()) }}>anterior</div>
            {pages.map((cur, i) => {
                return (
                    <div
                        className={currentPage === i + 1 ? 'seleccionado boton' : 'boton'}
                        key={i}
                        onClick={() => { dispatch(changePageAction(i + 1)) }}
                    >{cur}</div>
                )
            })}
            <div className='ant-post' onClick={() => { dispatch(nextPageAction()) }}>siguiente</div>

        </div>
    )
}

export default Pagination