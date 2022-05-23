import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createLogger as reduxLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

// const logger = reduxLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;

