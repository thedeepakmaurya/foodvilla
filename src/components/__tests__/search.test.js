import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(RESTAURANT_DATA) }
    })
})

test("Shimmer should load on Homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(screen.getByTestId("search-btn")))

    const shimmer = body.getByTestId("shimmer");

    expect (shimmer.children.length).toBe(9);

    // console.log(shimmer);

})

test("Search for string (food) on Homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(screen.getByTestId("search-btn")))

    const input = body.getByTestId("search-input");

    fireEvent.change(input, {
        target: {
            value: "food"
        }
    });

    const searchBtn = body.getByTestId("serch-btn");

    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");

    expect (resList.children.length).toBe(3);
    
    console.log(shimmer);

});