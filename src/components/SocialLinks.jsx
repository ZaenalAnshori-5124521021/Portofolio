import React from 'react'
import { GitHub, Linkedin } from 'lucide-react'

export default function SocialLinks(){
  return (
    <div className="flex gap-3">
      <a href="#" aria-label="github"><GitHub /></a>
      <a href="#" aria-label="linkedin"><Linkedin /></a>
    </div>
  )
}
