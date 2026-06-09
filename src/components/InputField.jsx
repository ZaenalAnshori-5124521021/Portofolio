import React from 'react'

export default function InputField({label, ...props}){
  return (
    <label className="block">
      {label && <div className="text-sm mb-1 text-slate-300">{label}</div>}
      <input className="w-full p-3 rounded bg-transparent border border-slate-700 focus:border-primary outline-none" {...props} />
    </label>
  )
}
