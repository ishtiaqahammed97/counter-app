import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import './Counters.css'

const Counters = () => {
    const [countersState, setCountersState] = useState([
        { id: 1, value: 4 },
        { id: 2, value: 1 },
        { id: 3, value: 3 },
        { id: 4, value: 0 }
    ])
    console.log(countersState)
    // useEffect(() => {
    //     setCountersState(fakeData)
    // }, [])

    // Applied increment function 
    const handleIncrement = (counter) => {
        const stateCounters = [...countersState]
        const index = stateCounters.indexOf(counter)
        stateCounters[index] = { ...counter }
        stateCounters[index].value++;

        setCountersState(stateCounters)
        // console.log(stateCounters)
    }
    const handleDecrement = (counter) => {
        const stateCounters = [...countersState]
        const index = stateCounters.indexOf(counter)
        stateCounters[index] = { ...counter }
        if(stateCounters[index].value > 0) {
            stateCounters[index].value--;
        }

        setCountersState(stateCounters)
        // console.log(stateCounters)
    }

    const addNewCounter = () => {
        const counterCopy = [...countersState]
        const newCounter = {
            id: counterCopy.length + 1,
            value: 0
        }
        counterCopy.push(newCounter)
        setCountersState(counterCopy);
        // console.log(counterCopy)
    }

    const handleReset = () => {
        const resetCounters = countersState.map(counter => {

            counter.value = 0;
            return counter;
        });

        // console.log(resetCounters)
        setCountersState(resetCounters);
    }

    const handleDelete = (counterID) => {
        const counters = countersState.filter(item => item.id !== counterID);
        setCountersState(counters)
        // console.log(counters)
    }

    // const handleUpdate = () => {
    //     console.log('handle from update')
    // }

    return (
        <div className='container'>
            {/* <h3>Length: {countersState.length}</h3> */}
            <button className='all-btn' onClick={handleReset}>Reset</button> <br />
            <button className='all-btn' onClick={addNewCounter}>Add New Counter</button>
            {/* <button onClick={handleUpdate}>Update</button> */}

            <div className='counter-view'>
            {
                countersState.map(counter => <Counter
                    key={counter.id}
                    handleDelete={handleDelete}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    counter={counter}
                ></Counter>)
            }
            </div>
        </div>
    );
};

export default Counters;