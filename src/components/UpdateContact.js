import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function UpdateContact() {
    //const [inputs, setInputs] = useState([])
    const [values, setValues] = useState({
        name: '',
        contact: ''
    })
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/contacts/' + id)
            .then(res => {
                //setInputs(res.data)
                setValues(res.data);
            }
            )
            .catch(err => console.log(err));
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues(values => ({ ...values, [name]: value }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        console.log("values");console.log(values)
        event.preventDefault();
        axios.put("http://localhost:3000/contacts/" + id, values)
            .then(res => {
                console.log(res);
                navigate("/contact");
            })
            .catch(err => console.log(err));
    }
    return (

        <div className='container'>
            <h3 className='bg-grey'> Update Contact</h3>
            <div className='form-group row justify-content-center'>
                <div className='col-6 border bg-white shadow px-5 pb-5 rounded'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-4">
                            <input type="text" name='name' id="name" className="form-control" placeholder="Name" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />

                        </div>
                        <div className="form-group m-4">
                            <input type="text" name='contact' id='contact' className="form-control" placeholder="Contact" value={values.contact} onChange={e => setValues({ ...values, contact: e.target.value })} />

                        </div>
                        <div className="form-group">
                            <button type='submit' name='Contact' className="btn btn-primary m-4">Update</button>
                            <Link to="/contact" name='Contact' className="btn btn-primary">Back</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}
