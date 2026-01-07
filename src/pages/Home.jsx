export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Good Evening</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition cursor-pointer"
          >
            <div className="w-full aspect-square bg-neutral-700 rounded mb-3" />
            <p className="font-medium">Playlist {i + 1}</p>
            <p className="text-sm text-gray-400">Description</p>
          </div>
        ))}
      </div>
    </div>
  )
}




        
    
 