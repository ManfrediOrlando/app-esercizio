import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterState } from "./CounterState";
import { usersState } from "./UsersState";


const rootReducer = combineReducers({
    counter: counterState.reducer,
    users: usersState.reducer,
})

export const store = createStore(rootReducer, composeWithDevTools())



