import {configureStore} from '@reduxjs/toolkit'
import { EcommerceCart } from './SliceReducer';

const store = configureStore({
    reducer:{
     ecommerceStore:EcommerceCart.reducer   
    },
})

export default store;