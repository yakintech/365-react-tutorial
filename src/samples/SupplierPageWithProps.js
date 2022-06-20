import React, { useEffect, useState } from 'react'
import SupplierList from './SupplierList';
import axios from 'axios'


function SupplierPageWithProps() {


    const [suppliers, setSuppliers] = useState([]);

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


    return (
        <>

            <h1>Suppliers Count: {suppliers.length}</h1>
            <SupplierList suppliers={suppliers}></SupplierList>
        </>

    )
}

export default SupplierPageWithProps