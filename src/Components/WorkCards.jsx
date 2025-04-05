import Atropos from 'atropos/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
function ProjectCard() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center p-8'>
      <div id="work" className='w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3'>
        <Atropos>
          <div onClick={() => window.open("https://www.worlddisastercenter.org/", "_blank")} className='cursor-pointer max-w-96 flex justify-center min-w-full items-center bg-[url(assets/Images/wdc.png)] bg-cover bg-blend-overlay bg-[#42424293] h-52 rounded-xl'>
            <h1 className='font-[poppins] text-2xl md:text-3xl text-violet-100 font-semibold text-center p-6'>World Disaster Center</h1>
          </div>
          <h1 className='font-[poppins] text-2xl md:text-3xl text-violet-100 font-semibold text-center mt-6'>Full Stack Developer</h1>
        </Atropos>
        <Atropos>
          <div onClick={() => window.open("https://michealapp.vercel.app", "_blank")} className='cursor-pointer flex-col min-w-full max-w-96 flex justify-center items-center bg-[url(assets/Images/michael.png)] bg-cover bg-[#286a99] h-52 rounded-xl'>
            <h1 className='font-[poppins] text-2xl md:text-3xl font-semibold text-center p-6 bg-zinc-200 opacity-90 rounded-xl text-[#286a99]'>Michael</h1>
          </div>
          <h1 className='font-[poppins] text-2xl md:text-3xl text-violet-100 font-semibold text-center mt-6'>Full Stack Developer</h1>
        </Atropos>
      </div>
    </div>
  )
}

export default ProjectCard
