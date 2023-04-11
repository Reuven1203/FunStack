import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home/Home';
import ScreenContent from './Routes/ScreenContent/ScreenContent';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ScreenContent/>}>
            <Route path="" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
