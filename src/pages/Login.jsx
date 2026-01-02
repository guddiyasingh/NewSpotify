import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/") // home page
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-white">

        <h1 className="text-3xl font-bold text-center mb-8 text-green-500">
          Spotify
        </h1>

        <div className="bg-neutral-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Log in to Spotify
          </h2>

          {error && (
            <p className="bg-red-500 text-black text-sm p-2 rounded mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded bg-neutral-800"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded bg-neutral-800"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-full mt-4"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-center text-gray-400 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-white underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
