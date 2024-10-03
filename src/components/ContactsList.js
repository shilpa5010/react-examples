//form.jsx

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentForm from './ContactUs';
import jsonData from '../db.json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function TableData() {
    const [Data, setData] = useState([]);
    const [Records, setRecords] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/contacts')
            .then(res => {
                setData(res.data)
                setRecords(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const Filter = (event) => {
console.log(event.target.value)
        setRecords(Data.filter(f => f.name.toLowerCase().includes(event.target.value))) 
    }
    return (
        <div className='container d-flex flex-column bg-light '>
            <h1>List of Contacts</h1>
            <div className='row w-100 mb-4'>
            <div className="form-group has-search col-6">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="text" className="form-control" placeholder="Search" onChange={Filter}/>
             </div>
             <div className="form-group has-search col-6 justify-content-end">
                <Link to="/addcontact" className="btn btn-success">Add +</Link>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">CONTACT</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Records.map((d, i) => (
                            <tr>
                                <th scope="row">{i+1}</th>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.contact}</td>
                                <td><Link to={`/viewcontact/${d.id}`} className='btn btn-secondary'>View</Link></td>
                                <td><Link to={`/updatecontact/${d.id}`} className='btn btn-info'>Update</Link></td>
                                <td><button onClick={e => handleDelete(d.id)} className='btn btn-primary'>Delete</button></td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>
    )
    const navigate = useNavigate();
    function handleDelete(id) {
        const confirm = window.confirm("are you sure you want to delete !!");
        if(confirm) {
            axios.delete("http://localhost:3000/contacts/"+id)
            .then(res => {
                navigate("/");
            })
        }
    
    }

}

export default TableData;
