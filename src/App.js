import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Container } from "./Container";


export class App extends React.Component{
    render(){
        return(
            <Container title="Titolo del container">
                <HelloWorld renderGreating={true}/>
            </Container>   
        )
    }
}