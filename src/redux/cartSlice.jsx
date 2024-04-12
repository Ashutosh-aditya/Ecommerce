import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload)
//         },
//         // deleteFromCart(state, action) {
//         //     toast.success("Function Called");
//         //     return state.filter(item => item.id != action.payload);
//         // }
//         deleteFromCart(state, action) {
//             const itemIdToRemove = action.payload;
//             toast.success('Function Called');
//             return state.filter(item => item.id !== itemIdToRemove);
//         }   
//     }
// })
// cartSlice.jsx
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        deleteFromCart(state, action) {
            const itemIdToRemove = action.payload;
            // console.log('Item ID to remove:', itemIdToRemove); // Log the ID being removed
            const newState = state.filter(item => item.id !== itemIdToRemove);
            // console.log('New state after deletion:', newState); // Log the updated state
            return newState;
        }
    }
});


export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;