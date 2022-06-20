import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setCounter] = useState(0);
    const [products, setProducts] = useState([]);


    //Component çalışırken BİR SEFERE MAHSUS BURASI ÇALIŞIR.  BİR DAHA ÇALIŞMAZ!
    useEffect(() => {

        console.log('Use Effect empty Array dependency!!');

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })

    }, [])


    useEffect(() => {

        console.log('Use Effect counter dependency !!');

    }, [counter])


    return (
        <>
            <ul>
                {
                    products.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </>
    )
}

export default EffectSample
