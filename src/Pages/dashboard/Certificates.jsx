import React, {useEffect, useState} from 'react'
import { supabase } from '../../supabase'

export default function Certificates(){
  const [list,setList] = useState([])
  useEffect(()=>{fetchAll()},[])
  async function fetchAll(){
    const {data} = await supabase.from('certificates').select('*').order('id',{ascending:false})
    setList(data||[])
  }
  return (
    <div>
      <h3 className="font-semibold">Certificates</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {list.map(c=> <div key={c.id} className="glass p-3 rounded">{c.title}</div>)}
      </div>
    </div>
  )
}
