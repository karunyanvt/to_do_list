const SearchItem = ({search,setSearch,handleSearch}) => {
   

  return (
    <form action="" onSubmit={(e)=> e.preventDefault}  className='p-3 text-lg'>
        <label htmlFor="search" className='mr-6 font-medium '>Search Items</label>
        <input type="text"
            placeholder='Search Task'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}  className='rounded-lg p-2 text-sm'/>
    </form>
  )
}

export default SearchItem