import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Calendar from './pages/Calendar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Routes>
      {/* Reto: Investigar acerca del Context de React */}
    </BrowserRouter>
  );
}

export default App;
