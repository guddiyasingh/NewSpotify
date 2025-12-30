import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 bg-black p-6">
      <h1 className="text-2xl font-bold text-spotify mb-6">
        Spotify
      </h1>

      <nav className="space-y-4">
        <Link to="/" className="block hover:text-spotify">
          🏠 Home
        </Link>
        <Link to="/login" className="block hover:text-spotify">
          🔐 Login
        </Link>
        <Link to="/signup" className="block hover:text-spotify">
          ✍️ Sign Up
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar

