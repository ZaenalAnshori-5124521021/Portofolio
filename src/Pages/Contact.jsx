import React, {useState} from 'react'
import InputField from '../components/InputField'
import { supabase } from '../supabase'

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [sent,setSent] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    const {data,error} = await supabase.from('contacts').insert([{name:form.name,email:form.email,message:form.message}])
    if(!error) setSent(true)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-28">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      {!sent ? (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <InputField label="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <InputField label="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <label className="block">
            <div className="text-sm mb-1 text-slate-300">Message</div>
            <textarea className="w-full p-3 rounded bg-transparent border border-slate-700 outline-none" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
          </label>
          <button className="px-4 py-2 rounded glass">Send</button>
        </form>
      ) : (
        <div className="glass p-6 rounded">Thanks — your message was sent.</div>
      )}
    </div>
  )
}
