import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataRecipeApi } from '../../api/getDataRecipe'
import { getRecipeApi } from '../../api/getRecipe'
import style from './DetailPage.module.css'

const DetailPage = () => {
  const { id, type } = useParams()

  const [data, setData] = useState({ loggin: true, diets: [] })



  useEffect(() => {
    if (type === "api") {
      getDataRecipeApi(id)
        .then(info => { setData((data)=>({ ...data, loggin: false, ...info })) })

    } else {
      getRecipeApi(id)
        .then((info) => { setData((data)=>({ ...data, loggin: false, ...info })) })

    }
  }, [id,type])

  return (
    <div>
      {
        !data.loggin ?
          <div className={style.modal}>
            <h1>{data.name} ({data.healthScore})</h1>
            <img src={data.image} alt={data.name}/>
            <div className={style.diets}>
              <h3>Dietas</h3>
              <div className={style.listDiets}>
                {data.diets.map((diet) => {
                  return <div key={diet.id} className={style.diet}>{diet.name}</div>
                })}
              </div>
            </div>
            <div className={style.left}>
              <h3>Resumen</h3>
              <div dangerouslySetInnerHTML={{ __html: data.overview }}></div>
            </div>
            <div className={style.left}>
              <h3>Pasos</h3>
              <div>{data.steps ? data.steps : "no steps"}</div>
            </div>
          </div>
          :
          <div className={style.cargando}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' alt='cargando'></img>
          </div>
      }
    </div>
  )
}

export default DetailPage