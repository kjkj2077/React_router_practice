import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Aboutpage = () => {
    const navigate =useNavigate()
    const gotoHomepage =()=>{
        navigate('/')
    }
    return (
        <div>
            <h1> Aboutpage</h1>
            <button onClick={gotoHomepage}>버튼</button>
            <Link to ='/'> Home </Link>
        </div>
    )
}
