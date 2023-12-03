import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({route , name}) => {
  return (
    <Link to={route} className=" btn-2">
        <span></span>
        <span></span>
        <h4>{name}</h4>
        </Link>
  )
}

export default Button

