import React from "react";
import {Link, useParams} from "react-router-dom";

export function Welcome(){
    const {name = "World"} = useParams()
    return(
        <div>
            <h2>Hello, {name}!</h2>
            <Link to="/login">Login to the App</Link> | <Link to="/counter">Go to the Counter</Link> | <Link to="/users/:username">Go to User</Link>
        </div>
    )

}