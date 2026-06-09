import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({open,onClose,children}){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} className="relative max-w-3xl w-full glass p-6 rounded-lg">
        <button onClick={onClose} className="absolute right-4 top-4">✕</button>
        {children}
      </motion.div>
    </div>
  )
}
