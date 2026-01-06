export default function Sidebar() {
  return (
    <aside className="w-60 bg-black border-r border-neutral-800 p-4 hidden md:block">

      <nav className="space-y-4">

        <a className="block text-gray-300 hover:text-white font-medium">
          Home
        </a>

        <a className="block text-gray-300 hover:text-white font-medium">
          Search
        </a>

        <a className="block text-gray-300 hover:text-white font-medium">
          Your Library
        </a>

      </nav>

      <div className="mt-8 border-t border-neutral-800 pt-4 space-y-2 text-sm text-gray-400">
        <p>Liked Songs</p>
        <p>My Playlist #1</p>
        <p>My Playlist #2</p>
      </div>

    </aside>
  )
}


