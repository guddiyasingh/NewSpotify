import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

export default function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState("")

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate("/") // go to home after login
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-white">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-8 text-green-500">
          Spotify
        </h1>

        {/* Card */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Log in to Spotify
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border border-neutral-600 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-800 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-neutral-700" />
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-grow h-px bg-neutral-700" />
          </div>

          {/* Signup link */}
          <p className="text-sm text-center text-gray-400">
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
