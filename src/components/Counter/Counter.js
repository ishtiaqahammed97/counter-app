import React from 'react';
import './Counter.css'

const Counter = (props) => {
    // console.log(props)
    const { id, value } = props.counter
    const handleIncrement = props.handleIncrement;
    const handleDecrement = props.handleDecrement;
    const handleDelete = props.handleDelete
    // console.log(props.counter)
    return (
        <div className='counter'>
            <h1>This is counter</h1>
            <h3>Count id: {id}</h3>
            <h1 className='value'>{value}</h1>
            <button className='counter-btn' onClick={() => handleIncrement(props.counter)}>increment</button>
            <button className='counter-btn' onClick={() => handleDecrement(props.counter)}>Decrement</button>
            <button className='counter-btn' onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export default Counter;