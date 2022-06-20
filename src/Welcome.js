import React from "react";
import {Link, useParams} from "react-router-dom";

export function Welcome(){
    const {name = "World"} = useParams()
    return(
        <div>
            <h2>Hello, {name}!</h2>
            | <Link to="users">Go to User</Link>  |
        </div>
    )

}