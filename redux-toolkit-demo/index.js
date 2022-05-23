const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/iceCream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered(3));
// console.log("--- Restocking ---");
// store.dispatch(cakeActions.restocked(5));
// store.dispatch(iceCreamActions.restocked(5));

console.log("--- Fetching User ---");
store.dispatch(fetchUsers());

