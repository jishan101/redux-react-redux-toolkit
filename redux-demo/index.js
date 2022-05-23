const redux = require("redux");
const produce = require("immer").produce;
const logger = require("redux-logger").createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action
function orderCake(payload = 1) {
    return {
        type: CAKE_ORDERED,
        payload
    }
}

function restockCake(payload = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload
    }
}

function orderIceCream(payload = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload
    }
}

function restockIceCream(payload = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload
    }
}

// Initial State
const initialCakeState = {
    numOfCake: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

// Reducer
const cakeReducer = ( state = initialCakeState, action ) => {
    switch(action.type) {
        case CAKE_ORDERED: 
            // return {
            //     ...state,
            //     numOfCake: state.numOfCake - action.payload
            // }
            return produce(state, draft => {
                draft.numOfCake -= action.payload
            })
        case CAKE_RESTOCKED:
            // return {
            //     ...state,
            //     numOfCake: state.numOfCake + action.payload
            // }
            return produce(state, draft => {
                draft.numOfCake += action.payload
            })
        default:
            return state
    }
}

const iceCreamReducer = ( state = initialIceCreamState, action ) => {
    switch(action.type) {
        case ICECREAM_ORDERED: 
            // return {
            //     ...state,
            //     numOfIceCream: state.numOfIceCream - action.payload
            // }
            return produce(state, draft => {
                draft.numOfIceCream -= action.payload
            })
        case ICECREAM_RESTOCKED:
            // return {
            //     ...state,
            //     numOfIceCream: state.numOfIceCream + action.payload
            // }
            return produce(state, draft => {
                draft.numOfIceCream += action.payload
            })
        default:
            return state
    }
}
// Store
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));
console.log("Initial State: ", store.getState());

// bindActionCreators
const actions = redux.bindActionCreators( {orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch);

const unsubscribe = store.subscribe(() => {});

actions.orderCake();
actions.orderCake();
actions.orderCake(2);
actions.orderIceCream();
actions.orderIceCream(3);
console.log("--- Restocking ---");
actions.restockCake(5);
actions.restockIceCream(5);

unsubscribe();

