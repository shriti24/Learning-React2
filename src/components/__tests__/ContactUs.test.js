import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import '@testing-library/jest-dom'

test("Should load contact us page." ,()=>{
    render( <ContactUs /> );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

it("Should load button inside contact us page." ,()=>{
    render( <ContactUs /> );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("test." ,()=>{
    expect(5).toBe(5)
})