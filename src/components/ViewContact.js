import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ViewContact() {
    const [data, setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:3000/contacts/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
  return (
    <div className='container'>
        <h3 className='bg-grey'> Detail of Contact</h3>
        <div  className='form-group row justify-content-center'>    
            <div className='col-6 border bg-white shadow px-5 pb-5 rounded'    >
            <div className='mb-2'>
                <strong>Name: {data.name}</strong>
            </div>
            <div className='mb-2'>
                <strong>Contact: {data.contact}</strong>
            </div>
            <Link to={`/updatecontact/${id}`} name='Contact' className="btn btn-primary m-4">Edit</Link>
            <Link to="/contact" name='Contact' className="btn btn-primary">Back</Link>
        </div>
        </div>
    </div>
  )
}
