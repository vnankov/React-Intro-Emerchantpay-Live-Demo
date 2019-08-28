import React from 'react'

export const Button = ({ name, speed }) => {

  return(
    <button onClick={speed}>{name}</button>
  )
}