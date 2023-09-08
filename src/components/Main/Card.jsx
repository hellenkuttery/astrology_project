import React from 'react'
import "./Main.scss"

const Card = (data) => {
    console.log("data ne:",data);
  return (
    <div className="cardContainer">
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      
      <div className="imgContainer">
              <img src={data.image}  alt=""  width="50%"/>
      </div>

      <div className="over box">
        <span className="borderline"></span>
        <p className="form">
        <div className="date">
        <p>{data.date}</p>
      </div>
          <p>{data.desc}</p>
        </p>
        
      </div>
    </div>
  )
}

export default Card