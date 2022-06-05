import React from "react"
export class Counter extends React.Component {
    state = {
        count: 0
    }
   
    //    Constructor not required
       componentDidMount(){
           setInterval(() => {
                this.setState((state) => {
                    return {
                        count: this.state.count + 1,
                    }
                })
            }, 1000)
       } 

    render() {
        return <div>
            <h1>Count: {this.state.count}</h1>
        </div>
    }
}

