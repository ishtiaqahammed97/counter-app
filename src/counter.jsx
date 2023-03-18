import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (

            <div>
                <h1>This is counter</h1>
                <h3>count id:{this.props.id}</h3>
                {/* <h1>{this.state.count}</h1> */}
                <button onClick={() => this.props.handleIncrement(this.props.counter)}>increment</button>
                <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
            </div>
        );
    }
}