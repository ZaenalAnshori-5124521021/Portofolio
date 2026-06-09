import React from 'react'
import TechStackIcon from '../components/TechStackIcon'

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-28">
      <section className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 glass p-6 rounded-lg">
          <img src="/Asset/profile.png" alt="profile" className="w-full h-64 object-cover rounded-md" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300">Student in IT/Multimedia building modern, animated, and responsive websites. Passionate about UX, performance, and clean code.</p>

          <h3 className="mt-6 font-semibold">Tech Stack</h3>
          <div className="mt-4 grid grid-cols-4 gap-4">
            <TechStackIcon name="React" />
            <TechStackIcon name="Tailwind" />
            <TechStackIcon name="Framer" />
            <TechStackIcon name="Supabase" />
          </div>
        </div>
      </section>
    </div>
  )
}
