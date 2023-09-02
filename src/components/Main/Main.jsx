import React from 'react'
import "./Main.scss"
import {data} from "../../helpers/data"
import Card from './Card';

const Main = () => {
  console.log(data);
  return (
    <div className="MainContainer">
    {  data.map((item)=> <Card {...item}/>  )}
    </div>
  )
}

export default Main