import React from 'react'

export const Basket = ({ takeFruits, message }) => {

  return(
    <div className="basket">
      <div onClick={takeFruits}><span role="img" aria-label="basket">🧺</span></div>
      <p>{message}</p>
    </div>

  )
}
