const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numOfCake: 10
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCake -= action.payload || 1
        },
        restocked: (state, action) => {
            state.numOfCake += action.payload || 1
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

