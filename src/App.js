import React from "react";
import { CarDetails } from "./CarDetails";
import "./index.css";


export class App extends React.Component{
    render(){
        return(
                <div>
                    <CarDetails/>
                </div>
        )
    }
}