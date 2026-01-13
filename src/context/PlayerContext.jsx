// import { createContext, useContext, useRef, useState } from "react"
// import songs from "../data/songs"

// const PlayerContext = createContext()

// export function PlayerProvider({ children }) {
//   const audioRef = useRef(new Audio())

//   const [currentIndex, setCurrentIndex] = useState(null)
//   const [isPlaying, setIsPlaying] = useState(false)

//   const currentSong =
//     currentIndex !== null ? songs[currentIndex] : null

//   // ▶️ Play selected song
//   const playSong = (song) => {
//     const index = songs.findIndex((s) => s.id === song.id)
//     if (index === -1) return

//     setCurrentIndex(index)
//     audioRef.current.src = song.src
//     audioRef.current.play()
//     setIsPlaying(true)
//   }

//   // ⏯ Play / Pause
//   const togglePlay = () => {
//     if (!currentSong) return

//     if (isPlaying) {
//       audioRef.current.pause()
//     } else {
//       audioRef.current.play()
//     }
//     setIsPlaying(!isPlaying)
//   }

//   // ⏭ Next
//   const nextSong = () => {
//     if (currentIndex === null) return

//     const nextIndex = (currentIndex + 1) % songs.length
//     setCurrentIndex(nextIndex)
//     audioRef.current.src = songs[nextIndex].src
//     audioRef.current.play()
//     setIsPlaying(true)
//   }

//   // ⏮ Previous
//   const prevSong = () => {
//     if (currentIndex === null) return

//     const prevIndex =
//       (currentIndex - 1 + songs.length) % songs.length
//     setCurrentIndex(prevIndex)
//     audioRef.current.src = songs[prevIndex].src
//     audioRef.current.play()
//     setIsPlaying(true)
//   }

//   return (
//     <PlayerContext.Provider
//       value={{
//         currentSong,
//         isPlaying,
//         playSong,
//         togglePlay,
//         nextSong,
//         prevSong,
//       }}
//     >
//       {children}
//     </PlayerContext.Provider>
//   )
// }

// export const usePlayer = () => useContext(PlayerContext)




// import { createContext, useContext, useRef, useState } from "react"

// const PlayerContext = createContext()

// export function PlayerProvider({ children }) {
//   const audioRef = useRef(new Audio())
//   const [currentSong, setCurrentSong] = useState(null)
//   const [isPlaying, setIsPlaying] = useState(false)

//   const playSong = (song) => {
//     if (!song) return

//     if (audioRef.current.src !== window.location.origin + song.src) {
//       audioRef.current.src = song.src
//     }

//     audioRef.current.play()
//     setCurrentSong(song)
//     setIsPlaying(true)
//   }

//   const pauseSong = () => {
//     audioRef.current.pause()
//     setIsPlaying(false)
//   }

//   return (
//     <PlayerContext.Provider
//       value={{ currentSong, isPlaying, playSong, pauseSong }}
//     >
//       {children}
//     </PlayerContext.Provider>
//   )
// }

// /* 👇 THIS EXPORT WAS MISSING OR BROKEN */
// export function usePlayer() {
//   return useContext(PlayerContext)
// }

import { createContext, useContext, useRef, useState } from "react"
import songs from "../data/songs"

const PlayerContext = createContext()

export function PlayerProvider({ children }) {
  const audioRef = useRef(new Audio())
  const [currentIndex, setCurrentIndex] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playSong = (song) => {
    const index = songs.findIndex((s) => s.id === song.id)
    if (index === -1) return

    audioRef.current.src = song.src
    audioRef.current.play()

    setCurrentIndex(index)
    setIsPlaying(true)
  }

  const pauseSong = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const nextSong = () => {
    if (currentIndex === null) return
    const nextIndex = (currentIndex + 1) % songs.length
    playSong(songs[nextIndex])
  }

  const prevSong = () => {
    if (currentIndex === null) return
    const prevIndex =
      (currentIndex - 1 + songs.length) % songs.length
    playSong(songs[prevIndex])
  }

  return (
    <PlayerContext.Provider
      value={{
        currentSong: songs[currentIndex],
        isPlaying,
        playSong,
        pauseSong,
        nextSong,
        prevSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  return useContext(PlayerContext)
}
