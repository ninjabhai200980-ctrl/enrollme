import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Employees from './pages/Employees'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  )
}
