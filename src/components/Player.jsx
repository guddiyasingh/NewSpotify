export default function Player() {
  return (
    <footer className="h-20 bg-black border-t border-neutral-800 px-6 flex items-center justify-between">

      {/* Song Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-neutral-700 rounded" />
        <div>
          <p className="text-sm font-medium">Song Name</p>
          <p className="text-xs text-gray-400">Artist</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button>⏮</button>
        <button className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center">
          ▶
        </button>
        <button>⏭</button>
      </div>

      {/* Volume */}
      <div className="hidden md:flex items-center gap-2">
        <span>🔊</span>
        <div className="w-24 h-1 bg-neutral-600 rounded" />
      </div>

    </footer>
  )
}
