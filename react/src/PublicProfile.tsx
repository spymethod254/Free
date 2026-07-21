import { useParams } from 'react-router-dom'

export default function PublicProfile() {
  const { username } = useParams()
    return (
        <div className="p-8 text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      {username?.[0].toUpperCase()}
                            </div>
                                  <h1 className="text-3xl font-bold">@{username}</h1>
                                        <p className="text-gray-600">This user's links will show here</p>
                                            </div>
                                              )
                                              }