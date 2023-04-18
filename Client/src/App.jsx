import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import ScreenContent from './Routes/ScreenContent/ScreenContent';
import Login from './Routes/Login/Login';
import SafariMates from './Routes/SafariMates/SafariMates';
import GorillaGrades from './Routes/GorillaGrades/GorillaGrades';
import ParrotChat from './Routes/ParrotChat/ParrotChat';
import JungleRewards from './Routes/JungleRewards/JungleRewards';
import LearningLions from './Routes/LearningLions/LearningLions.jsx';
import Shapes from './Routes/LearningLions/Shapes/Shapes.jsx';
import Animals from './Routes/LearningLions/Animals/Animals.jsx';
import Numbers from './Routes/LearningLions/Numbers/Numbers.jsx';
import Colors from './Routes/LearningLions/Colors/Colors.jsx';

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
          <Route path="jungle-rewards" element={<JungleRewards />} />
          <Route path="learning-lions" element={<LearningLions />} />
          <Route path="learning-lions/shapes" element={<Shapes />} />
          <Route path="learning-lions/colors" element={<Colors />} />
          <Route path="learning-lions/animals" element={<Animals />} />
          <Route path="learning-lions/shapes" element={<Shapes />} />
          <Route path="learning-lions/numbers" element={<Numbers />} />
          <Route path="learning-lions/animals" element={<Animals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
