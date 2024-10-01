//form.jsx

import React, { useState } from 'react';
import StudentForm from './ContactUs';
import jsonData from '../data.json';

function TableData() {
    const [Data, setData] = useState(jsonData);

    const tableRows = Data.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.contact}</td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalData = Data.length;
        data.id = totalData + 1;
        const updatedData = [...Data];
        updatedData.push(data);
        setData(updatedData);
    };

    return (
        <div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Sr.NO</th>
                        <th>Name</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
           <StudentForm func={addRows} />
        </div>
    );
}

export default TableData;
