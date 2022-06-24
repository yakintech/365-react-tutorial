import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Todos() {

    const [todos, setTodos] = useState([])



    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                setTodos(res.data)
            })

    }, [])



    return (
        <ul>
            {
                todos && todos.map((item) => {
                    // return   <li><a href={'/todos/' + item.id}>{item.title}</a></li>
                    return <li>
                        <Link to={'/todos/' + item.id}>{item.title}</Link>
                    </li>
                })
            }
        </ul>
    )
}

export default Todos