import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Homepage = () => {
    const navigate=useNavigate()
    const goProductPage = ()=>{
        navigate('/products?q=pants') //?(쿼리) 뒤에 있는 값은 url 경로에 영향을 주지않는다.
    }
    return (
        <div>
            <h1>Homepage</h1>
            <Link to ='/about'> Aboutpage </Link>
            <button onClick={goProductPage}>go to product page</button>
        </div>
    )
}
