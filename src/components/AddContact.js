import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddContact() {
    const [inputs, setInputs] = useState("")

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.post("http://localhost:3000/contacts",inputs)
        .then(res => {
            console.log(res);
            navigate("/contact");
        })
        .catch(err => console.log(err));
        clearState();
    }
    const clearState = () => {
        setInputs('');
    };

    return (
        <div className='container'>
            <h3 className='bg-grey'> Add Contact</h3>
            <div className='form-group row justify-content-center'>
                <div className='col-6 border bg-white shadow px-5 pb-5 rounded '>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-4">
                            <input type="text" name='name' id="name" required className="form-control" placeholder="Name" value={inputs.name || ""} onChange={handleChange} />

                        </div>
                        <div className="form-group m-4">
                            <input type="text" name='contact' id='contact' required className="form-control" placeholder="Contact" value={inputs.contact || ""} onChange={handleChange} />

                        </div>

                                <button type='submit' name='Contact' className="btn btn-primary m-4">Enter</button>
                                <Link to="/contact" name='Contact' className="btn btn-primary">Back</Link>


                    </form>
                </div>
            </div>
        </div>
    )
}
