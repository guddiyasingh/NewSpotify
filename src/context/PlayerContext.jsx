import { createContext, useContext, useState } from "react"

const PlayerContext = createContext()

export function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playSong = (song) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  return (
    <PlayerContext.Provider
      value={{ currentSong, isPlaying, setIsPlaying, playSong }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  return useContext(PlayerContext)
}
