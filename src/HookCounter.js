import { useEffect, useState } from "react"

export function HookCounter({initialValue}){
    const [counter, setCounter] = useState(initialValue)

    // useEffect(() => {
    //     console.log(`The counter is now ${counter}`)
    // }, [counter])

    useEffect(function onCounterChange() {
        console.log(`The counter is now ${counter}`)
    }, [counter])

    function handleCounterIncrement(){
        setCounter(c => c + 1)

    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterReset}>Restore</button>
        </div>
    )
}