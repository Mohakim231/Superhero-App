import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { NavBar } from './components'
import { Aquaman, Best, Hero, Heroes, Home, NotFound } from './pages'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path='heroes' element={<Heroes/>}/>
          <Route path="heroes/:id" element={<Hero/>} />
          <Route path='aquaman' element={<Aquaman/>}/>
          <Route path='best' element={<Best/>}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
