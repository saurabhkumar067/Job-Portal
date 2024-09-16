import React from 'react'
import Navbar from './components/navSection/Navbar'
import Main from './components/MainSection/Main'
import SearchAllAccess from './components/searchSection/SearchAllAccess'

function App() {
  return (
   <>
   <Navbar/>
   <Main/>
   <SearchAllAccess/>
   </>
  )
}

export default App

// import React from 'react'

// function App() {
//   return (
//     <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
//   <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//     This text size adjusts based on the screen size.
//   </p>
// </div>

//   )
// }

// export default App