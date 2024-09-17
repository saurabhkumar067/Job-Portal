import React, { useState } from 'react'
import Search from './Search'
import Post from './Post'

function SearchAllAccess() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedContract, setSelectedContract] = useState("");
  const handleFilter = (search, contract) => {
    setSearchInput(search);
    setSelectedContract(contract);
  };
  return (
    <div className='px-28 flex justify-between w-full gap-4 overflow-hidden xs:px-2 xs:block md:flex lg:px-28'>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} onFilter={handleFilter}/>
        <Post  searchInput={searchInput} selectedContract={selectedContract}/>
    </div>
  )
}

export default SearchAllAccess