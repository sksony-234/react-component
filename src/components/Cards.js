import React from 'react'
import Card from './Card'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className="cards">
        {
            props.data.map((data, ind)=>(
                <Card key={ind} card_data={data} />
            ))
        }
    </div>
  )
}

export default Cards