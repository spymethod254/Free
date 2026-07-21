import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import RegisterLogin from './RegisterLogin'
import Dashboard from './Dashboard'
import PublicProfile from './PublicProfile'

export default function App() {
  return (
      <Routes>
            <Route path="/" element={<Homepage />} />
                  <Route path="/auth" element={<RegisterLogin />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                              <Route path="/:username" element={<PublicProfile />} />
                                  </Routes>
                                    )
                                    }