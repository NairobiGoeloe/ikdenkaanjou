import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Message from './pages/Message'
import Faq from './pages/Faq'
import Status from './pages/Status'
import Login from './pages/Login'
import Testing from './pages/Testing'
import TestingComp from './pages/TestingComp'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigatiebalk */}
      <nav className="flex gap-4 p-4 bg-background">
        <Link to="/" className="text-body hover:underline">
          Landing
        </Link>
        <Link to="/message" className="text-body hover:underline">
          Message
        </Link>
        <Link to="/faq" className="text-body hover:underline">
          FAQ
        </Link>
        <Link to="/status" className="text-body hover:underline">
          Status
        </Link>
        <Link to="/login" className="text-body hover:underline">
          Login
        </Link>
        <Link to="/testing" className="text-body hover:underline">
          Opmaak
        </Link>
        <Link to="/testingcomp" className="text-body hover:underline">
          Componenten
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/message" element={<Message />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/status" element={<Status />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/testingcomp" element={<TestingComp />} />
      </Routes>
    </div>
  )
}
