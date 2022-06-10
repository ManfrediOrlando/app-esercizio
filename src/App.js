import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Container } from "./Container";


export class App extends React.Component{
    render(){
        return(
            <Container title="My Awesome Application">
                <HelloWorld renderGreating={true}/>
            </Container>   
        )
    }
}