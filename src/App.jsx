import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./routes/ProtectedRoute"

import Layout from "./layout/Layout"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
