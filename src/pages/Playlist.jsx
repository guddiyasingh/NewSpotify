// import { useParams } from "react-router-dom"
// import songs from "../data/songs"

// export default function Playlist() {
//   const { id } = useParams()

//   return (
//     <div className="text-white p-6">
//       {/* Playlist Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">My Playlist #{id}</h1>
//         <p className="text-gray-400">Enjoy your music</p>
//       </div>

//       {/* Song List */}
//       <div className="space-y-3">
//         {songs.map((song, index) => (
//           <div
//             key={song.id}
//             className="flex items-center gap-4 p-3 rounded hover:bg-neutral-800 cursor-pointer"
//           >
//             <span className="w-6 text-gray-400">{index + 1}</span>

//             <img
//               src={song.cover}
//               alt={song.title}
//               className="w-12 h-12 rounded"
//             />

//             <div>
//               <p className="font-medium">{song.title}</p>
//               <p className="text-sm text-gray-400">{song.artist}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// import { useParams } from "react-router-dom"
// import songs from "../data/songs"
// import { usePlayer } from "../context/PlayerContext"

// export default function Playlist() {
//   const { id } = useParams()
//   const { playSong } = usePlayer()

//   return (
//     <div className="text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Playlist #{id}</h1>

//       <div className="space-y-3">
//         {songs.map((song, index) => (
//           <div
//             key={song.id}
//             onClick={() => playSong(song)}
//             className="flex items-center gap-4 p-3 rounded hover:bg-neutral-800 cursor-pointer"
//           >
//             <span className="w-6 text-gray-400">{index + 1}</span>

//             <img
//               src={song.cover}
//               className="w-12 h-12 rounded"
//               alt={song.title}
//             />

//             <div>
//               <p className="font-medium">{song.title}</p>
//               <p className="text-sm text-gray-400">{song.artist}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// import { usePlayer } from "../context/PlayerContext"

// export default function Player() {
//   const {
//     currentSong,
//     isPlaying,
//     playSong,
//     pauseSong,
//     nextSong,
//     prevSong,
//   } = usePlayer()

//   if (!currentSong) return null

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white h-24 flex items-center justify-between px-6">
      
//       {/* Song Info */}
//       <div className="flex items-center gap-3 w-1/3">
//         <img
//           src={currentSong.cover}
//           className="w-14 h-14 rounded"
//           alt={currentSong.title}
//         />
//         <div>
//           <p className="text-sm font-medium">{currentSong.title}</p>
//           <p className="text-xs text-gray-400">{currentSong.artist}</p>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="flex items-center gap-6">
//         <button onClick={prevSong} className="text-xl">⏮</button>

//         <button
//           onClick={isPlaying ? pauseSong : () => playSong(currentSong)}
//           className="bg-white text-black px-4 py-2 rounded-full font-bold"
//         >
//           {isPlaying ? "⏸" : "▶"}
//         </button>

//         <button onClick={nextSong} className="text-xl">⏭</button>
//       </div>

//       {/* Right space (future volume) */}
//       <div className="w-1/3 text-right text-gray-400 text-sm">
//         Spotify Clone
//       </div>
//     </div>
//   )
// }

import { usePlayer } from "../context/PlayerContext"

export default function Player() {
  const { currentSong, isPlaying, togglePlay } = usePlayer()

  // 🔴 THIS IS WHY PLAYER DOESN'T SHOW
  if (!currentSong) return null

  return (
    <div className="h-24 bg-neutral-900 border-t border-neutral-800 flex items-center px-6">
      <div className="flex items-center gap-4 w-1/3">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-14 h-14 rounded"
        />
        <div>
          <p className="font-semibold">{currentSong.title}</p>
          <p className="text-sm text-gray-400">{currentSong.artist}</p>
        </div>
      </div>

      <div className="w-1/3 flex justify-center">
        <button
          onClick={togglePlay}
          className="bg-white text-black px-4 py-2 rounded-full"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  )
}
