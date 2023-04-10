import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home/Home';
import ScreenContent from './Routes/ScreenContent/ScreenContent';

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route to="/*" element={<ScreenContent/>}/>
            <Route to="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
