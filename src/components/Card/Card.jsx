import React from 'react'
import "./Cart.scss"
import {Link } from "react-router-dom";

const Card = () => {
  return (
    <Link className='link' to={`/product/${items.id}`}>
    <div className='Card'>
      <div className='image'>

      </div>
      <h2>{item.tittle}</h2>
      <div className="prices">
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>

    </div>


    </Link>
  )
}

export default Card