import React from 'react'


function Search({search, setSearch}) {

    function handleChange(e) {
    setSearch(e.target.value)
    console.log(search)
  }



  return (
    <div className='search'>
      <input type="text" placeholder="Search" onChange={handleChange} value = {search} />
       

    </div>
  )
}

export default Search