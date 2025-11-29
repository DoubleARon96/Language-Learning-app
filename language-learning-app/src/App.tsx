import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './elements/Menu.js';
import Words from './elements/Words.js'
import './App.css'


function App() {
  

  return (
    <>
      <div>
      <Menu />
      </div>

      <div>
        <Words />
    </div>
    </>
  )
}

export default App
