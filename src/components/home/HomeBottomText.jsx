import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <div>
        
      </div>
      <p className='absolute lg:w-[25vw] w-64 lg:right-5 right-0 bottom-28  lg:bottom-35 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-3  lg:px-5 border-white rounded-full uppercase'>
        <Link className='text-[6vw] mt-2' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-25 flex items-center px-3 lg:px-5 border-white rounded-full uppercase'>
        <Link className='text-[6vw] mt-2' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText

