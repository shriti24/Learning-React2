import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Render Header",()=>{

    it("It should trender Headewr component",()=>{
       render(<BrowserRouter><Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>)

    expect(screen.getByText('Login'))
    })

     it("It should chnage login button to logout on click Headewr component",()=>{
       render(<BrowserRouter><Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>)

    const loginBtn = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginBtn);
        expect(screen.getByRole("button",  {name: "Logout"} )).toBeInTheDocument()
    })


})
