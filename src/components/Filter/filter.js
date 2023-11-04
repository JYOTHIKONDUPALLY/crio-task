import React, { useState } from 'react';

export default function Filter({handleFilter}){
  const [search, setSearch] =useState("");

  const handleInputChange=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <div>
       <input
        type="text"
        placeholder="Search by name, email, or role"
        value={search}
        onChange={handleInputChange}
      /> 
       <button onClick={() => handleFilter(search)}>Search</button>
    </div>
  )
}

// import React from 'react'

// const Filter = () => {
//   return (
//     <div>filter</div>
//   )
// }

// export default Filter


