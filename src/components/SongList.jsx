// export default function SongList({ songs, setCurrentSong }) {
//   return (
//     <div className="p-6 text-white">
//       {songs.map(song => (
//         <div
//           key={song.id}
//           className="p-2 hover:bg-neutral-800 cursor-pointer rounded"
//           onClick={() => setCurrentSong(song)}
//         >
//           {song.title}
//         </div>
//       ))}
//     </div>
//   )
// }

// import { usePlayer } from "../context/PlayerContext"

// export default function SongList({ songs }) {
//   const { playSong } = usePlayer()

//   return (
//     <div>
//       {songs.map((song) => (
//         <div
//           key={song.id}
//           onClick={() => playSong(song)}
//           className="cursor-pointer hover:bg-neutral-800 p-2"
//         >
//           {song.title}
//         </div>
//       ))}
//     </div>
//   )
// }

import { songs } from "../data/songs"
import { usePlayer } from "../context/PlayerContext"

export default function SongList() {
  const { playSong } = usePlayer()

  return (
    <div className="grid grid-cols-4 gap-6">
      {songs.map((song) => (
        <div
          key={song.id}
          onClick={() => playSong(song)}
          className="bg-neutral-800 p-4 rounded cursor-pointer hover:bg-neutral-700"
        >
          <img src={song.cover} className="rounded mb-3" />
          <h3 className="text-white">{song.title}</h3>
          <p className="text-gray-400 text-sm">{song.artist}</p>
        </div>
      ))}
    </div>
  )
}
