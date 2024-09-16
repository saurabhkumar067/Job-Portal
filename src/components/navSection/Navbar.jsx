import React from 'react'
import Logo from "../../assets/BG Logo/White BG Logo.png"

function Navbar() {
  return (
    <nav>
        <div className='flex justify-between items-center  px-28 border-b-[1px] xs:px-1 xs:w-full lg:px-28'>
            <div className="logo">
                <img src={Logo} className='w-44 xs:w-32 lg:w-44' alt="" />
            </div>
           
        </div>
    </nav>
  )
}

export default Navbar