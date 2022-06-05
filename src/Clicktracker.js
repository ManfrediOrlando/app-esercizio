import React from "react"
export class Clicktracker extends React.Component {
    state = { pressedLast: {} }
   
    threeButton = () => {
          this.setState((state) => {
              return {
                  
              }
          })
      }
    render() {
        return (
            <div>
               <button onClick={this.threeButton}>Button I</button>
               <button onClick={this.threeButton}>Button II</button>
               <button onClick={this.threeButton}>Button III</button>
               <h1>Pressed last: {this.state.pressedLast}</h1>
            </div>
        ) 
    }
}
