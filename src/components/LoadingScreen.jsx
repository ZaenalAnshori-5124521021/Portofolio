import React from 'react'

export default function LoadingScreen(){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-indigo-600 animate-bounce" />
    </div>
  )
}
