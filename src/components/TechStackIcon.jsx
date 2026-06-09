import React from 'react'

export default function TechStackIcon({name,icon}){
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 glass flex items-center justify-center rounded">{icon||name[0]}</div>
      <div className="text-xs text-slate-300">{name}</div>
    </div>
  )
}
