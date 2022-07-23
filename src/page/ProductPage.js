import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const ProductPage = () => {
    const[query,setQuery]=useSearchParams()
    console.log("ddd",query.get("q")); // products?q=skirt 에서 skirt를 가져옴. //
  return (
    <div>
        <h1>show all product</h1>
    </div>
  )
}
