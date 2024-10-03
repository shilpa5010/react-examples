import React, { useState } from 'react'
export default function ContactUs(props) {
    const [inputs, setInputs] = useState("")

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
       /* const val = {
            inputs.name,
            city,
        };*/
        props.func(inputs);
        clearState();
    }
    const clearState = () => {
        setInputs('');
    };
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" name='name' id="name" value={inputs.name || ""} onChange={handleChange} />
            </label><br />
            <label>Contact:
                <input type="text" name='contact' id='contact' value={inputs.contact || ""} onChange={handleChange} />
            </label><br />
            <label>
                <button type='submit' name='Contact'>Enter</button>
            </label>
        </form>
        </div>
    )
}
/**
 * Examples of Forms - https://www.w3schools.com/react/react_forms.asp
 */

/** We can also create like this 
 * 
 * function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

 */