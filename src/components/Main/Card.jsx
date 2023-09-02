import React from 'react'
import "./Main.scss"

const Card = (data) => {
    console.log("data ne:",data);
  return (
    <div className="cardContainer">
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      <div className="date">
        <p>{data.date}</p>
      </div>
      <img src={data.image}  alt=""  width="50%"/>
      <div className="over">
        <p>{data.desc}</p>
      </div>
    </div>
  )
}

export default Card