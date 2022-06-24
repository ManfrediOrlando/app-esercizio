import { createStore } from "redux";
import { counterReducer, decrementCounter, incrementCounter, resetCounter } from "./CounterState";

export const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter(5))
store.dispatch(decrementCounter(3))
store.dispatch(decrementCounter(6))
store.dispatch(resetCounter())

