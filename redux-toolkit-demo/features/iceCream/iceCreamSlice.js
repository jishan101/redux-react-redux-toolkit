const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
    numOfIceCream: 20
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload || 1
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload || 1
        }
    },
    // extraReducers: {
    //     ["cake/ordered"]: (state, action) => {
    //         state.numOfIceCream -= action.payload || 1
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numOfIceCream -= action.payload || 1
        })
    }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;

