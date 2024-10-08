import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}
     >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl'>
          <button
             onClick={()=>{setColor("red")}}
            className='outline-none px-4 rounded-full'style ={{backgroundColor: "red"}}
          >Red</button>
          <button
           onClick={()=>{setColor("blue")}}
            className='outline-none px-4 rounded-full'style ={{backgroundColor: "blue"}}
          >blue</button>
          <button
            onClick={()=>{setColor("yellow")}}
            className='outline-none px-4 rounded-full'style ={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
            onClick={()=>{setColor("olive")}}
            className='outline-none px-4 rounded-full'style ={{backgroundColor: "Olive"}}
          >Olive</button>
          <button
            onClick={()=>{setColor("gray")}}
            className='outline-none px-4 rounded-full'style ={{backgroundColor: "gray"}}
          >gray</button>
          <button
            onClick={()=>{setColor("white")}}
            className='outline-none px-4 rounded-full'style ={{backgroundColor: "white"}}
          >White</button>
        </div>
        </div></div> 
    </>
  )
}

export default App
