import { useState } from "react"


export function CarDetails(){
    const [model, setModel] = useState("Alfa Romeo")
    const [year, setYear] = useState("2018")
    const [color, setColor] = useState("White")


    function handleModelChange(event) {
        setModel(event.target.value)
    }

    function handleYearChange(event) {
        setYear(event.target.value)
    }

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return(
        <form className="css">
            <label htmlFor="model">{model}</label>
            <input type="text" id="model" value={model} onChange={handleModelChange}/>

            <label htmlFor="year">{year}</label>
            <input type="text" id="year" value={year} onChange={handleYearChange}/>

            <label htmlFor="color">{color}</label>
            <input type="text" id="color" value={color} onChange={handleColorChange}/>
        </form>
    )
}