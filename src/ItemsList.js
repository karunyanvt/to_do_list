import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({items,handleChange,handleDelete} ) => {
  return (
    <ul>
                {items.map((i)=>(
                    <LineItem handleDelete={handleDelete} 
                              handleChange={handleChange}
                              i={i}
                              key={i.id}
                    />
                ))}
            </ul>
  )
}

export default ItemsList