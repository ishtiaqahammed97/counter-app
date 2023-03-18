import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    // state = {
        
    // }

    // handleIncrement(counter) {
    //     console.log('increment: ', counter)
    // }

    // handleReset() {
    //     const counters = [...this.state.counters]
    //     counters.map(counter => console.log(counter))

    //     this.setState({ counters });
    //     console.log({counters})
    //     console.log(this.state)
    //     console.log('from reset handle')
    // }

    // handleDelete = (counterID) => {
    //     const counters = this.state.counters.filter(c => c.id !== counterID);
    //     this.setState({ counters })
    // }

    
    render() {
        return (
            <div>
                {/* <button onClick={this.handleReset}>Reset</button>

                {
                    this.state.counters.map(counter => <Counter
                        key={counter.id}
                        handleDelete={this.handleDelete}
                        value={counter.value}
                        id={counter.id}
                        handleIncrement={this.handleIncrement}
                        counter={counter}
                    ></Counter>)
                } */}
            </div>
        );
    }
}

export default Counters;