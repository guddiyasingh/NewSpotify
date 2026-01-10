import { useParams } from "react-router-dom"

export default function Playlist() {
  const { id } = useParams()

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold">Playlist {id}</h1>
      <p className="text-gray-400">Songs will appear here</p>
    </div>
  )
}
