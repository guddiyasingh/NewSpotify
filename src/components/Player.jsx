import { useEffect, useState } from "react"

function Player({
  song,
  audioRef,
  onNext,
  onPrev,
  onShuffle,
  onRepeat,
  isShuffle,
  repeatMode,
  onEnded
}) {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const setMeta = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", setMeta)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", setMeta)
      audio.removeEventListener("ended", onEnded)
    }
  }, [song])

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value
  }

  const formatTime = (time) => {
    if (!time) return "0:00"
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60).toString().padStart(2, "0")
    return `${min}:${sec}`
  }

  if (!song) return <div className="player">Select a song</div>

  return (
  
  <div className="bg-black p-4 border-t border-zinc-800">
    <p className="text-sm mb-2 text-gray-300">
      {song ? `Now Playing: ${song.title}` : "Select a song"}
    </p>

    <audio ref={audioRef} src={song?.file} />

    <div className="flex items-center gap-4">
      <button
        onClick={onShuffle}
        className={isShuffle ? "text-spotify" : ""}
      >
        🔀
      </button>

      <button onClick={onPrev}>⏮</button>
      <button onClick={onPlayPause}>⏯</button>
      <button onClick={onNext}>⏭</button>

      <button
        onClick={onRepeat}
        className={repeatMode !== "off" ? "text-spotify" : ""}
      >
        🔁
      </button>
    </div>

    {/* Progress bar */}
    <input
      type="range"
      className="w-full mt-3 accent-spotify"
      min="0"
      max={duration || 0}
      value={currentTime}
      onChange={handleSeek}
    />
  </div>
)

  
}

export default Player
