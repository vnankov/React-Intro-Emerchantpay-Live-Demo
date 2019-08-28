import React from 'react'

export const ListItem = ({ fruit, show }) => {

  return(
    <p className={show}>{fruit}</p>
  )
}