import { FaTrash } from "react-icons/fa";

const LineItem = ({i,handleChange,handleDelete}) => {

  return (
    <li className='flex my-4' key={i.id} >
                        <input type="checkbox" checked={i.checked} onChange={()=>{
                            handleChange(i.id)
                        }} className="size-10 rounded-lg"/>
                        <p style={(i.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>{
                            handleChange(i.id)
                        }} className="ml-5 text-lg pt-1">{i.item}</p>
                        <FaTrash role='button' tabIndex="0"  onClick={()=> handleDelete(i.id)} className="mr-0 ml-auto size-6 text-red-600 hover:text-red-950"/>
                    </li>
  )
}

export default LineItem