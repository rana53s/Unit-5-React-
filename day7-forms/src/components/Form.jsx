import { useEffect, useState } from "react";
import axios from "axios";
import { TableData } from "./Table";
import './table.css';

export const Form = () => {
    
    const [formData, setFormData] = useState({});
    const [create, setCreate] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const handle = (e) => {
        const { id, value } = e.target;
        setFormData({...formData, [id] : value});
    }

    const submit = (e) => {
        axios.post("http://localhost:8080/users", formData).then(() => {})
    }

    const getData = (e) => {
        axios.get("http://localhost:8080/users", formData).then((res) => {
            setCreate(res.data);
        });
    }

    const deleteData = (id) => {
        const res = create.filter((el) => {
            return el.id != id;
        });
        setCreate([...res]);
    };


    return <div>
        <form onSubmit={submit}>
            <h2>Employee Details</h2>
            <input
                type="text"
                id="name"
                onChange={handle}
                placeholder="Enter username"
            />
            <input type="text" id="age" onChange={handle} placeholder="Enter age" />
            <input type="text" id="address" onChange={handle} placeholder="Enter address" />
            <select>
                type="department"
                id="department"
                onChange={handle}
                placeholder = "Enter Department"
                <option>----</option>
                <option>SDE</option>
                <option>Manager</option>
                <option>HR</option>
            </select>
            <input type="text" id="salary" onChange={handle} placeholder="Enetr salary"/>
            <input type="checkbox" id="maritalstate" onChange={handle} placeholder="Marital State"></input>
            <input type="submit" value={"Create user"} />
        </form>

        <table id="table" >
            <thead >
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>MaritalState</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className="tBody">
                {create.map((el) => (
                    <TableData data={el} key={el.id} deleteData={deleteData} />
                ))}
            </tbody>
        </table>

    </div>
}