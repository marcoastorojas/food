import React from 'react'
import style from '../NewRecipePage.module.css'

const Preview = ({healthScore,name,dietForm,image}) => {
    return (
        <div className={style.preview}>
            <div
                className={style.recipe}
            >
                {healthScore && <div className={style.healthScore}><b>{healthScore}</b></div>}
                <img
                    src={image}
                    alt="preview"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png";
                    }}
                />
                <h4>{name.length > 35 ? name.slice(0, 25) + "..." : name}</h4>
                <div className={style.listDiets}>
                    {
                        dietForm.map((diet) => (
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
        </div>
    )
}

export default Preview