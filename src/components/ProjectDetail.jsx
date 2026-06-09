import React from 'react'

export default function ProjectDetail({project}){
  if(!project) return null
  return (
    <div>
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="mt-3 text-slate-300">{project.description}</p>
    </div>
  )
}
