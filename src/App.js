import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Timer from './Components/Timer';
import Task from './Components/Task';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Timer/>}/>
        <Route path='/task' element={<Task/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
