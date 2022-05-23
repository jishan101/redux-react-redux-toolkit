const redux = require("redux");
// const produce = require("immer").produce;
// const loggerMiddleware = require("redux-logger").createLogger();
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

function fetchUsersRequest(){
    return {
        type: FETCH_USERS_REQUESTED
    }
}

function fetchUsersSuccess(users){
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

function fetchUsersFailure(error){
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                data: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

const store = redux.createStore(reducer, redux.applyMiddleware(thunkMiddleware));
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State: ", store.getState());
});

store.dispatch(fetchUsers());

// unsubscribe();

