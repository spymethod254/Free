import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'

// Fake data for now. Later we pull this from DB
const fakeUsers = [
  { username: "spymethod", name: "Spy Method", bio: "Growth tips daily" },
    { username: "sarah", name: "Sarah Design", bio: "UI/UX Designer" },
      { username: "ahmed", name: "Ahmed Tech", bio: "Building in public" },
      ]

      export default function Homepage() {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                  <div className="max-w-4xl mx-auto">
                          <div className="flex justify-between items-center mb-12">
                                    <h1 className="text-3xl font-bold text-blue-600">SocialBoost</h1>
                                              <Link to="/auth" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Join</Link>
                                                      </div>

                                                              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Users size={24}/> Discover Members</h2>
                                                                      <p className="text-gray-600 mb-8">Find creators and check their links</p>

                                                                              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                                                                        {fakeUsers.map(user => (
                                                                                                    <Link to={`/${user.username}`} key={user.username}
                                                                                                                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex-col items-center text-center">
                                                                                                                                <div className="w-20 h-20 bg-blue-500 rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold">
                                                                                                                                                {user.name[0]}
                                                                                                                                                              </div>
                                                                                                                                                                            <h3 className="font-bold">{user.name}</h3>
                                                                                                                                                                                          <p className="text-sm text-gray-500">@{user.username}</p>
                                                                                                                                                                                                        <p className="text-sm text-gray-600 mt-2">{user.bio}</p>
                                                                                                                                                                                                                    </Link>
                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                                  }