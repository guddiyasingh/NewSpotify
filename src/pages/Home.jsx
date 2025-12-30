import { useState, useRef } from "react"
import songs from "../data/songs"
import Sidebar from "../components/Sidebar"
import SongList from "../components/SongList"
import Player from "../components/Player"
import { useEffect } from "react"


function Home() {
  const [currentIndex, setCurrentIndex] = useState(null)
  const [isShuffle, setIsShuffle] = useState(false)
  const [repeatMode, setRepeatMode] = useState("off") // off | one | all
  const audioRef = useRef(null)

  const currentSong = 
  currentIndex !== null ? songs[currentIndex] : null

   // Auto play when song changes
  useEffect(() => {
    if (audioRef.current) audioRef.current.play()
  }, [currentIndex])

  const playSong = (index) => {
    setCurrentIndex(index)
    // setTimeout(() => audioRef.current?.play(), 0)
  }

  const playNext = () => {
    if (currentIndex === null) return
    // setCurrentIndex((currentIndex + 1) % songs.length)
     if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * songs.length)
      setCurrentIndex(randomIndex)
      return
    }

    if (currentIndex === songs.length - 1) {
      if (repeatMode === "all") setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const playPrev = () => {
   
     if (currentIndex === null) return

    if (currentIndex === 0) {
      setCurrentIndex(songs.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }

  }

 const toggleShuffle = () => {
    setIsShuffle(!isShuffle)
  }

      const toggleRepeat = () => {
    setRepeatMode((prev) =>
      prev === "off" ? "all" : prev === "all" ? "one" : "off"
    )
  }

   const handleEnded = () => {
    if (repeatMode === "one") {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      playNext()
    }
  }

  return (
   
    <div className="flex h-screen bg-dark">
    <Sidebar />

    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <SongList songs={songs} onPlay={playSong} />
      </div>

      <Player
        song={currentSong}
        audioRef={audioRef}
        onNext={playNext}
        onPrev={playPrev}
        onShuffle={toggleShuffle}
        onRepeat={toggleRepeat}
        isShuffle={isShuffle}
        repeatMode={repeatMode}
        onEnded={handleEnded}
      />
    </div>
  </div>
        
    
  )
}

export default Home
