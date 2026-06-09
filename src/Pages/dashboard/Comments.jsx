import React, {useEffect, useState} from 'react'
import { supabase } from '../../supabase'

export default function Comments(){
  const [list,setList] = useState([])
  useEffect(()=>{fetchAll()},[])
  async function fetchAll(){
    const {data} = await supabase.from('comments').select('*').order('id',{ascending:false})
    setList(data||[])
  }
  return (
    <div>
      <h3 className="font-semibold">Comments</h3>
      <div className="mt-4 grid gap-4">
        {list.map(c=> <div key={c.id} className="glass p-3 rounded">{c.body}</div>)}
      </div>
    </div>
  )
}
