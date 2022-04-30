import './App.css';
import Inicio from './components/Inicio';
import Ganador from './components/Ganador';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/ganador' element={<Ganador />}/>
      </Routes>
    </div>
  );
}

export default App;
