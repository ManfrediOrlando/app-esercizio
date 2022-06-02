import React from "react";
import { Welcome } from "./Welcome";


export class App extends React.Component {
    render() {
       return (
          <div>
              <h1> My Awesome Application</h1>
              <Welcome name = "Riccardo"/>
          </div>
       )
    }
}