import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
    },
    reducers: {
        addOrder(state, action) {
            let isInArray = false

            state.orders.forEach(order => {
                if(order.id === action.payload.item.id) isInArray = true
            })
            console.log(action.payload.item)
            if(!isInArray){
                state.orders.push({
                    id: action.payload?.item.id,
                    category: action.payload?.item.category,
                    name: action.payload?.item.name,
                    image: action.payload?.item.image,
                    price: action.payload?.item.price,
                    description: action.payload?.item.description
                });
            }
        },
        removeOrder(state, action) {
            state.orders = state.orders.filter(order => order.id !== action.payload);
        }
    },
});

export const {addOrder, removeOrder} = orderSlice.actions;

export default orderSlice.reducer;