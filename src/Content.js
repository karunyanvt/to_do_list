import React from 'react'
import './App.css';
import ItemsList from './ItemsList';
const Content = ({items,handleChange,handleDelete} ) => {
    
    return (
        <main >
            {items.length?<ItemsList 
                            handleDelete={handleDelete} 
                            handleChange={handleChange}
                            items={items}
                           /> : (<p>Add Tasks </p>)}
        </main>
    )
}
export default Content;