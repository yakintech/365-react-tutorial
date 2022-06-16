import React, { useState } from 'react'
import { suppliersData } from '../data/suppliersData';

function StateArraySample2() {

    const [suppliers, setSuppliers] = useState(suppliersData);

    const deleteSupplier = (id) => {

        let newSuppliers = suppliers.filter(q => q.id != id);

        setSuppliers(newSuppliers)
    }

    const refreshSuppliers = () => {
        setSuppliers(suppliersData);
    }

    return (
        <>
            <button onClick={() => refreshSuppliers()}>Refresh</button>
            <h1>Suppliers Count: {suppliers.length}</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Name</td>
                    <td>Contact Title</td>
                    <td>Delete</td>
                </tr>
                {
                    suppliers && suppliers.map((item) => {

                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr>

                    })
                }
            </table>

        </>
    )
}

export default StateArraySample2