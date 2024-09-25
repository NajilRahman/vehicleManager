import { createSlice } from "@reduxjs/toolkit";


const vehicleSlice=createSlice({
    name:'vehicle',
    initialState:{
        vehicle:[],
        backup:[]
    },
    reducers:{
        addVehicle(state,action){
            state.vehicle.push(action.payload)
            console.log('added')
        },
        deleteVehicle(state,action)
        {
            state.vehicle=state.vehicle.filter(item=>item.vehicleNumber!=action.payload)
            console.log('vehicle deleted')
        },
        editVehicle(state,action){
         const   car=state.vehicle.filter(item=>item.vehicleNumber=action.payload.vehicleNumber)
            if(car)
            {
                state.vehicle=state.vehicle.filter(item=>item.vehicleNumber!=action.payload.vehicleNumber)
                state.vehicle.push(action.payload)
            }
        },
        search(state,action){
            state.vehicle=state.vehicle.filter(item=>item.vehicleNumber==action.payload)
            console.log(action.payload)
        }
    }
})


export default vehicleSlice.reducer

export const {addVehicle,deleteVehicle,editVehicle,search}=vehicleSlice.actions