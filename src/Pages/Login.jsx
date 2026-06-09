import React, {useState} from 'react'
import { supabase } from '../supabase'
import InputField from '../components/InputField'

export default function Login(){
  const [form,setForm] = useState({email:'',password:''})
  const [msg,setMsg] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({email:form.email,password:form.password})
    if(error) setMsg(error.message)
    else setMsg('Logged in')
  }

  return (
    <div className="max-w-md mx-auto px-6 py-28">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <InputField label="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <InputField label="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="px-4 py-2 rounded glass">Sign in</button>
      </form>
      {msg && <div className="mt-4 text-sm">{msg}</div>}
    </div>
  )
}
