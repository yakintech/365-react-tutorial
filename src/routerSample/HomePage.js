import React from 'react'
import {useNavigate} from 'react-router-dom'


function HomePage() {

    let navigate = useNavigate();

    const goToTodos = () => {
        
        navigate('/todos')
    }

    return (
        <>
            <div>HomePage</div>
            <button onClick={() => goToTodos()}>Go to Todos Page</button>
        </>

    )
}

export default HomePage