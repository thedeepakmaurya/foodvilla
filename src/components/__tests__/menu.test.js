import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { MENU_DATA } from "../../mocks/data"
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
    return Promise.resolve({
json: () => { return Promise.resolve(MENU_DATA) }
    })
})

test("add Items to Cart", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
            <Header/>
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(screen.getByTestId("menu")))

    const addBtn = body.getByTestId("addBtn");

    fireEvent.click(addBtn[0]);

    const cart = body.getAllByTestId("cart");

    expect (cart.innerHTML).toBe("cart- 1 items");
    
    console.log(shimmer);

});