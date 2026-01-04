export default function SongList({ songs, setCurrentSong }) {
  return (
    <div className="p-6 text-white">
      {songs.map(song => (
        <div
          key={song.id}
          className="p-2 hover:bg-neutral-800 cursor-pointer rounded"
          onClick={() => setCurrentSong(song)}
        >
          {song.title}
        </div>
      ))}
    </div>
  )
}
