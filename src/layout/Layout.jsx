import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Player from "../components/Player"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Navbar />
          <Outlet />
        </main>
      </div>
      <Player />
    </div>
  )
}
