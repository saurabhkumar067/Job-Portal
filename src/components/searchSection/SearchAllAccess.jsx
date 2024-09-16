import React from 'react'
import Search from './Search'
import Post from './Post'

function SearchAllAccess() {
  return (
    <div className='px-28 flex justify-between w-full gap-4 overflow-hidden xs:px-2 xs:block md:flex lg:px-28'>
        <Search/>
        <Post/>
    </div>
  )
}

export default SearchAllAccess