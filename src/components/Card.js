import React from 'react'
import './Card.css'

const Card = (props) => {
    const {img, rating, desc} = props.card_data;
  return (
    <div className="card_container">
        <div className="top">
            <img src={img} alt={desc} />
        </div>
        <div className="bottom">
            <h3>rating: {rating}</h3>
            <div className="desc">{desc}</div>
        </div>
        <button>Buy Now</button>
    </div>
  )
}

export default Card