import { Routes, Route } from "react-router-dom"
import songs from "./songs"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import GoogleLogin from "./pages/GoogleLogin"




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/google-login" element={<GoogleLogin />} />
      <Route path="/songs" element={<Songs songs={songs} />} />
    </Routes>
  )
}

export default App
