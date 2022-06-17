import React from "react"
import {Link} from "react-router-dom";
export class Counter extends React.Component {
    state = { count: this.props.initialValue, }
   
      handleCounterIncrement = () => {
          this.setState((state) => {
              return {
                  count: state.count + this.props.incrementBy,
              }
          })
      }
    render() {
        return (
            <div>
               <h1>Count: {this.state.count}</h1>
               <button onClick={this.handleCounterIncrement}>Increment</button>
               <Link to="/">Back</Link>
            </div>
        ) 
    }
}
Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}