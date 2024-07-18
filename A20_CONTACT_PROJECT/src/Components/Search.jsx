import React from 'react'
import { IoMdSearch } from "react-icons/io";


const Search = () => {
  return (
    <div className='mt-[10px] flex relative items-center'>
        <IoMdSearch className='text-white ml-2 text-[32px] absolute ' />
      <input type="text" placeholder='Search Contact' className='h-[40px] w-[280px] bg-transparent border border-white rounded-[10px] text-white pl-12'/>
    </div>
  )
}

export default Search
