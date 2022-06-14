import React from "react";

export function Sum({numbers=[1,2,3,4,5]}){
    
    return(
        <h1>
            {numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
        </h1>
    )

}