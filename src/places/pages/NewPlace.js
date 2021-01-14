import React, { useState } from 'react'

const NewPlace = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = () => setCounter(counter + 1)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}


export default NewPlace;