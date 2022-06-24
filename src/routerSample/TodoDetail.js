import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function TodoDetail() {

    let { id } = useParams();

    let location = useLocation();

    console.log('LOCATION', location);

    return (
        <>
            <h1>ID: {id}</h1>
        </>
    )
}

export default TodoDetail