import React, {useState} from 'react'
import CardProject from '../components/CardProject'
import Modal from '../components/Modal'
import ProjectDetail from '../components/ProjectDetail'

const sample = [
  {id:1,title:'Project One',short:'A sleek app UI',description:'Full description of project one.'},
  {id:2,title:'Project Two',short:'Interactive website',description:'Full description of project two.'}
]

export default function Portfolio(){
  const [open,setOpen] = useState(false)
  const [active,setActive] = useState(null)
  return (
    <div className="max-w-6xl mx-auto px-6 py-28">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sample.map(p=> <CardProject key={p.id} project={p} onOpen={(proj)=>{setActive(proj);setOpen(true)}} />)}
      </div>

      <Modal open={open} onClose={()=>setOpen(false)}>
        <ProjectDetail project={active} />
      </Modal>
    </div>
  )
}
