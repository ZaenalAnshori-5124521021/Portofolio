import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <motion.header initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className="fixed w-full z-40 top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between glass">
        <Link to="/" className="text-xl font-semibold text-white">Dev<span className="text-primary">Port</span></Link>
        <nav className="space-x-4 hidden md:block">
          <NavLink to="/" className={({isActive})=>isActive? 'text-primary':'hover:text-primary'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-primary':'hover:text-primary'}>About</NavLink>
          <NavLink to="/portfolio" className={({isActive})=>isActive? 'text-primary':'hover:text-primary'}>Portfolio</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-primary':'hover:text-primary'}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-3 py-1 rounded neon glass">Admin</Link>
        </div>
      </div>
    </motion.header>
  )
}
