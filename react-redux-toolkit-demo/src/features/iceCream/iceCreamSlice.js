import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
    numOfIceCreams: 20
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCreams -= action.payload || 1
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload || 1
        }
    },
    // extraReducers: {
    //     ["cake/ordered"]: (state, action) => {
    //         state.numOfIceCream -= action.payload || 1
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(cakeOrdered, (state, action) => {
            state.numOfIceCreams -= action.payload || 1
        })
    }
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;

