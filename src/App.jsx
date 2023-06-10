import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Register from './components/Register';
import SampleForm from './components/form_structure/form';

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/form" element={<SampleForm />} />
    </Routes>

  );
}

export default App;
