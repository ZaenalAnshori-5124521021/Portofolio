import React from 'react'
import { motion } from 'framer-motion'

export default function CardProject({project,onOpen}){
  return (
    <motion.div whileHover={{scale:1.02}} className="glass p-4 rounded-lg neon">
      <img src={project.image||'/src/assets/placeholder.jpg'} alt={project.title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-3 font-semibold">{project.title}</h3>
      <p className="text-sm text-slate-300">{project.short || project.description}</p>
      <div className="mt-3 flex justify-between items-center">
        <button onClick={()=>onOpen(project)} className="px-3 py-1 glass rounded">Details</button>
        <span className="text-xs text-slate-400">{project.year || '2026'}</span>
      </div>
    </motion.div>
  )
}
