import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import ScreenContent from './Routes/ScreenContent/ScreenContent';
import Login from './Routes/Login/Login';
import SafariMates from './Routes/SafariMates/SafariMates';
import GorillaGrades from './Routes/GorillaGrades/GorillaGrades';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/*" element={<ScreenContent />}>
          <Route path="home" element={<Home />} />
          <Route path="safari-mates" element={<SafariMates />} />
          <Route path="gorilla-grades" element={<GorillaGrades />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
