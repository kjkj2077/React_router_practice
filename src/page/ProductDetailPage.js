import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetailPage = () => {
    const {id}= useParams() //:id값 리턴시켜줌.
    console.log(id)
    return (
        <div>
            <h1>Detail{id}</h1>
        </div>
    )
}
