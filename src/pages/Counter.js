import React, { useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <p onClick={() => setCount(count + 1)}>Click here</p>
        </div>
    )
}
export default Counter;