import {render, screen} from "@testing-library/react";
import {RestaurantCard} from "../RestaurantCard";
import mockData from "../mocks/restaurantMockData.json";
import "@testing-library/jest-dom";


it("Should render Restaurant Card ", ()=>{
    render(<RestaurantCard resData={mockData}/> );

    const name = screen.getByText("154 Breakfast Club");

    expect(name).toBeInTheDocument();
})

it("Should render Restaurant Card with Promoted", ()=>{
    //test higher order compoennt -homework
   
})