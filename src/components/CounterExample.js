import React, {useState} from 'react'

 function CounterExample(props) {
const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}{props.product}</h1>
      <p onClick={() => setCount(count+1)}>Click here</p>
    </div>
  )
}
export default CounterExample;