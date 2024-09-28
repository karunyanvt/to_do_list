import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef=useRef();
    return (
        <form action="" onSubmit={handleSubmit} className='p-3 text-lg'>
            <label htmlFor="additem" className='mr-12 ml-6 font-medium'>Add Items</label>
            <input type="text" required autoFocus id='additem' placeholder='Add Task' 
            ref={inputRef}
            value={newItem} onChange={(e)=>setNewItem(e.target.value)}
            className='rounded-lg p-2 text-sm'/>
            <button type='submit'  onClick={() => inputRef.current.focus()} className='ml-2 bg-green-600 p-0.5 rounded-md hover:bg-green-400 '><FaPlus/></button>
        </form>
    )
}

export default AddItem