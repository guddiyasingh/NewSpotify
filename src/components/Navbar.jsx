// export default function Navbar() {
//   return (
//     <header className="h-16 bg-black border-b border-neutral-800 flex items-center justify-between px-6">

//       {/* Logo */}
//       <h1 className="text-xl font-bold text-green-500">
//         Spotify
//       </h1>

//       {/* Auth Buttons */}
//       <div className="space-x-4">
//         <button className="text-sm text-gray-300 hover:text-white">
//           Sign up
//         </button>
//         <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:scale-105 transition">
//           Log in
//         </button>
//       </div>

//     </header>
//   )
// }

import { ChevronLeft, ChevronRight, User } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function TopNavbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 bg-[#101010] px-6 py-4 flex items-center justify-between">
      
      {/* Left: Back / Forward */}
      <div className="flex gap-2">
        <button className="bg-black p-2 rounded-full hover:opacity-80">
          <ChevronLeft className="text-white" size={18} />
        </button>
        <button className="bg-black p-2 rounded-full hover:opacity-80">
          <ChevronRight className="text-white" size={18} />
        </button>
      </div>

      {/* Right: Auth */}
      {!user ? (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="text-gray-300 hover:text-white font-semibold"
          >
            Sign up
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Log in
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black px-3 py-1 rounded-full">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                className="w-7 h-7 rounded-full"
                alt="profile"
              />
            ) : (
              <User className="text-white" size={18} />
            )}
            <span className="text-white text-sm font-semibold">
              {user.displayName || "User"}
            </span>
          </div>

          <button
            onClick={logout}
            className="text-gray-400 hover:text-white text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  )
}
