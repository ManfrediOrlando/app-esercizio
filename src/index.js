import {createRoot} from "react-dom/client";
// import {App} from "./App"
// import { decrementCounter, incrementCounter, resetCounter } from "./state/CounterState";
import { store } from "./state/Store";
const container = document.getElementById("root")
const root = createRoot(container)
// root.render(<App />)

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(incrementCounter(5))
// store.dispatch(decrementCounter(3))
// store.dispatch(decrementCounter(6))
// store.dispatch(resetCounter())


