import React from "react";

export function Welcome({name}){
    return(
        <div>
            {name && <h2>Hello, {name}</h2>}
            {!name && <h2>Hello, World</h2>}
        </div>
    )

}