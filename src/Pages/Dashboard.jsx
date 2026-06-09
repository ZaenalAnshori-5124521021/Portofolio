import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Projects from './dashboard/Projects'
import Certificates from './dashboard/Certificates'
import Comments from './dashboard/Comments'

export default function Dashboard(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-28">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="flex gap-4 mt-4">
        <Link to="projects" className="glass p-2 rounded">Projects</Link>
        <Link to="certificates" className="glass p-2 rounded">Certificates</Link>
        <Link to="comments" className="glass p-2 rounded">Comments</Link>
      </div>
      <div className="mt-6">
        <Routes>
          <Route path="projects" element={<Projects />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </div>
    </div>
  )
}
