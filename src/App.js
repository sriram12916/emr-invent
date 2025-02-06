
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GeneralStore from './Components/GeneralStore'
import Procurement from './Components/Procurement'
import Navbar from './Components/Navbar'
// import Stockadjust1 from './Components/Pages/Stockadjust1'


const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar>
<Routes>
  <Route path='/' element={<GeneralStore/>} />
  <Route path='/procurement' element={<Procurement/>} />
  {/* <Route path='/stockadjust1' element={<Stockadjust1/>} /> */}


</Routes>
</Navbar>
</BrowserRouter>
    </>
  )
}

export default App