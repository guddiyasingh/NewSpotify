import Sidebar from "../components/Sidebar"
import TopNavbar from "../components/TopNavbar"
import Player from "../components/Player"

export default function SpotifyLayout({ children, playerProps }) {
  return (
    <div className="h-screen bg-black text-white flex flex-col">

      {/* TOP NAVBAR */}
      <TopNavbar />

      {/* MIDDLE SECTION */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

      {/* BOTTOM PLAYER */}
      <Player {...playerProps} />
    </div>
  )
}
