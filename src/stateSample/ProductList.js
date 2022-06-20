import React, { useState } from 'react'
import { productsData } from '../data/productsData'


function ProductList() {

    const [products, setProducts] = useState(productsData);
    const [orderBy, setorderBy] = useState(true)


    const orderProducts = () => {

        if (orderBy) {
            products.sort((a, b) => a.name.localeCompare(b.name));
            setorderBy(false)
        }
        else{
            products.sort((a, b) => b.name.localeCompare(a.name));
            setorderBy(true);
        }

        setProducts([...products])

    }

    return (
        <>
            <div>
                <button onClick={() => orderProducts()}>Order Products</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products && products.map((item) => {
                            var itemColor = ''
                            if (item.unitPrice > 20) {
                                itemColor = 'red'
                            }
                            return <tr style={{ color: itemColor }}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice.toFixed(2)}</td>
                            </tr>
                            // if (item.unitPrice > 20) {
                            //     return <tr style={{color:'red'}}>
                            //         <td>{item.id}</td>
                            //         <td>{item.name}</td>
                            //         <td>{item.unitPrice.toFixed(2)}</td>
                            //     </tr>
                            // }
                            // else {
                            //     return <tr>
                            //         <td>{item.id}</td>
                            //         <td>{item.name}</td>
                            //         <td>{item.unitPrice.toFixed(2)}</td>
                            //     </tr>
                            // }
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default ProductList