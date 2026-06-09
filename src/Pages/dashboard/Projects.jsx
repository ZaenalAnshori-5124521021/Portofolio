import React, {useEffect, useState} from 'react'
import { supabase } from '../../supabase'

export default function Projects(){
  const [list,setList] = useState([])
  useEffect(()=>{fetchAll()},[])
  async function fetchAll(){
    const {data} = await supabase.from('projects').select('*').order('id',{ascending:false})
    setList(data||[])
  }
  return (
    <div>
      <h3 className="font-semibold">Projects</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {list.map(p=> <div key={p.id} className="glass p-3 rounded">{p.title}</div>)}
      </div>
    </div>
  )
}
