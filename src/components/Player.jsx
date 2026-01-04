import { useEffect, useState } from "react"

export default function Player({ songs, currentSong, setCurrentSong }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audio = document.getElementById("audio-player")

  useEffect(() => {
    if (currentSong && audio) {
      audio.load()
      audio.play()
      setIsPlaying(true)
    }
  }, [currentSong])

  const playPause = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const playNext = () => {
    const index = songs.findIndex(s => s.id === currentSong.id)
    const next = songs[index + 1] || songs[0]
    setCurrentSong(next)
  }

  const playPrev = () => {
    const index = songs.findIndex(s => s.id === currentSong.id)
    const prev = songs[index - 1] || songs[songs.length - 1]
    setCurrentSong(prev)
  }

  if (!currentSong) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-900 text-white px-6 py-4 flex items-center justify-between">

      {/* Song Info */}
      <div>
        <p className="font-semibold">{currentSong.title}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 text-xl">
        <button onClick={playPrev}>⏮</button>
        <button
          onClick={playPause}
          className="bg-white text-black rounded-full px-4 py-1"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={playNext}>⏭</button>
      </div>

      {/* Audio */}
      <audio
        id="audio-player"
        onEnded={playNext}
      >
        <source src={currentSong.file} />
      </audio>
    </div>
  )
}
