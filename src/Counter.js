import React from "react"
import { CounterDisplay } from "./CounterDisplay"

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0
    }
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, this.props.timeout ?? 1000)
    }

    render() {
        return <CounterDisplay count={this.state.count}/>
    }

    // OR

    // Counter.defaultProps = {
    //     initialValue = 30,
    //     incrementBy= 3,
    //     timeout= 500
    // }
}

