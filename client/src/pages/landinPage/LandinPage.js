import { useHistory } from "react-router-dom"
import style from "./LandinPage.module.css"
export const LandinPage = () => {
    const cursorHover = (e) => {
        e.target.classList.add("LandinPage_hoverContinue__2SyvB")
    }
    const noHover = (e) => {
        e.target.classList.remove("LandinPage_hoverContinue__2SyvB")
    }

    const history = useHistory()
    return (
        <div className={style.landingPage}>
            <div className={style.container}>
                <div className={style.imageContainer}>
                </div>
                <div className={style.containerData}>
                    <h1>HENRY PI FOOD</h1>
                    <div className={style.continue}

                        onMouseEnter={cursorHover}
                        onMouseLeave={noHover}
                        onClick={() => { history.push('/recipes') }}>Ingresar</div>
                </div>
            </div>
        </div>

    )
}
