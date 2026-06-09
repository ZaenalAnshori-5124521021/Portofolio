import React, {useState, useEffect} from 'react'
import Background from '../components/Background'
import { motion } from 'framer-motion'
import SocialLinks from '../components/SocialLinks'

function Typing({words, speed=120}){
  const [text,setText] = useState('')
  const [i,setI] = useState(0)
  useEffect(()=>{
    const word = words[i % words.length]
    let idx=0
    const t = setInterval(()=>{
      idx++
      setText(word.slice(0,idx))
      if(idx>=word.length){
        clearInterval(t)
        setTimeout(()=> setI(i+1),800)
      }
    }, speed)
    return ()=>clearInterval(t)
  },[i])
  return <span className="text-primary">{text}</span>
}

export default function Home(){
  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="max-w-6xl mx-auto px-6 py-28">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold">Hi, I'm a student developer</h1>
            <p className="mt-4 text-slate-300">I build modern interfaces and animations. <Typing words={["Frontend Engineer","Multimedia Student","React Enthusiast"]} /></p>
            <div className="mt-6"><SocialLinks /></div>
          </div>
          <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="glass p-6 rounded-lg">
            <img src="/Asset/home1.png" alt="profile" className="w-full h-72 object-cover rounded" />
          </motion.div>
        </section>
      </div>
    </div>
  )
}
