import React from 'react'
import "./Card.css"

const Card = (props,description) => {
  return (
   <div className="Card">
    <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="" className="src" width={333}
    style={{border:"2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
