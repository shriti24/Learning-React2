   import React from 'react';
   import ReactDOM from 'react-dom/client';

   /**
    * Nested element 
    * <div id='parent'>
    *   <div id='child'> 
    *       <h1></h1>
    *   </div>
    * </div> 
    * ReactElement(Object) = HTML(Browser undertsnds)
    */
   
   
   const heading1= React.createElement('h1',
        {id:"heading", color:'yellow'},  //this is to set the attributes.
        "hello world!");
        // createelement cresates h1 as object in react.
    const heading2= React.createElement('h2',
        {id:"heading2"},  //this is to set the attributes.
        "hello world 2!");

    console.log(heading1);

    const div= React.createElement('div', {id:"parent", color:'yellow'},  
        React.createElement('div', {id:"child"}, 
        [heading1, heading2]));
    /** JSX is HTML like syntax  */

    const jsxHeading = <h1 id='heading'>Namaste React using JSX</h1>
    console.log(jsxHeading);


    /** JSX is HTML like syntax  -Babel transpiles jsx to language understood by js engine
     * JSX -> react.createelement
     * 
    */
    const title = <h2>Hello</h2>
 
    const data=10000;

    /**
     *  JSX is so intelligent that it takes javascript code inside {} braces and execues it. 
        But doesn’t exec blindly as it sanitises the data and 
         escapes the malicious code.( Which can inject by virus to attack the code).
     */

    const HeadingComponent = () =>
        ( <div>
            <h1>Namaste React using JSX React</h1>
            {title}
            {data}
            </div>
        );
    
        <Image />
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>);

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action )=>{
            const removeIdx = state.items.indexOf(action.payload);
            state.items.slice(removeIdx,1)
        },
        clearItems:(state)=>{
            state.items =[]
        }
    }
})
export const {addItem, clearItems ,removeItem} =cartSlice.action;

export default cartSlice.reducer;
