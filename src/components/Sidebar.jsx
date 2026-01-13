

// ...existing code...
import { Link } from "react-router-dom"
import { Home, Search, Library, PlusSquare, Heart } from "lucide-react"

export default function Sidebar() {
  const base = "flex items-center gap-4 px-4 py-2 rounded-md hover:bg-neutral-800 transition w-full text-left"

  function SidebarItem({ to, icon, label }) {
    if (to) {
      return (
        <Link to={to} className={base}>
          {icon}
          <span className="font-medium">{label}</span>
        </Link>
      )
    }
    return (
      <button className={base}>
        {icon}
        <span className="font-medium">{label}</span>
      </button>
    )
  }

  return (
    <aside className="w-64 bg-black text-gray-300 p-4">
      <h1 className="text-white text-xl font-bold mb-6">Spotify</h1>

      <nav className="space-y-3">
        <SidebarItem to="/" icon={<Home size={22} />} label="Home" />
        <SidebarItem to="/search" icon={<Search size={22} />} label="Search" />
        <SidebarItem to="/library" icon={<Library size={22} />} label="Your Library" />
      </nav>

      <div className="my-4 border-t border-neutral-800" />

      <nav className="px-2 space-y-1">
        <SidebarItem to="/create-playlist" icon={<PlusSquare size={22} />} label="Create Playlist" />
        <SidebarItem to="/liked-songs" icon={<Heart size={22} />} label="Liked Songs" />
      </nav>

      <div className="mt-6 space-y-2">
        <Link to="/playlist/1" className="block text-sm hover:text-white">
          My Playlist #1
        </Link>
        <Link to="/playlist/2" className="block text-sm hover:text-white">
          My Playlist #2
        </Link>
      </div>
    </aside>
  )
}
