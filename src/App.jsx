import { useState } from 'react'
import './App.css'
import Quiz from './Components/Quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Components/splashscreen'

function App() {

  return (
    <Router basename="/QuizAppReact">
      <Routes>
        <Route exact path="/" element={<Splash/>}/>
        <Route exact path="/quiz" element={<Quiz/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
