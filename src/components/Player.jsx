import { useEffect, useState } from "react"

export default function Player({ songs, currentSong, setCurrentSong }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

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

    isPlaying ? audio.pause() : audio.play()
    setIsPlaying(!isPlaying)
  }

  const playNext = () => {
    const index = songs.findIndex(s => s.id === currentSong.id)
    setCurrentSong(songs[index + 1] || songs[0])
  }

  const playPrev = () => {
    const index = songs.findIndex(s => s.id === currentSong.id)
    setCurrentSong(songs[index - 1] || songs[songs.length - 1])
  }

  const formatTime = (time) => {
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)
    return `${min}:${sec < 10 ? "0" : ""}${sec}`
  }

  const seek = (e) => {
    const value = e.target.value
    audio.currentTime = value
    setCurrentTime(value)
  }

  if (!currentSong) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-900 text-white px-6 py-4">

      {/* Song */}
      <p className="font-semibold">{currentSong.title}</p>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 my-3">
        <button onClick={playPrev}>⏮</button>
        <button
          onClick={playPause}
          className="bg-white text-black rounded-full px-4 py-1"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={playNext}>⏭</button>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3 text-xs">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={seek}
          className="w-full accent-green-500"
        />

        <span>{formatTime(duration)}</span>
      </div>

      {/* Audio */}
      <audio
        id="audio-player"
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onEnded={playNext}
      >
        <source src={currentSong.file} />
      </audio>
    </div>
  )
}
