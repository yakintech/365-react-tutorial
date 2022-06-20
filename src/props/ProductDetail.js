import React from 'react'

function ProductDetail(props) {


  return (
    <>
        <h1>{props.product.name}</h1>
        <h2>{props.product.unitPrice}</h2>
    </>
  )
}

export default ProductDetail