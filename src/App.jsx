
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Playlist from "./pages/Playlist"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playlist/:id" element={<Playlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

