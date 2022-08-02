import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../redux/store"
import NewRecipePage from "./NewRecipePage"

describe('<NewRecipePage/>', () => {
    const crearRecipe = jest.fn
    beforeEach(() => {
        render(<Provider store={store}>
            <NewRecipePage />
        </Provider>)
    })

    it('should work correctly', () => {

        expect(screen.getByTestId("name").tagName).toBe("INPUT")
        expect(screen.getByTestId("overview").tagName).toBe("TEXTAREA")
        expect(screen.getByTestId("healthScore").tagName).toBe("INPUT")
    })
    it('should execute the function when submit is pressed', () => {

        const button = screen.getByTestId("submit")
        fireEvent.click(button)
        expect(screen.getByTestId("error").textContent).toBe("Seleccione almenos una dieta")

    })

})