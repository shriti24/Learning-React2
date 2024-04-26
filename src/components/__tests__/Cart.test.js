import {fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import {act} from "react-dom/test-utils";
import MOCK_DATA from '../mocks/RestaurantMenu.json';
import appStore from "../../utils/appStore";
import {Provider} from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";


 global.fetch= jest.fn(()=>{
            return Promise.resolve({
                json:()=> Promise.resolve(MOCK_DATA)})
    });

it("Should load Restaurant Menu compoenent", async()=>{
    await act( async ()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu />
                <Cart/>
            </Provider>
            </BrowserRouter>));
    const accordion = screen.getByText('Veg Pizza (14)');
    fireEvent.click(accordion);   
    
    const addBtn = screen.getAllByRole('button', { name:'Add'});
    expect(addBtn.length).toBe(14)
    fireEvent.click(addBtn[0]);

    expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name:'Clear Cart'}));
    expect(screen.getByText('Add items to the cart')).toBeInTheDocument();

})