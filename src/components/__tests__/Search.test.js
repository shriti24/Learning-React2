import { render ,screen, fireEvent} from "@testing-library/react";
import {act} from "react-dom/test-utils"
import Body from "../Body";
import MOCKDATA from '../mocks/restaurantListMockData.json'
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


describe("Search test", () => {

   

     beforeAll(()=>{
    });
    beforeEach(()=>{
    });
     global.fetch= jest.fn(()=>{
            return Promise.resolve({
                json:()=> Promise.resolve(MOCKDATA)})
    });
it("Should render Body  component with Search",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    })
     const searchBtn = screen.getByRole("button", {name: "Search"});
     expect(searchBtn).toBeInTheDocument();

})

it("Should render Body  component with Search with input pizza",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    })
     const searchBtn = screen.getByRole("button", {name: "Search"});
     expect(searchBtn).toBeInTheDocument();

     const searchIp = screen.getByTestId("searchIp");

     fireEvent.change(searchIp,{ target :  { value:"pizz" }})
     fireEvent.click(searchBtn);
    const cards= screen.getAllByTestId('res-card');
     expect(cards.length).toBe(1);
    // })
})

it("Should render Body  component with Search with input pizza",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    })
     const topRtdBtn = screen.getByRole("button", {name: "Top Rated Restaurant"});
     expect(topRtdBtn).toBeInTheDocument();
     fireEvent.click(topRtdBtn);
    const cards= screen.getAllByTestId('res-card');
     expect(cards.length).toBe(7);
    
})
})
   