// eslint-disable-next-line no-unused-vars
import React from 'react'

function Card({items,index,handleData}) {
    
  return (
  <div className='w-60 bg-zinc-100 p-4 rounded-md flex flex-col gap-4 relative mt-10'>
<div className='flex items-center gap-4'>
  <div className='w-20 h-20 bg-orange-600 rounded-md'>
    <img  className="w-full h-full object-cover overflow-hidden rounded-md"src={items.image}/>
  </div>
  <div>
    <h3 className='text-xl font-semibold leading-none'>{items.artistName}</h3>
    <h6 className='text-sm'>{items.songName}</h6>
  </div>
</div>
<button className={`self-end mt-auto px-3 py-1 ${items.added?"bg-sky-500/75":"bg-orange-600"} text-white text-sm rounded-md hover:bg-orange-700`} onClick={()=>handleData(index)}>
  {items.added?"Favourites":"Added"}
</button>
</div>

      
//     </div>
   )
}

export default Card