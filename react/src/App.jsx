import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Otp from './pages/Otp'
import Home from './pages/Home'
import EdDetails from './pages/EdDetails'
import Register from './pages/Register'
import './App.css'
import { useSelector } from 'react-redux'

function App() {

  const user = useSelector((state) => state.user);

  return (
       <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/eduDetails" element={<EdDetails />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/"
          element={
             user?.loggedIn ? <Home /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
