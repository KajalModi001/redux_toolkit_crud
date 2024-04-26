import { configureStore } from "@reduxjs/toolkit"; 
import product from '../Reducer/Productslice'


const reduxStore = configureStore({
    reducer: {
        product: product,
    },
})

export default reduxStore