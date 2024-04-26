import { createSlice } from "@reduxjs/toolkit";

const product= createSlice({
    name: "product",
    initialState: [
        {
            id:1,
            name:'T-shirt',
            image:'./image/tshirt1.jpg',
            price:'500',
            quantity:'2'
        },
        {
            id:2,
            name:'T-shirt1',
            image:'./image/tshirt1.jpg',
            price:'500',
            quantity:'2'
        },
        {
            id:3,
            name:'T-shirt2',
            image:'./image/tshirt1.jpg',
            price:'500',
            quantity:'2'
        },
        {
            id:4,
            name:'T-shirt3',
            image:'./image/tshirt1.jpg',
            price:'500',
            quantity:'2'
        }
    ],
    reducers: {
        showproduct: (state, { payload }) => {
            return state
        },

        removeproduct: (state, { payload }) => {
            if(window.confirm('Are you sure? you want to delete this data!'))
            {
                state = state.filter((item)=>item.id != payload)
                return state
            }
        },

        addproduct: (state, { payload }) => {
            state.push(payload)
            return state
        },

        updateproduct: (state, {payload}) => {
            const updatedProduct = payload;
            const index = state.findIndex((item) => item.id === updatedProduct.id);
            if (index !== -1) {
                state[index] = updatedProduct;
                return state
            }
        }
    }
       
})

export const { showproduct , removeproduct, addproduct, updateproduct} = product.actions
export default product.reducer