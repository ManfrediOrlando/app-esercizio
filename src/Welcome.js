import React from "react";
import {Link} from "react-router-dom";

export function Welcome({name}){
    return(
        <div>
            {name && <h2>Hello, {name}</h2>}
            {!name && <h2>Hello, World</h2>}
            <Link to="/login">Login to the App</Link>
            <Link to="/counter">Go to the Counter</Link>
        </div>
    )

}