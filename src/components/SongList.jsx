function SongList({ songs, onPlay }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Songs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song, index) => (
          <div
            key={song.id}
            onClick={() => onPlay(index)}
            className="bg-dark2 p-4 rounded-lg hover:bg-zinc-700 cursor-pointer transition"
          >
            <p className="font-semibold">{song.title}</p>
            <p className="text-sm text-gray-400">Click to play</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SongList
