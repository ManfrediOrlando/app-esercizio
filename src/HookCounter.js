import { useEffect, useState } from "react"

export function HookCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)


    useEffect(function onCounterChange() {
        console.log(`The counter is now ${counter}`)
    }, [counter])

    useEffect(() => {
        console.log(`I have mounted`)

        return() => {
            console.log(`I am about to be unmounted`)
        }
    },[])

    // da capire questa cosa perche non ne sono sicuro

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