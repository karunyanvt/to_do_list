import { useState,useEffect } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const getStoredItems = () => {
    const savedItems = localStorage.getItem("to_do_list");
    try {
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (error) {
      console.error("Error parsing stored items:", error);
      return []; // Return an empty array on error
    }
  };

  const [items, setItems] = useState(getStoredItems);

const handleChange=(id)=>{
    const updatedItem=items.map((i)=>(
        i.id===id?({...i,checked:!i.checked}):i))
    setItems(updatedItem)
    localStorage.setItem("to_do_list",JSON.stringify(updatedItem))
};


const handleDelete=(id)=>{
    const updatedItem=items.filter((i)=>
        i.id!==id )
    setItems(updatedItem)
    localStorage.setItem("to_do_list",JSON.stringify(updatedItem))
}

const [newItem,setNewItem]=useState("");


const handleSubmit=(e)=>{
  e.preventDefault()
  setItems((prevItems)=>(
    [...prevItems,{id:(prevItems.length?prevItems[prevItems.length-1].id+1:1),checked:false,item:newItem}]
  ))
  setNewItem("")
}
const [search,setSearch]=useState("");

useEffect(() => {
  localStorage.setItem("to_do_list", JSON.stringify(items));
}, [items]);



  return (
    <div className="App bg-sky-800 min-h-screen h-auto p-5">
      <Header/>
      <div className='p-5'>
        <AddItem 
          handleSubmit={handleSubmit} 
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className='w-8/12 bg-amber-300 mx-auto p-5 rounded-lg'>
        <Content 
          handleDelete={handleDelete} 
          handleChange={handleChange}
          items={items.filter((item)=>((item.item).toLowerCase().includes(search.toLowerCase())
          ))}
        />
      </div>
    </div>
  );
}

export default App;
