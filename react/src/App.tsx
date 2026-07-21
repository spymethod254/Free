import { Routes, Route, Link } from 'react-router-dom'

function Landing() {
  return (
      <div className="min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-5xl font-bold mb-4">SocialBoost</h1>
                  <p className="text-lg text-gray-600 mb-8">One link for all your socials. Grow faster together.</p>
                        <div className="flex gap-4">
                                <Link to="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</Link>
                                        <Link to="/login" className="px-6 py-3 border rounded-lg hover:bg-gray-100">Login</Link>
                                              </div>
                                                  </div>
                                                    )
                                                    }

                                                    function Dashboard() {
                                                      return <div className="p-8"><h1 className="text-3xl font-bold">Dashboard</h1><p>Manage your links here</p></div>
                                                      }

                                                      function PublicProfile() {
                                                        return <div className="p-8"><h1 className="text-3xl font-bold">@username</h1><p>Public links page</p></div>
                                                        }

                                                        export default function App() {
                                                          return (
                                                              <Routes>
                                                                    <Route path="/" element={<Landing />} />
                                                                          <Route path="/dashboard" element={<Dashboard />} />
                                                                                <Route path="/:username" element={<PublicProfile />} />
                                                                                    </Routes>
                                                                                      )
                                                                                      }