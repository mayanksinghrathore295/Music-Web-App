import React, { useState,useCallback } from 'react'

function Navbar({data,handleSearch}) {
    
  return (
    
   
 <div className="w-full px-20 py-3 flex justify-between items-center">
  <input placeholder='Enter Artist Name' type="text" onChange={(e) => handleSearch(e.target.value)}  />
  <div className="flex items-center p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3">
    <h3>Favourites</h3>
    <h4>{data.filter(item=>item.added).length}</h4>
  </div>
</div>

  )
}

export default Navbar