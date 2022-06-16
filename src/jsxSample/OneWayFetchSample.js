import React from 'react'

function OneWayFetchSample() {

    let categories = [];

    fetch("https://northwind.vercel.app/api/categories")
        .then(res => res.json())
        .then((data) => {
            categories = data

            console.log('LENGTH', categories.length);
        })

    return (
        <div>Category Length : {categories.length}</div>
    )
}

export default OneWayFetchSample