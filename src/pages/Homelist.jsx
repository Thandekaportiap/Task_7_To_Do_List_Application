
import React from 'react'

const Homelist = () => {
    let data = {
       title:"to do list",
    }
  return (
   <>
  <section className='flex flex-col items-center justify-center bg-green200'>
  <div className='flex flex-row'>
  <input
  type="text"
  placeholder="Search"
  className="w-full max-w-xs input input-bordered input-info" />
<button className="btn btn-primary lg:btn-md ssm:btn-sm">Add</button>
   </div>
   <div className='flex items-center justify-center w-11/12 p-3 bg-slate-500 h-44'>
    <h1 className='font-extrabold from-neutral-950'>To-Do Lists</h1>
    
   </div>
  </section>
   </>
  )
}

export default Homelist
