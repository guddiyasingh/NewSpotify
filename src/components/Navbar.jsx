export default function TopNavbar() {
  return (
    <header className="h-16 bg-black border-b border-neutral-800 flex items-center justify-between px-6">

      {/* Logo */}
      <h1 className="text-xl font-bold text-green-500">
        Spotify
      </h1>

      {/* Auth Buttons */}
      <div className="space-x-4">
        <button className="text-sm text-gray-300 hover:text-white">
          Sign up
        </button>
        <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:scale-105 transition">
          Log in
        </button>
      </div>

    </header>
  )
}
