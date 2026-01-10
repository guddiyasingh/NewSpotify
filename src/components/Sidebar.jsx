// export default function Sidebar() {
//   return (
//     <aside className="w-60 bg-black border-r border-neutral-800 p-4 hidden md:block">

//       <nav className="space-y-4">

//         <a className="block text-gray-300 hover:text-white font-medium">
//           Home
//         </a>

//         <a className="block text-gray-300 hover:text-white font-medium">
//           Search
//         </a>

//         <a className="block text-gray-300 hover:text-white font-medium">
//           Your Library
//         </a>

//       </nav>

//       <div className="mt-8 border-t border-neutral-800 pt-4 space-y-2 text-sm text-gray-400">
//         <p>Liked Songs</p>
//         <p>My Playlist #1</p>
//         <p>My Playlist #2</p>
//       </div>

//     </aside>
//   )
// }

// import { Home, Search, Library, PlusSquare, Heart } from "lucide-react"

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-black text-gray-300 hidden md:flex flex-col">

//       {/* Logo */}
//       <div className="px-6 py-5">
//         <h1 className="text-2xl font-bold text-white tracking-tight">
//           Spotify
//         </h1>
//       </div>

//       {/* Main Nav */}
//       <nav className="px-2 space-y-1">
//         <SidebarItem icon={<Home size={22} />} label="Home" />
//         <SidebarItem icon={<Search size={22} />} label="Search" />
//         <SidebarItem icon={<Library size={22} />} label="Your Library" />
//       </nav>

//       {/* Divider */}
//       <div className="my-4 border-t border-neutral-800" />

//       {/* Playlists */}
//       <nav className="px-2 space-y-1">
//         <SidebarItem icon={<PlusSquare size={22} />} label="Create Playlist" />
//         <SidebarItem icon={<Heart size={22} />} label="Liked Songs" />
//       </nav>

//       {/* Playlist List */}
//       <div className="mt-4 px-6 flex-1 overflow-y-auto space-y-2 text-sm text-gray-400">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <p
//             key={i}
//             className="hover:text-white cursor-pointer truncate"
//           >
//             My Playlist #{i + 1}
//           </p>
//         ))}
//       </div>

//     </aside>
//   )
// }

// function SidebarItem({ icon, label }) {
//   return (
//     <button className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-neutral-800 transition w-full text-left">
//       {icon}
//       <span className="font-medium">{label}</span>
//     </button>
//   )
// }



// import { Link } from "react-router-dom"

// export default function Sidebar({ to, icon, label }) {
//   return (
//     <aside className="w-64 bg-black text-gray-300 p-4">
//       <h1 className="text-white text-xl font-bold mb-6">Spotify</h1>

//       <nav className="space-y-3">
//         <Link to="/" className="block hover:text-white">Home</Link>
//         <Link to="/search" className="block hover:text-white">Search</Link>
//         <Link to="/library" className="block hover:text-white">Your Library</Link>
//       </nav>

//       <div className="mt-6 space-y-2">
//         <Link to="/playlist/1" className="block text-sm hover:text-white">
//           My Playlist #1
//         </Link>
//         <Link to="/playlist/2" className="block text-sm hover:text-white">
//           My Playlist #2
//         </Link>
//       </div>
//     </aside>
//   )
// }

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
// ...existing code...