import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Killer from './Killer.jsx'
import Perks from './Perks.jsx'
import Survi from './Survi.jsx'
import Surviperks from './SurviPerks.jsx'


function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Killer />} />
        <Route path="/killers" element={<Killer />} />
        <Route path="/perks" element={<Perks />} />
        <Route path="/survivor" element={<Survi />} />
        <Route path="/surviperks" element={<Surviperks />} />
      </Routes>
    </Router>
  </>)
}

export default App
