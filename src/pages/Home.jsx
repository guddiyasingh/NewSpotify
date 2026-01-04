import { useState } from "react"
import songs from "../data/songs"
import SongList from "../components/SongList"
import Player from "../components/Player"

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null)

  return (
    <div className="pb-24 bg-black min-h-screen">
      <SongList songs={songs} setCurrentSong={setCurrentSong} />

      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  )
}



        
    
 