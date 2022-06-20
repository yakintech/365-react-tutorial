import React, { useEffect, useState } from 'react'
import SupplierList from './SupplierList';
import axios from 'axios'


function SupplierPage() {


    const [suppliers, setSuppliers] = useState([]);

    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');


    useEffect(() => {
        getSuppliers();
    }, []);


    const getSuppliers = () => {
        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {
                setSuppliers(data)
            })
    }

    const removeSupplier = (id) => {

        fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                getSuppliers();
            })

    }

    const addNewSupplier = () => {

        axios.post("https://northwind.vercel.app/api/suppliers", {
            companyName : companyName,
            contactName: contactName,
            contactTitle : contactTitle
        })
        .then((res) => {
            getSuppliers();
        })

    }


    return (
        <>
        <div>
            <div>
                <label>Company Name: </label>
                <input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>

            <div>
                <label>Contact Name: </label>
                <input type='text' value={contactName} onChange={(e) => setContactName(e.target.value)} />
            </div>


            <div>
                <label>Contact Title: </label>
                <input type='text' value={contactTitle} onChange={(e) => setContactTitle(e.target.value)} />
            </div>
            
            <div>
                <button onClick={() => addNewSupplier()}>Add New Supplier</button>
            </div>


        </div>
        <h1>Suppliers Count: {suppliers.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers && suppliers.map((item) => {

                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td><button onClick={() => removeSupplier(item.id)}>Delete</button></td>
                            </tr>

                        })
                    }
                </tbody>

            </table>
        </>

    )
}

export default SupplierPage