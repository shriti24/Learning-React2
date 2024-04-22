import ContactUs from "../ContactUs";
import { render } from "@testing-library/react"

test("Should load contact us page." ,()=>{
    render( <ContactUs /> );
})

test("test." ,()=>{
    expect(5).toBe(5)
})