import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import ScreenContent from './Routes/ScreenContent/ScreenContent';
import Login from './Routes/Login/Login';
import SafariMates from './Routes/SafariMates/SafariMates';
import GorillaGrades from './Routes/GorillaGrades/GorillaGrades';
import ParrotChat from './Routes/ParrotChat/ParrotChat';
import LearningLions from './Routes/LearningLions/LearningLions.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/*" element={<ScreenContent />}>
          <Route path="home" element={<Home />} />
          <Route path="safari-mates" element={<SafariMates />} />
          <Route path="gorilla-grades" element={<GorillaGrades />} />
          <Route path="parrot-chat" element={<ParrotChat />} />
          <Route  path="learning-lions" element={<LearningLions />} />
          <Route path="learning-lions/shapes" />
            <Route path="learning-lions/numbers" />
            <Route path="learning-lions/colors" />
            <Route path="learning-lions/animals" />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
