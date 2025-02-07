
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneralStore from './Components/GeneralStore'
import Procurement from './Components/Procurement'
import Navbar from './Components/Navbar'
import Stockadjust1 from './Components/Pages/Stockadjust1'
import Stockadjust2 from './Components/Pages/Stockadjust2'





const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<GeneralStore/>} />
  <Route path='/procurement' element={<Procurement/>} />
  <Route path='/stockadjust2' element={<Stockadjust2/>} />
  <Route path='/stockadjust1' element={<Stockadjust1/>} />




</Routes>

</BrowserRouter>
    </>
  )
}

export default App