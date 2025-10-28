import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StoryLoader from './components/StoryLoader'
import './App.css'
import StoryGenerator from './components/StoryGenerator'

function App() {
  return (
     <Router>
      <div className='app-container'>
        <header className='heading'>
          <h1 className='tag'>Cipher Tales</h1>
          <h1 className='tagline'>Conquer your adventures</h1>
        </header>
        <main>
          <Routes>
            <Route path={"/story/:id"} element={<StoryLoader />}/>
            <Route path={"/"} element={<StoryGenerator />} />
          </Routes>
        </main>
      </div>
     </Router>
  )
}

export default App
