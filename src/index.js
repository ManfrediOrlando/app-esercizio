import {createRoot} from "react-dom/client";
import {App} from "./App"
import { store } from "./state/Store";
import { usersState } from "./state/UsersState";
import { counterState } from "./state/CounterState";
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)


store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(counterState.actions.increment(50))
store.dispatch(counterState.actions.decrement(5))
store.dispatch(counterState.actions.reset())
store.dispatch(usersState.actions.add({id: 1, name: "tomato", completed: true}))
store.dispatch(usersState.actions.edit({ id: 1, data: {completed: false} }))
store.dispatch(usersState.actions.clear())






