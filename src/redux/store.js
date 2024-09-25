import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from './vehicle'
const store=configureStore({
    reducer:{
        vehicleReducer:vehicleSlice
    }
})



export default store