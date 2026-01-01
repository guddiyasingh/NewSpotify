import { Link } from "react-router-dom"

export default function Signup() {
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
            Sign up to start listening
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-full mt-4 transition">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-neutral-700" />
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-grow h-px bg-neutral-700" />
          </div>

          {/* Google */}
          <button className="w-full border border-neutral-600 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-800 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Login link */}
          <p className="text-sm text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-white underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
