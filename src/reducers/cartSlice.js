import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers: {
        addItem :(state, action)=>{
            //vanila redux- old version dint allow to mutate the state rather create an new state and then push.
            //but now new redux toolkit we have to mutate the state . This is the change the redx toolkit has brought.
            //mutating the state here.
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
           const idx=  state.items.indexOf(action.payload);
           state.item.splice(idx, 1);
        },
        clearItems:(state)=>{
            state.items.length = 0; // not state.items=[]
        }
    }

});

export const {addItem, removeItem , clearItems} =  cartSlice.actions;

export default cartSlice.reducer;